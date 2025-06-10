"use client";
import { useRef, useEffect, useState } from "react";
import { Chart } from "chart.js/auto";
import axios from "axios";

const API_URL = "http://localhost:8080";

let backgroundColor = ["#071954", "#ffffff", "#ffcc00"];

let label = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];
let dados = [10, 15, 10, 16, 17];

export default function GraficoBarras({
  tipoGrafico = "doughnut",
  labels = label,
  data = dados,
}) {
  const chartRef = useRef(null);

  const [aberto, setAberto] = useState(false);

  useEffect(() => {

    if (chartRef.current) {
      if (chartRef.current.chart) {
        chartRef.current.chart.destroy();
      }

      const context = chartRef.current.getContext("2d");

      const newChart = new Chart(context, {
        type: "bar",
        data: {
          labels: labels,
          datasets: [
            {
              label: "info",
              data: data,
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
        style={{
          position: "relative",
          minHeight: "20vh",
          minWidth: "65vw",
          maxHeight: "100vh",
          maxWidth: "75vw",
        }}
      >
        <canvas id="graficoDinamicoBarras" ref={chartRef}></canvas>
      </div>
    </>
  );
}
