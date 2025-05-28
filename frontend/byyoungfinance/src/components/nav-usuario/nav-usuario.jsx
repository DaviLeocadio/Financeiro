"use client";
import Link from "next/link";
import "@/components/nav-usuario/nav-usuario.css";
import { useState } from "react";
import Image from "next/image";

export default function NavUsuario() {
  const [aberto, setAberto] = useState(false);
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
          <Link href={"#"}>
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
          <Link href={"#"}>
            <button className="ms-3">
              <li>
                <i className="bi bi-graph-up-arrow me-3 fs-4"></i>Relatórios
              </li>
            </button>
          </Link>
        </ul>
      </div>
      <div className="flex-collumn index d-md-none justify-content-around align-items-center">
        <div className="div-drop-nav mb-3">
          <button
            onClick={() => setAberto(!aberto)}
            className="btn drop-nav-usuario text-white w-100 d-flex justify-content-between align-items-center rounded-top-4"
            style={{
              color: "white",
              padding: "1rem",
              borderBottomLeftRadius: aberto ? 0 : "1rem",
              borderBottomRightRadius: aberto ? 0 : "1rem",
            }}
          >
            <i className="bi bi-list text-white fs-5"></i>
          </button>

          {aberto && (
            <div className="d-flex flex-column text-white p-4 w-100 nav-usuario"
            style={{ borderTopRightRadius: "0rem"}}>
              <ul className="p-4 d-flex flex-column row-gap-3">
                <Link href={"/usuario"}>
                  <button className="ms-3">
                    <li>
                      <i className="bi bi-pie-chart-fill me-3 fs-4"></i>Visão Geral
                    </li>
                  </button>
                </Link>
                <Link href={"#"}>
                  <button className="ms-3">
                    <li>
                      <i className="bi bi-send-fill me-3 fs-4"></i>Lançamentos
                    </li>
                  </button>
                </Link>
                <Link href={"#"}>
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
                <Link href={"#"}>
                  <button className="ms-3">
                    <li>
                      <i className="bi bi-graph-up-arrow me-3 fs-4"></i>
                      Relatórios
                    </li>
                  </button>
                </Link>
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
