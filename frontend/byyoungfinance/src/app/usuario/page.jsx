"use client";
import "@/app/usuario/usuario.css";
import NavUsuario from "@/components/nav-usuario/nav-usuario";
import GraficoBarras from "@/components/graficoBarras/chartsBarras";
import Modal from '@/components/modal_user/page';
import { useEffect, useState } from "react";
import axios from "axios";
const API_URL = 'http://localhost:8080';

export default function Usuario() {
  const [nome, setNome] = useState("");
  const [info, setInfo] = useState([]);
  useEffect(() => {
    setNome(localStorage.getItem("nome"));
    if (!localStorage.getItem("token") || !localStorage.getItem("nome")) {
      window.location.href = "/not-auth";
      return;
    }
  }, []);

    useEffect(()=>(
      async()=>{
        try{
          const info_financeiro = await axios.get(`${API_URL}/financeiro/${localStorage.getItem('id')}`);
          setInfo(info_financeiro.data.dado);
          console.log(info)
          return info_financeiro.data;
        } catch (err){
          console.error('Erro ao pegardados do financeiro', err);
          return [];
        }
        
      }
    ))
  return (
    <>
      <div className="d-flex justify-content-center align-items-center ">
        <div className="position-absolute" style={{ top: "10rem" }}>
          <Modal></Modal>
        </div>
      </div>
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
              <p className="m-0">{nome}</p>
              <i className="bi bi-person-circle"></i>
            </div>
          </div>
          <h1 className="bemvindo-usuario" id="greetings">
            Bem vindo nome {nome}!
          </h1>
          <div className="contas d-flex gap-3 mt-4 mb-4 flex-wrap">
            <div className="div-contas-total d-flex flex-column justify-content-center p-3 rounded-4">
              <h3 className="text-white">
                <i className="bi bi-wallet pe-3"></i>Total da conta
              </h3>
              <p className="text-white m-0">R$ {info.renda}</p>
            </div>
            <div className="div-contas p-3 rounded-4">
              <i className="bi bi-patch-minus-fill pe-3"></i>
              <h3>Contas a pagar</h3>
              <p className="m-0">R$ 260.00</p>
            </div>
            <div className="div-contas p-3 rounded-4">
              <i className="bi bi-patch-check-fill pe-3"></i>
              <h3>Contas a receber</h3>
              <p className="m-0">R$ {info.renda}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container-usuario mb-4">
        <div className="graficos d-flex flex-column align-items-center container-fluid row-gap-5">
          <div className="movimentacoes bg-white rounded-4 p-3 mt-4">
            <GraficoBarras></GraficoBarras>
          </div>
          <div className="div-notificacoes p-3 rounded-4">
            <p>Painel notificação</p>
            <div className="notificacoes">
              <table>
                <tbody>
                  <tr className="table-header">
                    <th className="verde-claro">Data</th>
                    <th className="azul">Descrição</th>
                    <th className="verde-escuro">Tipo</th>
                  </tr>
                  <tr>
                    <td data-th="Data">16/05/2025</td>
                    <td data-th="Descrição">Mercado</td>
                    <td data-th="Tipo">Alimentação</td>
                  </tr>
                  <tr>
                    <td data-th="Data">16/05/2025</td>
                    <td data-th="Descrição">Energia</td>
                    <td data-th="Tipo">Serviços</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
