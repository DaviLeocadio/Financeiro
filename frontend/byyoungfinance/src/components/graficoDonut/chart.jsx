"use client";
import { useRef, useEffect } from "react";
import { Chart } from "chart.js/auto";

const rotuloPadrao = ["Steam", "Epic", "Lazer", "Stardew", "Esporte"];
const dadosPadrao = [24, 15, 30, 50, 84];
const cores = ["#071954", "#ffffff", "#ffcc00", "#1f3a93", "#84c4ff", "#f39c12", "#2ecc71"];

export default function GraficoDonut({ labels = rotuloPadrao, data = dadosPadrao }) {
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
          labels,
          datasets: [
            {
              label: "Distribuição",
              data,
              backgroundColor: cores.slice(0, data.length),
              borderColor: "#071954",
              borderWidth: 1,
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: "bottom",
            },
          },
        },
      });

      chartRef.current.chart = newChart;
    }
  }, [labels, data]);

  return (
    <div
      className="container d-flex flex-wrap"
      style={{
        position: "relative",
        minHeight: "25vh",
        minWidth: "40vw",
        maxHeight: "100vh",
        maxWidth: "75vw",
      }}
    >
      <canvas ref={chartRef} id="graficoDonut"></canvas>
    </div>
  );
}
