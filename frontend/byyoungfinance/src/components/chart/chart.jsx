"use client"
import { useRef, useEffect } from "react"
import { Chart } from "chart.js/auto"

export default function Grafico(){
  const chartRef = useRef(null)

  useEffect(()=> {
    if(chartRef.current){
        if(chartRef.current.chart){
            chartRef.current.chart.destroy()
        }

        const context = chartRef.current.getContext("2d");

        const newChart = new Chart (context, {
            type: "doughnut",
            data:{
                labels: ["John","Jane","Done"],
                datasets: [
                    {
                        label: "Info",
                        data:[34,64,23],
                        backgroundColor: [
                            "red",
                            "orange",
                            "yellow",
                            "green",
                            "purple",
                            "orange",
                            "red",
                        ],
                        borderColor: [
                            "red",
                            "orange",
                            "yellow",
                            "green",
                            "purple",
                            "orange",
                            "red",
                        ],
                        borderWidth: 1,
                    },
                ],
            },
            options:{
                responsive: true,
                scales: {
                    x:{
                        type: "category",
                    },
                    y:{
                        beginAtZero: true
                    }
                }
            }
        });

        chartRef.current.chart = newChart
    }
  }, []);
 return (
    <>
    <div className="container">
        <canvas ref={chartRef}></canvas>
    </div>
    </>
 )
}

