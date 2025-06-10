"use client";
import Link from "next/link";
import "@/app/extrato/extrato.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import NavUsuario from "@/components/nav-usuario/nav-usuario";
import { useState, useEffect, use } from "react";
import GraficoBarras from "@/components/graficoBarras/chartsBarras";
import GraficoDonut from "@/components/graficoDonut/chart";
import CardInfoUser from "@/components/cardInfoUser/infoUser";
import axios from "axios";

const API_URL = 'http://localhost:8080';

export default function Extrato() {
  const [tipoGrafico, setTipoGrafico] = useState("entradas");
  const [nome, setNome] = useState("");
  const [possuiDespesa, setPossuiDespesa] = useState(false);
  const [possuiRecebimento, setPossuiRecebimento] = useState(false);
  const [ganho, setGanho] = useState();
  const [despesasUserMap, setDespesasUserMap] = useState();

  useEffect(() => {
    localStorage.setItem('totalDinheiro', 0)
    setNome(localStorage.getItem("nome"));
    if (!localStorage.getItem("token") || !localStorage.getItem("nome")) {
      window.location.href = "/not-auth";
      return;
    }
  }, []);

  useEffect(() => {
    const despesa = async () => {
      const responseDespesa = await axios.get(`${API_URL}/despesas/`);
      const responseFinanceiro = await axios.get(`${API_URL}/financeiro/`);
      const despesas = responseDespesa.data.despesa;
      const pagamentos = responseFinanceiro.data;

      const despesasUser = despesas.filter(
        (d) => parseInt(d.id_user) == localStorage.getItem('id')
      )

      const pagamentosUser = pagamentos.filter(
        (p) => parseInt(p.id_user) == localStorage.getItem('id')
      )

      

      despesasUser.forEach((item) => {
        pagamentosUser.forEach((pagamento) => {
          const dataFutura = new Date().getDate();
          if (parseInt(item.data_pag) >= parseInt(dataFutura)) {
            setDespesasUserMap(item);
            
            setPossuiDespesa(true);
          }
          if (parseInt(pagamento.data_rec) >= parseInt(dataFutura)) {
            setGanho(pagamento.renda)
            setPossuiRecebimento(true);
          }
        })
        return;
      });

    }

    despesa();
  }, [])
  return (
    <>
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

          {/* Conteúdo principal */}
          <div className="d-flex flex-column row-gap-3">
            <h1 className="extrato-usuario" >
              Extrato
            </h1>
            <div className="tabela-movimentacao bg-white p-3 rounded-2">
              <table className="w-100">
                <tbody>
                  <tr className="table-header">
                    <th className="">Procedimento</th>
                    <th>Nome do procedimento</th>
                    <th className="">Valor</th>
                  </tr>
                  {possuiRecebimento ? (

                    <tr>
                      <td className="text-success" data-th="Procedimento"><i className="bi bi-chevron-double-up text-success fw-bold p-2"></i>Entrada</td>
                      <td data-th="Nome procedimento">Salário</td>
                      <td data-th="Valor">R$ {ganho}</td>
                    </tr>
                  ) : ''}

                  {possuiDespesa ? (
                    Array(despesasUserMap).map((despesa, index)=>{
                      return <tr key={index}>
                      <td className="text-danger" data-th="Procedimento"><i className="bi bi-chevron-double-down text-danger fw-bold p-2"></i>Saída</td>
                      <td data-th="Nome procedimento">{despesa.categoria}</td>
                      <td data-th="Valor">R$ {despesa.valor}</td>
                    </tr>
                    })
                    
                  ) : ''}

                </tbody>
              </table>
            </div>
            <div className="div-entradas p-3 d-flex flex-wrap">
              {/* Botões das abas */}
              <div className="d-flex gap-3 p-2 bg-light rounded-pill w-auto flex-wrap">
                <button
                  className={`btn-tab ${tipoGrafico === "entradas" ? "active" : ""
                    }`}
                  onClick={() => setTipoGrafico("entradas")}
                >
                  Entradas
                </button>
                <button
                  className={`btn-tab ${tipoGrafico === "saidas" ? "active" : ""
                    }`}
                  onClick={() => setTipoGrafico("saidas")}
                >
                  Saídas
                </button>
                <button
                  className={`btn-tab ${tipoGrafico === "mensal" ? "active" : ""
                    }`}
                  onClick={() => setTipoGrafico("mensal")}
                >
                  Mensal
                </button>
              </div>

              {/* Conteúdo condicional: gráficos ou resumo mensal */}
              <div className="d-flex flex-row ">
                {tipoGrafico === "mensal" ? (
                  <div className="d-flex flex-row flex-wrap justify-content-center">
                    <div>
                      <GraficoDonut />
                    </div>
                    <div className="p-3 rounded-3"
                      style={{
                        maxWidth: "360px",
                        minWidth: " 200px",

                      }}
                    >
                      <h5 className="text-secondary mb-3">Resumo</h5>
                      <ul className="list-unstyled lh-lg">
                        <li>
                          <i className="bi bi-cash-stack me-2 text-primary"></i>
                          <strong>Total gasto:</strong> R$ 3.250,00
                        </li>
                        <li>
                          <i className="bi bi-pie-chart me-2 text-primary"></i>
                          <strong>Categoria destaque:</strong> Alimentação
                        </li>
                        <li>
                          <i className="bi bi-calendar3 me-2 text-primary"></i>
                          <strong>Mês:</strong> Maio/2025
                        </li>
                      </ul>
                    </div>
                  </div>

                ) : (
                  <GraficoBarras tipo={tipoGrafico} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}