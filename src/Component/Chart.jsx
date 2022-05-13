import React from "react";
import { Chart as ChartJS, registerables } from "chart.js";
import { Chart, Line } from "react-chartjs-2";

ChartJS.register(...registerables);

export default function MapChart(props) {
  const labels = props.date;

  const data = {
    labels: labels,
    datasets: [
      {
        type: "line",
        label: "Close",
        data: props.close,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        yAxisID: "y",
      },
      {
        type: "line",
        label: "Open",
        data: props.open,
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",

        yAxisID: "y",
      },
      {
        type: "bar",
        label: "Volume",
        data: props.volume,
        borderColor: "rgb(104, 243, 170)",
        backgroundColor: "rgba(104, 243, 170, 0.5)",
        borderWidth: 3,
        yAxisID: "y1",
      },
    ],
  };

  return (
    <div>
      <Chart
        className="info-chart mt-5"
        data={data}
        options={{
          maintainAspctRatio: false,
          scales: {
            y: {
              type: "linear",
              position: "left",
            },
            y1: {
              type: "linear",
              position: "right",
            },
          },
        }}
        height={400}
        width={600}
      />
    </div>
  );
}
