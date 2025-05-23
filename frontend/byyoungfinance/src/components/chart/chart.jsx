"use client"
import { useRef, useEffect } from "react"
import { Chart } from "chart.js/auto"

export default function Grafico({tipoGrafico="doughnut", labels=["olaa","dois","terceiro"] }){
  const chartRef = useRef(null)

  useEffect(()=> {
    if(chartRef.current){
        if(chartRef.current.chart){
            chartRef.current.chart.destroy()
        }

        const context = chartRef.current.getContext("2d");

        const newChart = new Chart (context, {
            type: tipoGrafico,
            data:{
                labels: labels,
                datasets: [
                    {
                        label: "Info",
                        data:[34,64,23],
                        backgroundColor: [
                            "#071954",
                            "#ffffff",
                            "#ffcc00",
                        ],
                        borderColor: "#071954",
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
    <div className="container" style={{position: "relative",height:"80vh",width:"80vw"}}>
        <canvas ref={chartRef}></canvas>
    </div>
    </>
 )
}

