"use client"
import { useEffect } from "react";
import NavUsuario from "../grafico/nav-usuario/nav-usuario";
import "@/app/perfil/perfil.css";
import Link from "next/link";

export default function Perfil() {
  useEffect(() => {
    const greetingElement = document.getElementById("greeting");

    if (!greetingElement){
          let currentHour = new Date().getHours();

    if (currentHour >= 5 && currentHour < 12) {
      greetingElement.textContent = "Bom dia🌞";
    } else if (currentHour >= 12 && currentHour < 18) {
      greetingElement.textContent = "Boa tarde⛅";
    } else {
      greetingElement.textContent = "Boa noite🌙";
    }
    }

  },[]);
  
  return (
    <>
      <div className="d-flex flex-column m-4 justify-content-center align-items-center">
        <Link href={"/visaoGeral"} className="link">
        <div className="rounded-pill m-3 border-0 p-3 button-voltar d-flex gap-3">
          <i className="bi bi-arrow-left-circle-fill fs-2"></i>
          <button className="rounded-pill border-0 button-voltar">
            Voltar para Visão geral
          </button>
        </div>
        </Link>

        

        <div className="perfil d-flex flex-column rounded-4 gap-3 p-4">
          <div className="div-icone-usuario d-flex flex-column justify-content-center align-items-center">
            <i className="bi bi-person-circle"></i>
            <p className="m-0">nome usuário</p>
          </div>
          <div className="div-informacoes-usuario d-flex flex-column gap-3 rounded-3">
            <div className="div-email d-flex flex-row gap-4 p-4">
              <div className="div-icone rounded-circle p-2">
                <i className="bi bi-envelope-fill m-0 p-2"></i>
              </div>
              <div className="info-usuario text-wrap text-break">
                <h4>Email</h4>
                <h2>email@gmail.com</h2>
              </div>
            </div>

            <div className="div-email d-flex align-items-center gap-4 p-4">
              <div className="div-icone rounded-circle p-2 ">
                <i className="bi bi-person-bounding-box p-2"></i>
              </div>
              <div className="info-usuario">
                <h4>CPF</h4>
                <h2>28366012787</h2>
              </div>
            </div>

            <div className="div-email d-flex gap-4 p-4">
              <div className="div-icone rounded-circle p-2">
                <i className="bi bi-graph-up-arrow p-2"></i>
              </div>
              <Link href={"/relatorios"} className="link">
                <div className="info-usuario">
                  <h2>Relatórios</h2>
                </div>
              </Link>
            </div>

            <div className="d-flex gap-4 p-4">
              <div className="div-icone rounded-circle p-2">
                <i className="bi bi-bell-fill m-0 p-2"></i>
              </div>
              <Link href={"/notificacoes"} className="link">
                <div className="info-usuario">
                  <h2>Notificações</h2>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <button
          className="button-sair border-0 p-2 w-50 m-4 rounded-pill"
          type="button"
        >
          Sair
        </button>
      </div>
    </>
  );
}
