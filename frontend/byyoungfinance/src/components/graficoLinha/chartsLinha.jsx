"use client";
import { useRef, useEffect } from "react";
import { Chart } from "chart.js/auto";

export default function GraficoLinha({
  tipoGrafico = "doughnut",
  labels = ["Alimentação", "Saúde", "Lazer","trabalho","esporte"],
  data = [34, 64, 23,70,84],
}) {
  const chartRef = useRef(null);


  useEffect(() => {
    if (chartRef.current) {
      if (chartRef.current.chart) {
        chartRef.current.chart.destroy();
      }

      const context = chartRef.current.getContext("2d");

      const newChart = new Chart(context, {
        type: "line",
        data: {
          labels: ["Alimentação", "Saúde", "Lazer","trabalho","esporte"],
          datasets: [
            {
              label: "Detalhes",
              data: [34, 64, 23,70,84],
              backgroundColor: ["#071954","#172d78", "#ffffff", "#ffcc00","#1f3a93"],
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
        <canvas id="graficoDinamicoBarras" ref={chartRef}></canvas>
       
      </div>
    </>
  );
}
