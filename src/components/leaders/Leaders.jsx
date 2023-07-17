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
        <div class="leaders__chart__box">
          <div class="card">
            <div class="side leaders__chart__box leaders__chart__box-green">
              <h5 className="leader__chart__box-product">Lean Hogs</h5>
              <p>3.62%</p>
            </div>
            <div class="side back">
              <p>Current Price:</p>
              <p>$5000</p>
            </div>
          </div>
        </div>
        <div class="leaders__chart__box">
          <div class="card">
            <div class="side leaders__chart__box leaders__chart__box-green">
              <h5 className="leader__chart__box-product">Cotton</h5>
              <p>3.61%</p>
            </div>
            <div class="side back">
              <p>Current Price:</p>
              <p>$120</p>
            </div>
          </div>
        </div>
        <div class="leaders__chart__box">
          <div class="card">
            <div class="side leaders__chart__box leaders__chart__box-green">
              <h5 className="leader__chart__box-product">Pork Cutout</h5>
              <p>3.41%</p>
            </div>
            <div class="side back">
              <p>Current Price:</p>
              <p>$290</p>
            </div>
          </div>
        </div>
        <div class="leaders__chart__box">
          <div class="card">
            <div class="side leaders__chart__box leaders__chart__box-red">
              <h5 className="leader__chart__box-product">
                US Midwest Steel RCU
              </h5>
              <p>2.10%</p>
            </div>
            <div class="side back">
              <p>Current Price:</p>
              <p>$900</p>
            </div>
          </div>
        </div>
        <div class="leaders__chart__box">
          <div class="card">
            <div class="side leaders__chart__box leaders__chart__box-red">
              <h5 className="leader__chart__box-product">Urea FOB Egypt</h5>
              <p>1.69%</p>
            </div>
            <div class="side back">
              <p>Current Price:</p>
              <p>$112</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leaders;
