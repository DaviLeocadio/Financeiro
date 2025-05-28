"use client";
import { useRef, useEffect } from "react";
import { Chart } from "chart.js/auto";

export default function Grafico({
  tipoGrafico = "doughnut",
  labels = ["Alimentação", "Saúde", "Lazer"],
  data = [34, 64, 23],
}) {
  const chartRef = useRef(null);

  labels.forEach(function (nome) {
    console.log(nome);
  });
  

  useEffect(() => {
    if (chartRef.current) {
      if (chartRef.current.chart) {
        chartRef.current.chart.destroy();
      }

      const context = chartRef.current.getContext("2d");

      const newChart = new Chart(context, {
        type: tipoGrafico,
        data: {
          labels: labels,
          datasets: [
            {
              label: labels,
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
        style={{ position: "relative", minHeight: "20vh", minWidth: "65vw", maxHeight: "100vh", maxWidth:"75vw"}}
      >
        <canvas ref={chartRef}></canvas>
        {/* <div className="justify-content-center gap-3 ms-3">
        {labels.map((nome,index) => (
            <div key={index}>
                {data.map((item, index) => (

            <div
              key={index}
              className="dados bg-info rounded-pill text-white p-2 d-flex justify-content-center"
            >
              <p className="text-white m-0">{item}%</p>
              <p>{nome}</p>
            </div>
          ))}
            </div>
        ))}
          
        </div> */}
      </div>
    </>
  );
}
