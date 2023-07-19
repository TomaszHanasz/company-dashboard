import React, { useState } from "react";
import { Line } from "react-chartjs-2"; // eslint-disable-next-line
import { Chart as ChartJS } from "chart.js/auto";
import "./chart.style.css";

const Chart = ({ stockInfo }) => {
  // eslint-disable-next-line
  const [chartData, setChartData] = useState({
    labels: stockInfo.map((stockInfo) => stockInfo.date),
    datasets: [
      {
        label: "Adjusted close",
        data: stockInfo.map((stockInfo) => stockInfo.adjustedClose),
      },
      {
        label: "High",
        data: stockInfo.map((stockInfo) => stockInfo.high),
      },
      {
        label: "Low",
        data: stockInfo.map((stockInfo) => stockInfo.low),
      },
      {
        label: "Open",
        data: stockInfo.map((stockInfo) => stockInfo.open),
      },
    ],
  });

  console.log("stockingo", stockInfo);
  console.log("chartdata", chartData);

  return (
    <div>
      <div className="chart__box">
        <Line data={chartData} />
      </div>
    </div>
  );
};

export default Chart;
