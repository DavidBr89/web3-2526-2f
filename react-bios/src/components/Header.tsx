import React from "react";
import { NavLink } from "react-router";

const Header = () => {
  return (
    <header>
      <p>Header</p>
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
    </header>
  );
};

export default Header;
