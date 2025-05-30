"use client";
import { useRef, useEffect } from "react";
import { Chart } from "chart.js/auto";

export default function GraficoBarras({ tipo = "entradas" }) {
  const chartRef = useRef(null);

  // Define os dados e labels para cada tipo
  const dadosEntradas = [24, 15, 30, 50, 84];
  const labelsEntradas = ["Steam", "Epic", "Lazer", "Stardew", "Esporte"];

  const dadosSaidas = [12, 28, 19, 40, 55];
  const labelsSaidas = ["Aluguel", "Compras", "Transporte", "Lazer", "Alimentação"];

  // Escolhe os dados conforme o tipo recebido
  const data = tipo === "entradas" ? dadosEntradas : dadosSaidas;
  const labels = tipo === "entradas" ? labelsEntradas : labelsSaidas;

  useEffect(() => {
    if (chartRef.current) {
      // destrói o gráfico anterior antes de criar um novo
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
              label: tipo === "entradas" ? "Entradas" : "Saídas",
              data: data,
              backgroundColor: tipo === "entradas" 
                ? ["#9400d3", "#9932cc", "#ba55d3", "#a020f0", "	#8B008B"] 
                : ["#2E8B57", "#006400", "#008000", "#228B22", "#32CD32"],
              borderColor: "#fff",
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
  }, [tipo]); // o efeito depende de "tipo" para atualizar

  return (
    <div
      className="container d-flex flex-wrap"
      style={{ position: "relative", minHeight: "20vh", minWidth: "65vw", maxHeight: "100vh", maxWidth:"75vw"}}
    >
      <canvas id="graficoDinamicoBarras" ref={chartRef}></canvas>
    </div>
  );
}
