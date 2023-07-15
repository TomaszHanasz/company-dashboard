import React, { useContext, useState } from "react";
import { ThemeContext } from "../../App";
import "./leaders.style.css";

const Leaders = () => {
  const { theme } = useContext(ThemeContext);
  const [flipped, setFlipped] = useState("front");

  const onFlipHandler = () => {
    setFlipped("back");
    if (flipped === "back") {
      setFlipped("front");
    }
    console.log(flipped);
  };

  return (
    <div className={`leaders__container home-menus-${theme}`}>
      <h2 className={`home-menus__title home-menus__title-${theme}`}>
        Leaders
      </h2>
      <div className="leaders__chart-container">
      <div class="leaders__chart__box">
        <div class="card">
          <div class="side leaders__chart__box leaders__chart__box-green">
            <div className="leader__chart__box-product">Lean Hogs</div>
            <p>3.62%</p>
          </div>
          <div class="side back">
            <p>$5000</p>
          </div>
        </div>
      </div>
      <div class="leaders__chart__box">
        <div class="card">
          <div class="side leaders__chart__box leaders__chart__box-green">
            <div className="leader__chart__box-product">Cotton</div>
            <p>3.61%</p>
          </div>
          <div class="side back">
            <p>$120</p>
          </div>
        </div>
      </div>
      <div class="leaders__chart__box">
        <div class="card">
          <div class="side leaders__chart__box leaders__chart__box-green">
            <div className="leader__chart__box-product">Pork Cutout</div>
            <p>3.41%</p>
          </div>
          <div class="side back">
            <p>$290</p>
          </div>
        </div>
      </div>
      <div class="leaders__chart__box">
        <div class="card">
          <div class="side leaders__chart__box leaders__chart__box-red">
            <div className="leader__chart__box-product">US Midwest Steel RCU</div>
            <p>2.10%</p>
          </div>
          <div class="side back">
            <p>$900</p>
          </div>
        </div>
      </div>
      <div class="leaders__chart__box">
        <div class="card">
          <div class="side leaders__chart__box leaders__chart__box-red">
            <div className="leader__chart__box-product">Urea FOB Egypt</div>
            <p>1.69%</p>
          </div>
          <div class="side back">
            <p>$112</p>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Leaders;
