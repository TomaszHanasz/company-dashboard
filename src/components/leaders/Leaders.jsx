import React from "react";
import "./leaders.style.css";

const Leaders = () => {
  return (
    <div className="leaders__container">
      <h2 className="leaders__title">Leaders</h2>
      <div className="leaders__chart-container">
        <div className="leaders__chart__box">
          Lean Hogs<div>3.62%</div>
        </div>
        <div className="leaders__chart__box">
          Cotton<div>3.61%</div>
        </div>
        <div className="leaders__chart__box">
          Pork Cutout<div>3.4%</div>
        </div>
        <div className="leaders__chart__box">
          US Midwest Steel CRU<div>3.22%</div>
        </div>
        <div className="leaders__chart__box">
          Urea FOB Egypt<div>2.72%</div>
        </div>
      </div>
    </div>
  );
};

export default Leaders;
