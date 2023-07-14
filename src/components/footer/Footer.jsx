import React, { useContext } from "react";
import { ThemeContext } from "../../App";
import "./footer.style.css";

const Footer = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`footer footer-${theme}`}>
      <h3> ©{new Date().getFullYear()} ADM Investors Services, Inc </h3>
    </div>
  );
};

export default Footer;
