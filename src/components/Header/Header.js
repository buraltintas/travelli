import { useState } from "react";
import { NavLink } from "react-router-dom";

import logo from "../../img/logo.svg";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <div>
        <NavLink to="/home">
          <img src={logo} alt="logo" className={classes.logo} />
        </NavLink>
      </div>
      <NavLink to="/select" className={classes.navButton}>
        Git! Gez! Gör!
      </NavLink>
    </header>
  );
};

export default Header;
