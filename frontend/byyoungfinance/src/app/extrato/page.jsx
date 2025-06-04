"use client";
import Link from "next/link";
import "@/app/extrato/extrato.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import NavUsuario from "@/components/nav-usuario/nav-usuario";
import { useState } from "react";
import GraficoBarras from "@/components/graficoBarras/chartsBarras";
import GraficoDonut from "@/components/graficoDonut/chart";

export default function Extrato() {
  const [tipoGrafico, setTipoGrafico] = useState("entradas");

  return (
    <>
      <div className="d-flex flex-row gap-4 mt-4">
        <NavUsuario />
        <div className="container-usuario gap-4 m-4 w-75 flex-wrap">
          {/* Topo com barra de busca e usuário */}
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
            <Link href={"/perfil"} className="link">
            <div className="div-usuario d-flex align-items-center gap-2 pe-3">            
                  <p className="m-0">nome usuário</p>
                  <i className="bi bi-person-circle"></i>             
            </div>
            </Link>
          </div>

          {/* Conteúdo principal */}
          <div>
            <h1 className="extrato-usuario" id="greetings">
              Extrato
            </h1>

            <div className="div-entradas p-3">
              {/* Botões das abas */}
              <div className="d-flex gap-3 p-2 bg-light rounded-pill w-auto flex-wrap">
                <button
                  className={`btn-tab ${
                    tipoGrafico === "entradas" ? "active" : ""
                  }`}
                  onClick={() => setTipoGrafico("entradas")}
                >
                  Entradas
                </button>
                <button
                  className={`btn-tab ${
                    tipoGrafico === "saidas" ? "active" : ""
                  }`}
                  onClick={() => setTipoGrafico("saidas")}
                >
                  Saídas
                </button>
                <button
                  className={`btn-tab ${
                    tipoGrafico === "mensal" ? "active" : ""
                  }`}
                  onClick={() => setTipoGrafico("mensal")}
                >
                  Mensal
                </button>
              </div>

              {/* Conteúdo condicional: gráficos ou resumo mensal */}
              <div className="mt-4">
                {tipoGrafico === "mensal" ? (
                  <div className="d-flex flex-wrap gap-4 justify-content-center">
                    <div className="flex-grow-1 d-flex justify-content-center">
                      <GraficoDonut />
                    </div>
                    <div
                      className="bg-light p-3 rounded-3"
                      style={{
                        minWidth: "260px",
                        maxWidth: "300px",
                        flex: "1",
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
