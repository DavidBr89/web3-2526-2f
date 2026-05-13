import {
  createContext,
  useEffect,
  useState,
  type Dispatch,
  type PropsWithChildren,
  type SetStateAction,
} from "react";
import Axios from "axios";
import { expressAxios } from "../api/movieApi";

interface AuthContextType {
  isAuthenticated: boolean;
  setIsAuthenticated: Dispatch<SetStateAction<boolean>>;
  isAuthLoading: boolean;
  login: () => void;
  logout: () => Promise<void>;
  register: () => void;
}

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext<AuthContextType | null>(null);

const AuthProvider = (props: PropsWithChildren) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAuthLoading, setIsAuthLoading] = useState(true);

  useEffect(() => {
    setIsAuthLoading(true);
    const verify = async () => {
      try {
        await expressAxios.get("/verify");

        setIsAuthenticated(true);
      } catch (error) {
        console.error(error);
      } finally {
        setIsAuthLoading(false);
      }
    };

    verify();
  }, []);

  const login = () => {};

  const logout = async () => {
    try {
      await expressAxios.get("/logout");
      setIsAuthenticated(false);
    } catch (error) {
      console.log(error);
    }
  };

  const register = () => {};

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        isAuthLoading,
        login,
        logout,
        register,
      }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
