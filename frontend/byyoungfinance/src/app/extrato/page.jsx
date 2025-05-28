"use client"
import Link from "next/link";
import "@/app/extrato/extrato.css";
import NavUsuario from "@/components/nav-usuario/nav-usuario";
import { useState } from "react";
import GraficoBarras from "@/components/graficoBarras/chartsBarras";
import GraficoDonut from "@/components/graficoDonut/chart";

export default function Extrato() {
  const [aberto, setAberto] = useState(false);
  return (
    <>
      <div className="d-flex flex-row gap-4 mt-4">
        <NavUsuario></NavUsuario>
        <div className="container-usuario gap-4 m-4 w-75 flex-wrap">
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
              <p className="m-0">nome usuário</p>
              <i className="bi bi-person-circle"></i>
            </div>
            </div>
            
            <div className="">
            <h1 className="extrato-usuario" id="greetings">
            Extrato
            </h1>
            
              <div className="div-entradas p-3">
                <button
                onClick={() => setAberto(!aberto)}
                className="btn-drop-entradas text-white"
                style={{
                  borderBottomLeftRadius: aberto ? 0 : "1rem",
                  borderBottomRightRadius: aberto ? 0 : "1rem",
                }}
                ><p className="m-0 p-2">Movimentação <i className={`bi ${aberto ? "bi-chevron-down" : "bi-chevron-up"}`}></i></p></button>
                
                {aberto && (
                  <div className="div-drop-entradas ps-4 pb-4 align-items-start d-flex flex-column row-gap-3">
                      <button className="btn-entradas text-white">Entradas</button>
                      <button className="btn-entradas text-white">Saídas</button>
                  </div>
                )}
                  <GraficoBarras></GraficoBarras>
              </div>
            </div>
          </div>
          </div>

          <div className="container d-flex flex-column row-gap-4"> 
          <div className="div-entradas p-3 mb-4">
            <GraficoDonut></GraficoDonut>
          </div>
          </div>
          

    </>
  );
}
