import { NavLink } from "react-router";
import { useAuth } from "../hooks/useAuth";

const Header = () => {
  const { isAuthenticated } = useAuth();

  return (
    <header className="flex justify-between px-8 py-4 bg-teal-600 text-white h-20">
      <p>Header</p>
      <div className="flex gap-4 items-center">
        <NavLink
          className={({ isActive }) =>
            isActive ? "underline underline-offset-8" : "no-underline"
          }
          to="/">
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "underline underline-offset-8" : "no-underline"
          }
          to="/contact">
          Contact
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "underline underline-offset-8" : "no-underline"
          }
          to="/favorites">
          Favorieten
        </NavLink>
        {!isAuthenticated ? (
          <>
            <NavLink
              className={({ isActive }) =>
                isActive ? "underline underline-offset-8" : "no-underline"
              }
              to="/login">
              Login
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "underline underline-offset-8" : "no-underline"
              }
              to="/register">
              Register
            </NavLink>
          </>
        ) : (
          <NavLink
            className={({ isActive }) =>
              isActive ? "underline underline-offset-8" : "no-underline"
            }
            to="/profile">
            Profiel
          </NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
