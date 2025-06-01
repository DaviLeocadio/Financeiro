"use client";
import { useRef, useEffect } from "react";
import { Chart } from "chart.js/auto";

let rotulo = ["Steam", "Epic", "Lazer","Stardew","esporte"]
let backgroundColor = ["#071954", "#ffffff", "#ffcc00"]
let dados = [24, 15, 30,50,84]

export default function GraficoDonut({ labels = rotulo}) {
  
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
          labels: labels,
          datasets: [
            {
              label: "Alimentação",
              data: dados,
              backgroundColor: ["#071954", "#ffffff", "#ffcc00","#1f3a93"],
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
        style={{ position: "relative", minHeight: "25vh", minWidth: "40vw", maxHeight: "100vh", maxWidth:"75vw"}}
      >
        <canvas ref={chartRef} id="graficoDinamicoBarras"></canvas>
            {/* <div>
              <p id="mostrarDados" className="d-flex flex-column">{labels.join("-")}</p>
            </div> */}
      </div>
    </>
  );
  
}

