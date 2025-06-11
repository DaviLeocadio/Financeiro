"use client";
import "@/app/relatorios/relatorios.css"
import Link from "next/link";
import NavUsuario from "@/components/nav-usuario/nav-usuario";
import GraficoLinha from "@/components/graficoLinha/chartsLinha";
import { useState, useEffect } from "react";
import axios from "axios";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

const API_URL = 'http://localhost:8080';

export default function Relatorios() {
  const [nome, setNome] = useState();
  const [total, setTotal] = useState();
  const [pagamento, setPagamento] = useState();
  const [despesasUserMap, setDespesasUserMap] = useState();
  const [possuiDespesa, setPossuiDespesa] = useState(false);
  const [possuiRecebimento, setPossuiRecebimento] = useState(false);
  const [ganho, setGanho] = useState();
  const [diaGanho,setDiaGanho] = useState();
  const [totalGanho, setTotalGanho] = useState();

  useEffect(() => {
    setNome(localStorage.getItem('nome'));
    if (!localStorage.getItem('token') || !localStorage.getItem('nome')) {
      window.location.href = '/not-auth';
      return;
    }
  }, []);


  useEffect(() => {
    const renda = async () => {
      const response = await axios.get(`${API_URL}/financeiro`);
      setTotal(localStorage.getItem('totalDinheiro'));
      const renda = response.data;
      const idUser = localStorage.getItem('id');

      const rendaUser = renda.filter(
        (r) => parseInt(r.id_user) == parseInt(idUser)
      )

      rendaUser.forEach(pagamento => {
        setPagamento(pagamento.renda)
      });
    }

    renda();
  }, [])

  useEffect(() => {
    const despesa = async () => {
      const responseDespesa = await axios.get(`${API_URL}/despesas/`);
      const responseFinanceiro = await axios.get(`${API_URL}/financeiro/`);
      const despesas = responseDespesa.data.despesa;
      const pagamentos = responseFinanceiro.data;
      setTotalGanho(localStorage.getItem('totalDinheiro'))

      const despesasUser = despesas.filter(
        (d) => parseInt(d.id_user) == localStorage.getItem('id')
      )

      const pagamentosUser = pagamentos.filter(
        (p) => parseInt(p.id_user) == localStorage.getItem('id')
      )

      const mes = new Date().getMonth();

      despesasUser.forEach((item) => {
        pagamentosUser.forEach((pagamento) => {
          const dataFutura = new Date().getDate();
          if (parseInt(item.data_pag) >= parseInt(dataFutura)) {
            setDespesasUserMap(item);
            setPossuiDespesa(true);
          }
          if (parseInt(pagamento.data_rec) >= parseInt(dataFutura)) {
            setGanho(pagamento.renda)
            console.log(`${pagamento.data_rec}/${mes}`)
            setDiaGanho(`${pagamento.data_rec}/${mes}`)
            setPossuiRecebimento(true);
          }
        })
        return;
      });

    }

    despesa();
  }, [])


  function gerarPDF() {

    const conteudo = document.querySelector("#table");
    html2canvas(conteudo).then((canvas) => {
      const imgData = canvas.toDataURL("img/png");
      const doc = new jsPDF({
        orientation: "p",
        unit: "mm",
        format: "a4"
      });

      doc.setFillColor('#fff');
      doc.rect(0, 0, 210, 297, "F");


      const img = new Image();
      img.src = "/logosemfundo.png";
      img.onload = function () {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);
        const imgLogo = canvas.toDataURL("image/png");

   
        doc.addImage(imgLogo, "PNG", 10, 10, 60, 30,)
        doc.setFont("times")
        doc.setFontSize(22);
        doc.setTextColor('#ffffff')
        doc.text("Relatório financeiro dos lançamentos", 80, 30)
        doc.save("relatorioLancamentos.pdf");
      }
    })
  }

  return (<>
    <div className="d-flex gap-3 flex-row mt-4">
      <NavUsuario></NavUsuario>
      <div className="container-usuario gap-2 mt-4 w-75 flex-wrap">
        <div className="d-flex gap-3 justify-content-end align-items-center flex-wrap">
          <button
            className="btn text-white fs-5"
            style={{ backgroundColor: "#ffcc00" }}
            id="generate-pdf"
            onClick={gerarPDF}
          >
            <i className="bi bi-file-earmark-ruled-fill"></i> Gerar relatório
          </button>
          <div
            className="search bg-white rounded-pill"
            style={{ height: "fit-content" }}
          >
          </div>
          <div className="div-usuario d-flex align-items-center gap-2 pe-3">
            <p className="m-0">{nome}</p>
            <i className="bi bi-person-circle"></i>
          </div>
        </div>

        <div className="d-flex flex-column gap-3">
          <h1 className="relatorios-usuario" id="greetings">
            Relatórios
          </h1>
          <div className="renda d-flex flex-row gap-3">
            <div className="div-contas p-3">
              <i className="bi bi-cash-stack"></i>
              <h3>Minha renda</h3>
              <p className="m-0">R$ {pagamento}</p>
            </div>
            <div className="div-contas p-3">
              <i className="bi bi-bank2"></i>
              <h3>Saldo</h3>
              <p className="m-0">R$ {total}</p>
            </div>
          </div>
          <div>
            <h2 className="entradas">Entradas</h2>
            <GraficoLinha></GraficoLinha>
          </div>
          <div className="mb-3">
            <h2 className="entradas">Saídas</h2>
            <GraficoLinha></GraficoLinha>
          </div>
        </div>
      </div>
    </div>

    <div className="bg-white rounded shadow-sm p-3" hidden id="table" >
      <div className="d-flex align-items-center justify-content-center">
        <h1>Últimas Entradas e saídas</h1>
      </div>
          <div className="table-responsive mt-4">
            <table className="table table-hover">
              <thead className="bg-warning text-dark fw-bold">
                <tr>
                  <th className="fs-3">Dia</th>
                  <th className="fs-3">Ação</th>
                  <th className="fs-3">Valor</th>
                  <th className="fs-3">Procedimento</th>
                </tr>

                 {possuiRecebimento ? (
                    <tr>
                      <td className="fs-5">{diaGanho}</td>
                      <td className="fs-5">Salário</td>
                      <td className="fs-5">R$ {ganho}</td>
                      <td className="fs-5">Entrada</td>
                    </tr>
                  ) : ''}

                  {possuiDespesa ? (
                    Array(despesasUserMap).map((despesa, index)=>{
                      return <tr key={index}>
                      <td className="fs-5">{despesa.data_pag}</td>
                      <td className="fs-5">{despesa.categoria}</td>
                      <td className="fs-5">R$ {despesa.valor}</td>
                      <td className="fs-5">Saída</td>
                    </tr>
                    })
                    
                  ) : ''}
              </thead>
              
            </table>
          </div>
          <div className="d-flex justify-content-between align-items-center mt-3">
            <div
              className="text-black px-3 py-2"
            >
              <p className="fs-5 bold">Total de gasto: R$ {totalGanho}</p>
            </div>
          </div>
          <div className="mt-5">
            <p className="w-50 flex-wrap fs-5">Este relatório tem como objetivo apresentar um panorama detalhado do desempenho da empresa ao longo do ano de 2024, abrangendo os principais indicadores financeiros, operacionais, estratégicos e de sustentabilidade. A intenção é fornecer transparência para stakeholders internos e externos e subsidiar a tomada de decisões.</p>
          </div>
          <div className="d-grid h-100 align-items-center justify-content-end">
            <img src="/assinatura.png" alt="Assinatura byYoungFinance" className="h-75" />
            <p>-----------------------------------------------------------</p>
            <p className="fs-5">Diretores byYoungFinance</p>
          </div>
        </div>



  </>)
}