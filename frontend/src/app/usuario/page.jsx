"use client";
import "@/app/usuario/usuario.css";
import NavUsuario from "@/components/nav-usuario/nav-usuario";
import Link from "next/link";
import Modal from "@/components/modal_user/page";
import { useEffect, useState } from "react";
import axios from "axios";
const API_URL = "http://localhost:8080";

export default function Usuario() {
  const [nome, setNome] = useState("");
  const [nomeUser, setNomeUser] = useState("");
  const [email,setEmail] = useState();
  const [cpf, setCpf] = useState();
  const [nasc, setNasc] = useState();
  const [info, setInfo] = useState([]);
  const [total, setTotal] = useState(0);
  const [diaRecebimento, setDiaRecebimento] = useState(false);
  const [totalFinanc, setTotalFinanc] = useState(0);
  const [quantidadeDespesas, setQuantidadeDespesas] = useState();

  //Autenticação e verificação de token
  useEffect(() => {
    localStorage.setItem('totalDinheiro', 0)
    setNome(localStorage.getItem("nome"));
    setEmail(localStorage.getItem('email'));
    setCpf(localStorage.getItem('cpf'));
    setNasc(localStorage.getItem('data_nasc'));

    if (!localStorage.getItem("token") || !localStorage.getItem("nome")) {
      window.location.href = "/not-auth";
      return;
    }
  }, []);

  //Gasto total de despesas
  useEffect(() => {
    const gasto = async () => {
      setNomeUser(localStorage.getItem("nome"));
      try {
        const response = await axios.get(`${API_URL}/despesas`);
        const despesas = response.data.despesa;
        const userId = parseInt(localStorage.getItem("id"));

        const despesasDoUsuario = despesas.filter(
          (d) => parseInt(d.id_user) === userId
        );

        setQuantidadeDespesas(despesasDoUsuario.lenght);

        const totalGasto = despesasDoUsuario.reduce(
          (acc, curr) => acc + parseInt(curr.valor),
          0
        );



        setTotal(totalGasto.toFixed(2));
        localStorage.setItem("totalGasto", totalGasto.toString());
      } catch (error) {
        console.error("Erro ao buscar despesas:", error);
      }


    };
    gasto();
  }, []);

  //Dados do usário na questão financeira
  useEffect(() => {
    const fetchFinanceiro = async () => {
      try {
        const response = await axios.get(`${API_URL}/financeiro/${localStorage.getItem("id")}`);
        const data = response.data.dado;
        setInfo(data);

        const renda = parseInt(data.renda);
        const despesa = parseInt(localStorage.getItem("totalGasto"));
        const saldoInicial = renda - despesa;
        localStorage.setItem('totalDinheiro', saldoInicial);

        setTotalFinanc(saldoInicial);

        const hoje = new Date().getDate();
        const diaRecebimento = parseInt(data.data_rec);

        if (diaRecebimento === hoje) {
          setTotalFinanc(saldoInicial + renda);
          localStorage.setItem('totalDinheiro', saldoInicial + renda);
          setDiaRecebimento(true);
        } else {
          setDiaRecebimento(false);
        }

        return;
      } catch (err) {
        console.error("Erro ao pegar dados do financeiro", err);
      }
    };

    fetchFinanceiro();
  }, []);

  return (
    <>
      <div className="d-flex justify-content-center align-items-center ">
        <div className="position-absolute" style={{ top: "10rem" }}>
          <Modal></Modal>
        </div>
      </div>

      <div className="row min-vh-100 usuario">
        <NavUsuario></NavUsuario>
        <div className="container-usuario gap-4 w-75 flex-wrap h-50">
          <div className="d-flex gap-3 justify-content-end align-items-center flex-wrap">

            <div className="div-usuario d-flex align-items-center gap-2 pe-3">
                <p className="m-0">{nome}</p>
              <i className="bi bi-person-circle"></i>
            </div>
          </div>
          <h1 className="bemvindo-usuario" id="greetings">
            Bem vindo {nome}!
          </h1>
          <div className="contas d-flex gap-3 mt-4 mb-4 flex-wrap">
            <div className="div-contas-total d-flex flex-column justify-content-center p-3">
              <h3 className="text-white">
                <i className="bi bi-wallet pe-2"></i>Total da conta / mês
              </h3>
              <p className="text-white m-0">R$ {totalFinanc.toFixed(2)}</p>
              <p className="text-white m-0 fs-5">
                {diaRecebimento ? " (Renda recebida hoje)" : ""}
              </p>
            </div>
            <div className="div-contas p-3">
              <i className="bi bi-patch-minus-fill pe-3"></i>
              <h3>Contas a pagar</h3>
              <p className="m-0">R$ {total}</p>
              <Link
                href={"/lancamentos"}
                className="text-decoration-none text-dark"
              >
                <p className="fw-200 fs-5" style={{ color: "#ffcc00" }}>
                  Ver lançamentos
                </p>
              </Link>
            </div>
            <div className="div-contas p-3">
              <i className="bi bi-patch-check-fill pe-3"></i>
              <h3>Contas a receber</h3>
              <div className="d-grid">
                <p className="m-0">R$ {info.renda}</p>
                <p className="fw-200 fs-5">Todo o dia {info.data_rec} do mês</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-100 d-flex align-items-center justify-content-center">
        <div className="perfil d-flex flex-column rounded-4 gap-3 p-4">
          <div className="div-icone-usuario d-flex flex-column justify-content-center align-items-center">
            <i className="bi bi-person-circle"></i>
            <p className="m-0">{nome}</p>
          </div>
          <div className="div-informacoes-usuario d-flex flex-column gap-3 rounded-3">
            <div className="div-email d-flex flex-row gap-4 p-4">
              <div className="div-icone rounded-circle p-2">
                <i className="bi bi-envelope-fill m-0 p-2"></i>
              </div>
              <div className="info-usuario text-wrap text-break">
                <h4>Email</h4>
                <h2>{email}</h2>
              </div>
            </div>

            <div className="div-email d-flex align-items-center gap-4 p-4">
              <div className="div-icone rounded-circle p-2 ">
                <i className="bi bi-person-bounding-box p-2"></i>
              </div>
              <div className="info-usuario">
                <h4>CPF</h4>
                <h2>{cpf}</h2>
              </div>
            </div>

            <div className="div-nasc d-flex align-items-center gap-4 p-4">
              <div className="div-icone rounded-circle p-2 ">
                <i className="bi bi-calendar p-2"></i>
              </div>
              <div className="info-usuario">
                <h4>Data de Nascimento</h4>
                <h2>{nasc}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
