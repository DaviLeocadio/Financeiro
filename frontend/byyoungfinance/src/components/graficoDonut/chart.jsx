"use client";
import { useRef, useEffect } from "react";
import { Chart } from "chart.js/auto";

export default function GraficoDonut({

}) {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      if (chartRef.current.chart) {
        chartRef.current.chart.destroy();
      }

      const context = chartRef.current.getContext("2d");

      const newChart = new Chart(context, {
        type: "doughnut",
        data: {
          labels: "info",
          datasets: [
            {
              label: ["Alimentação", "Saúde", "Lazer"],
              data: [34, 64, 23],
              backgroundColor: ["#071954", "#ffffff", "#ffcc00"],
              borderColor: "#071954",
              borderWidth: 1,
            },
          ],
        },
        options: {
          responsive: true,
          scales: {
            x: {
              type: "category",
            },
            y: {
              beginAtZero: true,
            },
          },
        },
      });

      chartRef.current.chart = newChart;
    }
  }, []);
  return (
    <>
      <div
        className="container d-flex flex-wrap"
        style={{ position: "relative", minHeight: "20vh", minWidth: "65vw", maxHeight: "100vh", maxWidth:"75vw"}}
      >
        <canvas ref={chartRef}></canvas>

      </div>
    </>
  );
}
