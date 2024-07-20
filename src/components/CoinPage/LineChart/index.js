import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto"; // Don't get rid of this

function LineChart({ chartData, multiAxis }) {
  const options = {
    plugins: {
      legend: {
        display: !!multiAxis,
      },
    },
    responsive: true,
    interaction: {
      mode: "index",
      intersect: false,
    },
    scales: {
      crypto1: {
        position: "left",
      },
      crypto2: multiAxis && {
        position: "right",
      },
    },
  };

  return <Line data={chartData} options={options} />;
}

export default LineChart;
