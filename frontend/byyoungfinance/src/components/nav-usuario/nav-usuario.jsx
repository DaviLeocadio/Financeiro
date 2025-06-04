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
    localStorage.removeItem("modalExibido")
    window.location.href = "/login";
  }
  return (
    <>
      <div className="d-none d-sm-block nav-usuario h-75">
        <ul className="p-4 d-flex flex-column row-gap-3">
          <Link href={"/usuario"}>
            <button className="ms-3">
              <li>
                <i className="bi bi-pie-chart-fill me-3 fs-4"></i>Visão geral
              </li>
            </button>
          </Link>
          <Link href={"/lancamentos"}>
            <button className="ms-3">
              <li>
                <i className="bi bi-send-fill me-3 fs-4"></i>Lançamentos
              </li>
            </button>
          </Link>
          <Link href={"/notificacoes"}>
            <button className="ms-3">
              <li>
                <i className="bi bi-bell-fill me-3 fs-4"></i>Notificações
              </li>
            </button>
          </Link>
          <Link href={"/extrato"}>
            <button className="ms-3">
              <li>
                <i className="bi bi-file-ruled-fill me-3 fs-4"></i>Extrato
              </li>
            </button>
          </Link>
          <Link href={"/relatorios"}>
            <button className="ms-3">
              <li>
                <i className="bi bi-graph-up-arrow me-3 fs-4"></i>Relatórios
              </li>
            </button>
          </Link>
          <button className="ms-3 align-self-start" onClick={Sair}>
            <li>
              <i className="bi bi-x-lg me-3 fs-4"></i>
              Sair
            </li>
          </button>

        </ul>
      </div>
      <div className="flex-collumn index d-md-none justify-content-around align-items-center">
        <div className="div-drop-nav mb-3">
          <button
            onClick={() => setAberto(!aberto)}
            className="btn drop-nav-usuario text-white w-100 d-flex justify-content-between align-items-center"
            style={{
              padding: "1rem",
              borderBottomRightRadius: aberto ? 0 : "1rem",
            }}
          >
            <i className="bi bi-list text-white fs-5"></i>
          </button>

          {aberto && (
            <div className="d-flex flex-column text-white p-4 w-100 nav-usuario"
              style={{ borderTopRightRadius: "0rem" }}>
              <ul className="p-4 d-flex flex-column row-gap-3">
                <Link href={"/usuario"}>
                  <button className="ms-3">
                    <li>
                      <i className="bi bi-pie-chart-fill me-3 fs-4"></i>Visão Geral
                    </li>
                  </button>
                </Link>
                <Link href={"/lancamentos"}>
                  <button className="ms-3">
                    <li>
                      <i className="bi bi-send-fill me-3 fs-4"></i>Lançamentos
                    </li>
                  </button>
                </Link>
                <Link href={"/notificacoes"}>
                  <button className="ms-3">
                    <li>
                      <i className="bi bi-bell-fill me-3 fs-4"></i>Notificações
                    </li>
                  </button>
                </Link>
                <Link href={"/extrato"}>
                  <button className="ms-3">
                    <li>
                      <i className="bi bi-file-ruled-fill me-3 fs-4"></i>Extrato
                    </li>
                  </button>
                </Link>
                <Link href={"/relatorios"}>
                  <button className="ms-3">
                    <li>
                      <i className="bi bi-graph-up-arrow me-3 fs-4"></i>
                      Relatórios
                    </li>
                  </button>
                </Link>
                <button className="ms-3 align-self-start" onClick={Sair}>
                  <li>
                    <i className="bi bi-x-lg me-3 fs-4"></i>
                    Sair
                  </li>
                </button>
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
