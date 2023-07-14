import React, { useContext } from "react";
import bell from "../../images/notification-svgrepo-com.svg";
import bellGrey from "../../images/notification-svgrepo-com (1).svg";
import Avatar from "@mui/material/Avatar";
import Logo from "../../images/logo.png";
import squaresGreen from "../../images/element-3-svgrepo-com (2).svg";
import squares from "../../images/element-3-svgrepo-com (1).svg";
import "./navBar.style.css";
import { ThemeContext } from "../../App";

const NavBar = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const onClickTheme = () => {
    setTheme("dark");
    if (theme === "dark") {
      setTheme("light");
    }
  };

  return (
    <div className={`navigation-bar navbar-${theme}`}>
      <img src={Logo} alt="logo" className="navigation-bar__logo" />
      <h1 className={`navbar-title navbar-title-${theme}`}>Dashboard</h1>
      <div className="navigation-bar__right">
        <img
          src={theme === "dark" ? squaresGreen : squares}
          className="navbar__icon"
          alt="menu icons"
        />
        <img
          src={theme === "dark" ? bellGrey : bell}
          className="navbar__icon"
          alt="notifications"
        />
        <Avatar onClick={onClickTheme} style={{ width: 30, height: 30 }}>
          H
        </Avatar>
      </div>
    </div>
  );
};

export default NavBar;
