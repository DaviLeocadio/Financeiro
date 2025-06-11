"use client";
import { useRef, useEffect, useState } from "react";
import { Chart } from "chart.js/auto";
import axios from "axios";

const API_URL = "http://localhost:8080";




export default function GraficoBarras({
  }) {
  const chartRef = useRef(null);

  const [aberto, setAberto] = useState(false);

  
  return (
    <>
      
    </>
  );
}
