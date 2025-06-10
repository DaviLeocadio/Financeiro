"use client";
import "@/app/notificacoes/notificacoes.css";
import Link from "next/link";
import Grafico from "@/components/graficoDonut/chart";
import NavUsuario from "@/components/nav-usuario/nav-usuario";
import { useEffect, useState } from "react";
import axios from "axios";
const API_URL = "http://localhost:8080";

export default function Notificacoes() {
  const [nome, setNome] = useState();
  const [despesa, setDespesa] = useState([]);
  const [diaPagamentoDespesa, setDiaPagamentoDespesa] = useState(false);
  const [diaPagamento, setDiaPagamento] = useState(false);
  const [dinheiroCritico, setDinheiroCritico] = useState(false);
  const [dinheiroZerado, setDinheiroZerado] = useState(false);

  useEffect(() => {
    setNome(localStorage.getItem("nome"));
    if (
      !localStorage.getItem("token") ||
      !localStorage.getItem("nome") ||
      localStorage.getItem("token") == "undefined" ||
      localStorage.getItem("token") == []
    ) {
      window.location.href = "/not-auth";
      return;
    }
  }, []);

  useEffect(() => {
    const notificacoes_pagamento = async () => {
      try {
        const responseDiaPagamento = await axios.get(`${API_URL}/financeiro`);
        const pagamento = responseDiaPagamento.data;


        console.log("Despesas:", pagamento);
        const pagamentoDoUsuario = pagamento.filter(
          (d) => parseInt(d.id_user) === parseInt(localStorage.getItem('id'))
        );

        //Dinheiro critico
        pagamentoDoUsuario.forEach((item) => {
          setDespesa(item);

          const conta_critico = 0.80 * parseInt(localStorage.getItem('totalDinheiro'));
          console.log(conta_critico)
          const totalGasto = localStorage.getItem('totalGasto');
          const totalDinheiro = localStorage.getItem('totalDinheiro')
          if (parseFloat(totalGasto) >= parseFloat(conta_critico)) {
            setDinheiroCritico(true);
          }
          if (parseFloat(totalDinheiro) <= 0) {
            setDinheiroZerado(true);
            return;
          }

          setDinheiroZerado(false);
          return;
        }
        );

        pagamentoDoUsuario.forEach((item) => {
          const hoje = new Date().getDate();
          const dia_pag = item.data_rec;

          if (parseInt(hoje) == parseInt(dia_pag)) {
            setDiaPagamento(true)
            return;
          }

          setDiaPagamento(false);
          return;
        })

      } catch (err) {
        console.error("Erro ao ver dia de pagamento: ", err);
        return;
      }
    };

    notificacoes_pagamento();
  }, []);

  useEffect(() => {
    const notificacoes_despesa = async () => {
      try {
        const responseDiaDespesa = await axios.get(`${API_URL}/despesas`);
        if (responseDiaDespesa.data.length === 0) {
          console.log("Nenhuma despesa cadastrada.");
          setDespesa([]);
          return;
        }

        const despesas = responseDiaDespesa.data.despesa;
        console.log(despesas)

        const despesaDoUsuario = despesas.filter(
          (d) => parseInt(d.id_user) === parseInt(localStorage.getItem('id'))
        );

        //Verificar dia de despesa
        despesaDoUsuario.forEach((item) => {
          setDespesa(item);
          const hoje = new Date().getDate();

          // Verifica se alguma despesa vence hoje
          const diaPagamentoDespesa = item.data_pag;
          if (diaPagamentoDespesa == hoje) {
            setDiaPagamentoDespesa(true);
            return;
          }
          setDiaPagamentoDespesa(false);
        });
        return;

      } catch (error) {
        console.error("Erro ao buscar despesas:", error);
      }
    };
    notificacoes_despesa();
  }, []);
  return (
    <>
      <div className="d-flex flex-row gap-4 mt-4">
        <NavUsuario></NavUsuario>
        <div className="container-usuario gap-4 mt-4 w-75 flex-wrap">
          <div className="d-flex gap-3 justify-content-end align-items-center flex-wrap">
            <div
              className="search bg-white rounded-pill"
              style={{ height: "fit-content" }}
            >

            </div>
            <Link href={"/perfil"} className="link">
              <div className="div-usuario d-flex align-items-center gap-2 pe-3">
                <p className="m-0">{nome}</p>
                <i className="bi bi-person-circle"></i>
              </div>
            </Link>
          </div>

          <div className="">
            <div className="d-flex gap-3">
              <i className="bi bi-bell fs-2"></i>
              <h1 className="notificacoes-usuario mb-4" id="greetings">
                Notificações
              </h1>
            </div>

            <div className="notificacoes">
              <div className="div-notificacoes p-3 rounded-4">
                <div className="notificacoes">
                  <table>
                    <tbody>
                      {diaPagamento ? (
                        <tr>
                          <td className="text-success d-flex gap-3" data-th="Data">
                            <i className="bi bi-check-circle-fill text-success"></i>
                            <p className="fs-5">Hoje é dia de receber sua renda!</p>
                          </td>
                        </tr>
                      ) : (
                        ''
                      )}

                      {dinheiroZerado ? (
                        <tr>
                          <td className="text-danger d-flex gap-3" data-th="Data">
                            <i className="bi bi-exclamation-triangle-fill text-danger"></i>
                            <p className="fs-5">Dinheiro Zerado!!! Retire despesas!</p>
                          </td>
                        </tr>
                      ) : (
                        ''
                      )}


                      {diaPagamentoDespesa ? (
                        <tr >
                          <td className="text-success d-flex gap-3" data-th="Data">
                            <i className="bi bi-check-circle-fill text-success"></i>
                            <p className="fs-5">Hoje é dia de pagar sua despesa!</p>

                          </td>
                        </tr>
                      ) : (
                        ''
                      )}


                      {dinheiroCritico ? (
                        <tr>
                          <td className="text-danger d-flex gap-3" data-th="Data">
                            <i className="bi bi-exclamation-triangle-fill text-danger mt-1"></i>
                            <p className="fs-5">Atenção! Cuidado com os gastos!</p>
                          </td>
                        </tr>
                      ) : (
                        <tr>
                          <td className="text-success d-flex gap-3" data-th="Data">
                            <i className="bi bi-check-circle-fill text-success"></i>
                            <p className="fs-5">Você está dentro do seu limite financeiro.</p>

                          </td>
                        </tr>
                      )}

                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
