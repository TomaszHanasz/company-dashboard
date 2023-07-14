import React, { useContext } from "react";
import GridViewIcon from "@mui/icons-material/GridView";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import Avatar from "@mui/material/Avatar";
import Logo from "../../images/logo.png";
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
    <div className="navigation-bar">
      <img src={Logo} alt="logo" className="navigation-bar__logo" />
      <h1>Dashboard</h1>
      <div className="navigation-bar__right">
        <GridViewIcon style={{ width: 30, height: 30 }} />
        <NotificationsNoneOutlinedIcon style={{ width: 30, height: 30 }} />
        <Avatar onClick={onClickTheme} style={{ width: 30, height: 30 }}>
          H
        </Avatar>
      </div>
    </div>
  );
};

export default NavBar;
