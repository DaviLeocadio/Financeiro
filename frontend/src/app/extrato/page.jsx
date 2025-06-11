"use client";
import "@/app/extrato/extrato.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Chart } from "chart.js/auto";
import NavUsuario from "@/components/nav-usuario/nav-usuario";
import { useState, useEffect, useRef } from "react";
import GraficoBarras from "@/components/graficoBarras/chartsBarras";
import GraficoDonut from "@/components/graficoDonut/chart";
import axios from "axios";

const API_URL = "http://localhost:8080";

export default function Extrato() {
  const [tipoGrafico, setTipoGrafico] = useState("saidas");
  const [nome, setNome] = useState("");
  const [possuiDespesa, setPossuiDespesa] = useState(false);
  const [possuiRecebimento, setPossuiRecebimento] = useState(false);
  const [ganho, setGanho] = useState();
  const [despesasUserMap, setDespesasUserMap] = useState([]); // Agora é um array
  const [despesaGrafico, setDespesaGrafico] = useState([]);
  const [maiorDespesaCategoria, setMaiorDespesaCategoria] = useState("");
  const [totalGasto, setTotalGasto] = useState();
  const [quantDespesa, setQuantDespesa] = useState();
  const chartRef = useRef(null);

  useEffect(() => {
    setNome(localStorage.getItem("nome"));
    if (!localStorage.getItem("token") || !localStorage.getItem("nome")) {
      window.location.href = "/not-auth";
    }
  }, []);

  useEffect(() => {
    const buscarDados = async () => {
      try {
        const responseDespesa = await axios.get(`${API_URL}/despesas/`);
        const responseFinanceiro = await axios.get(`${API_URL}/financeiro/`);

        const despesas = responseDespesa.data.despesa;
        const pagamentos = responseFinanceiro.data;

        const userId = parseInt(localStorage.getItem("id"));
        const dataAtual = new Date().getDate();

        const despesasUser = despesas.filter((d) => parseInt(d.id_user) === userId);
        const pagamentosUser = pagamentos.filter((p) => parseInt(p.id_user) === userId);

        const quantidade = despesasUser.length;
        setQuantDespesa(quantidade);

        const despesasFuturas = despesasUser.filter(
          (d) => parseInt(d.data_pag) >= dataAtual
        );

        const recebimentosFuturos = pagamentosUser.filter(
          (p) => parseInt(p.data_rec) >= dataAtual
        );

        if (despesasFuturas.length > 0) {
          setDespesasUserMap(despesasFuturas);
          setDespesaGrafico(despesasFuturas);
          setPossuiDespesa(true);
        }

        if (recebimentosFuturos.length > 0) {
          setGanho(recebimentosFuturos[0].renda);
          setPossuiRecebimento(true);
        }
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    };

    buscarDados();
  }, []);

  useEffect(() => {
    if (tipoGrafico !== "mensal") return;

    setTimeout(() => {
      if (chartRef.current && despesaGrafico.length > 0) {
        console.log(chartRef)
        if (chartRef.current.chart) {
          chartRef.current.chart.destroy();
        }

        const context = chartRef.current.getContext("2d");

        const categorias = {};
        despesaGrafico.forEach((despesa) => {
          categorias[despesa.categoria] =
            parseFloat(despesa.valor)
        });


        const labels = Object.keys(categorias);
        const data = Object.values(categorias);
        const indexMaior = data.indexOf(Math.max(...data));
        setMaiorDespesaCategoria(labels[indexMaior]);
        const total = despesaGrafico.reduce((acc, d) => acc + parseFloat(d.valor), 0);
        setTotalGasto(total.toFixed(2));

        const newChart = new Chart(context, {
          type: "doughnut",
          data: {
            labels,
            datasets: [
              {
                label: "Gastos por Categoria",
                data: data,
                backgroundColor: [
                  "#071954",
                  "#FF6384",
                  "#FFCE56",
                  "#36A2EB",
                  "#4BC0C0",
                  "#9966FF",
                ],
                borderColor: "#fff",
                borderWidth: 1,
              },
            ],
          },
          options: {
            responsive: true,
            plugins: {
              legend: {
                position: "right",
              },
            },
          },
        });

        chartRef.current.chart = newChart;
      }

    }, 100)
  }, [despesaGrafico, tipoGrafico]);

  useEffect(() => {

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

    const labels = label

    const mes = new Date().getMonth() + 1;


    const data = [5,4,4,4,4,quantDespesa,4,4,4,4,4,4];
    if (chartRef.current) {
      if (chartRef.current.chart) {
        chartRef.current.chart.destroy();
      }

      const context = chartRef.current.getContext("2d");
      console.log('Janeiro: 4 despesas feitas')
      const newChart = new Chart(context, {
        type: "bar",
        data: {
          labels: labels,
          datasets: [
            {
              label: "info",
              data:data,
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
    <div className="d-flex flex-row gap-4 mt-4">
      <NavUsuario />
      <div className="container-usuario gap-4 w-75 flex-wrap">
        <div className="d-flex gap-3 justify-content-end align-items-center flex-wrap">
          <div
            className="search bg-white rounded-pill"
            style={{ height: "fit-content" }}
          >
            <form className="d-flex" role="search">
              <input
                className="form-control rounded-pill me-2"
                type="search"
                placeholder="Buscar"
                aria-label="Search"
              />
              <button className="btn btn-pesquisa" type="submit">
                <i className="bi bi-search"></i>
              </button>
            </form>
          </div>
          <div className="div-usuario d-flex align-items-center gap-2 pe-3">
            <p className="m-0">{nome}</p>
            <i className="bi bi-person-circle"></i>
          </div>
        </div>


        <div className="d-flex flex-column row-gap-3">
          <h1 className="extrato-usuario">Extrato</h1>
          <div className="tabela-movimentacao bg-white p-3 rounded-2">
            <table className="w-100">
              <tbody>
                <tr className="table-header">
                  <th>Procedimento</th>
                  <th>Nome do procedimento</th>
                  <th>Valor</th>
                </tr>

                {possuiRecebimento && (
                  <tr>
                    <td className="text-success">
                      <i className="bi bi-chevron-double-up text-success fw-bold p-2"></i>
                      Entrada
                    </td>
                    <td>Salário</td>
                    <td>R$ {ganho}</td>
                  </tr>
                )}

                {possuiDespesa &&
                  despesasUserMap.map((despesa, index) => (
                    <tr key={index}>
                      <td className="text-danger">
                        <i className="bi bi-chevron-double-down text-danger fw-bold p-2"></i>
                        Saída
                      </td>
                      <td>{despesa.categoria}</td>
                      <td>R$ {despesa.valor}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>

          <div className="div-entradas p-3 d-flex flex-wrap">
            <div className="d-flex gap-3 p-2 bg-light rounded-pill w-auto flex-wrap">
              <button
                className={`btn-tab ${tipoGrafico === "saidas" ? "active" : ""}`}
                onClick={() => setTipoGrafico("saidas")}
              >
                Saídas
              </button>
              <button
                className={`btn-tab ${tipoGrafico === "mensal" ? "active" : ""}`}
                onClick={() => setTipoGrafico("mensal")}
              >
                Despesas
              </button>
            </div>

            <div className="d-flex flex-row">
              {tipoGrafico === "mensal" ? (
                <div className="d-flex flex-row flex-wrap justify-content-center">
                  <div
                    className="container d-flex flex-wrap p-3 w-100 align-items-center justify-content-center"
                    style={{
                      position: "relative",
                      minHeight: "40vh",
                      minWidth: "70vw",
                      maxHeight: "100vh",
                      maxWidth: "75vw",
                    }}
                  >
                    <canvas ref={chartRef} id="graficoDinamicoBarras"></canvas>
                  </div>
                  <div
                    className="p-3 rounded-3"
                    style={{ maxWidth: "360px", minWidth: "200px" }}
                  >
                    <h5 className="text-secondary mb-3">Resumo</h5>
                    <ul className="list-unstyled lh-lg">
                      <li>
                        <i className="bi bi-cash-stack me-2 text-primary"></i>
                        <strong>Total gasto:</strong> R$ {totalGasto}
                      </li>
                      <li>
                        <i className="bi bi-pie-chart me-2 text-primary"></i>
                        <strong>Categoria destaque:</strong> {maiorDespesaCategoria}
                      </li>
                      <li>
                        <i className="bi bi-calendar3 me-2 text-primary"></i>
                        <strong>Mês:</strong> 0{new Date().getMonth() + 1}/{new Date().getFullYear()}
                      </li>
                    </ul>
                  </div>
                </div>
              ) : (
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
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
