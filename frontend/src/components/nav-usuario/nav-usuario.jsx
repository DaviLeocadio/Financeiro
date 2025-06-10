"use client";
import Link from "next/link";
import "@/components/nav-usuario/nav-usuario.css";
import { useState } from "react";

export default function NavUsuario() {
  const [aberto, setAberto] = useState(false);

  function Sair() {
    localStorage.removeItem("token");
    localStorage.removeItem("nome");
    localStorage.removeItem("id");
    localStorage.removeItem("modalExibido");
    localStorage.removeItem("email");
    localStorage.removeItem("cpf");
    localStorage.removeItem("data_nasc");
    localStorage.removeItem("totalGasto");
    localStorage.removeItem("totalDinheiro");
    localStorage.removeItem("totalRecebido");
    window.location.href = "/login";
  }
  return (
    <>
      <div className="d-none d-sm-block nav-usuario h-75 pt-2">
        <ul className="p-2 d-flex flex-column row-gap-3 justify-content-start align-items-start flex-wrap">
          <Link href={"/usuario"} className="link">
            <button className="w-100 p-1 d-flex flex-wrap align-items-center justify-content-center">
              <i className="bi bi-pie-chart-fill me-3 fs-4 p-1"></i>
              <p className="m-1">Visão geral</p>
            </button>
          </Link>
          <Link href={"/lancamentos"} className="link">
            <button className="w-100 p-1 d-flex flex-wrap align-items-center justify-content-center">
              <i className="bi bi-send-fill me-3 fs-4 p-1"></i>
              <p className="m-1">Lançamentos</p>
            </button>
          </Link>
          <Link href={"/notificacoes"} className="link">
            <button className="w-100 p-1 d-flex flex-wrap align-items-center justify-content-center">
              <i className="bi bi-bell-fill me-3 fs-4 p-1"></i>
              <p className="m-1">Notificações</p>
            </button>
          </Link>
          <Link href={"/extrato"} className="link">
            <button className="w-100 p-1 d-flex flex-wrap align-items-center justify-content-center">
              <i className="bi bi-file-ruled-fill me-3 fs-4 p-1"></i>
              <p className="m-1">Extrato</p>
            </button>
          </Link>
          <Link href={"/relatorios"} className="link">
            <button className="w-100 p-1 d-flex flex-wrap align-items-center justify-content-center">
              <i className="bi bi-graph-up-arrow me-3 fs-4 ps-2 p-1"></i>
              <p className="m-1">Relatórios</p>
            </button>
          </Link>
          <button
            className="p-1 d-flex flex-wrap align-items-center justify-content-center"
            onClick={Sair}
          >
            <i className="bi bi-x-lg me-3 fs-4 p-1"></i>
            <p className="m-1">Sair</p>
          </button>
        </ul>
      </div>
      <div className="flex-collumn index d-md-none d-sm-none justify-content-around align-items-center">
        <div className="div-drop-nav mb-3 ">
          <button
            onClick={() => setAberto(!aberto)}
            className="btn drop-nav-usuario text-white d-flex justify-content-between align-items-center"
            style={{
              padding: "1rem",
              borderBottomRightRadius: aberto ? 0 : "1rem",
      
            }}
          >
            <i className="bi bi-list text-white fs-5"></i>
          </button>

          {aberto && (
            <div
              className="d-flex flex-column text-white p-3 w-75 nav-usuario mb-2 me-2"
              
            >
              <ul className="p-2 d-flex flex-column row-gap-1 m-0">
                <Link href={"/usuario"} className="link">
                  <button className="d-flex flex-wrap justify-content-center">
                    <i className="bi bi-pie-chart-fill fs-4"></i>Visão Geral
                  </button>
                </Link>
                <Link href={"/lancamentos"} className="link">
                  <button className="d-flex flex-wrap justify-content-center">
                    <i className="bi bi-send-fill  fs-4"></i>Lançamentos
                  </button>
                </Link>
                <Link href={"/notificacoes"} className="link">
                  <button className="d-flex flex-wrap justify-content-center">
                    <i className="bi bi-bell-fill  fs-4"></i>Notificações
                  </button>
                </Link>
                <Link href={"/extrato"} className="link">
                  <button className="d-flex flex-wrap justify-content-center">
                    <i className="bi bi-file-ruled-fill fs-4"></i>
                    <p>Extrato</p>
                  </button>
                </Link>
                <Link href={"/relatorios"} className="link">
                  <button className="d-flex flex-wrap justify-content-center">
                    <i className="bi bi-graph-up-arrow  fs-4"></i>
                    Relatórios
                  </button>
                </Link>
                <button className="d-flex flex-wrap justify-content-center p-2" onClick={Sair}>
                  <i className="bi bi-x-lg me-3 fs-4"></i>
                  Sair
                </button>
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
