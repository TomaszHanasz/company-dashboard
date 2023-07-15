import React, { useContext } from "react";
import { ThemeContext } from "../../App";
import "./leaders.style.css";

const Leaders = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`leaders__container home-menus-${theme}`}>
      <h2 className={`home-menus__title home-menus__title-${theme}`}>
        Leaders
      </h2>
      <div className="leaders__chart-container">
        <div className={`leaders__chart__box leaders__chart__box-green`}>
          <div className="leader__chart__box-product">Lean Hogs</div>
          <div>3.62%</div>
        </div>
        <div className={`leaders__chart__box leaders__chart__box-green`}>
          <div className="leader__chart__box-product">Cotton</div>
          <div>3.61%</div>
        </div>
        <div className={`leaders__chart__box leaders__chart__box-green`}>
          <div className="leader__chart__box-product">Pork Cutout</div>
          <div>3.4%</div>
        </div>
        <div className={`leaders__chart__box leaders__chart__box-red`}>
          <div className="leader__chart__box-product">US Midwest Steel RCU</div>
          <div>3.22%</div>
        </div>
        <div className={`leaders__chart__box leaders__chart__box-red`}>
          <div className="leader__chart__box-product">Urea FOB Egypt</div>
          <div>2.72%</div>
        </div>
      </div>
    </div>
  );
};

export default Leaders;
