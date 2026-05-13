import { NavLink } from "react-router";

import { useAuth } from "react-oidc-context";

const Header = () => {
  const auth = useAuth();

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
        {auth.isAuthenticated ? (
          <NavLink
            className={({ isActive }) =>
              isActive ? "underline underline-offset-8" : "no-underline"
            }
            to="/profile">
            Profiel
          </NavLink>
        ) : (
          <>
            <button
              onClick={() => {
                auth.signinRedirect();
              }}>
              Login
            </button>
            <NavLink
              className={({ isActive }) =>
                isActive ? "underline underline-offset-8" : "no-underline"
              }
              to="/register">
              Register
            </NavLink>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
