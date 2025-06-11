"use client";
import "@/app/relatorios/relatorios.css";
import Link from "next/link";
import NavUsuario from "@/components/nav-usuario/nav-usuario";
import GraficoLinha from "@/components/graficoLinha/chartsLinha"; // Mantido o import
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

const API_URL = "http://localhost:8080";

export default function Relatorios() {
  const [nome, setNome] = useState("");
  const [saldoTotal, setSaldoTotal] = useState(0);
  const [rendaMensal, setRendaMensal] = useState(0);
  const [despesasFuturas, setDespesasFuturas] = useState([]); // Agora é um array
  const [recebimentosFuturos, setRecebimentosFuturos] = useState([]); // Agora é um array
  const [totalDespesasTabela, setTotalDespesasTabela] = useState(0);

  const tableRef = useRef(null); // Ref para o elemento que será capturado para o PDF

  // Efeito para checagem de autenticação e nome do usuário
  useEffect(() => {
    const userName = localStorage.getItem("nome");
    const userToken = localStorage.getItem("token");

    if (!userToken || !userName) {
      window.location.href = "/not-auth";
    } else {
      setNome(userName);
    }
  }, []);

  // Efeito para buscar dados financeiros e de despesas
  useEffect(() => {
    const fetchData = async () => {
      const idUser = localStorage.getItem("id");
      if (!idUser) {
        console.warn("ID do usuário não encontrado no localStorage.");
        return;
      }

      try {
        // Busca dados financeiros
        const responseFinanceiro = await axios.get(`${API_URL}/financeiro`);
        const pagamentos = responseFinanceiro.data;

        // Filtra pagamentos do usuário logado
        const pagamentosUser = pagamentos.filter(
          (p) => parseInt(p.id_user) === parseInt(idUser)
        );

        // Define a renda mensal (pegando a última ou somando todas, dependendo da necessidade)
        if (pagamentosUser.length > 0) {
          setRendaMensal(
            parseFloat(pagamentosUser[pagamentosUser.length - 1].renda || 0)
          );
        } else {
          setRendaMensal(0);
        }

        // Obtém o saldo total (considerando que vem do localStorage conforme seu código original)
        setSaldoTotal(parseFloat(localStorage.getItem("totalDinheiro") || 0));

        // Busca dados de despesas
        const responseDespesa = await axios.get(`${API_URL}/despesas/`);
        const despesas = responseDespesa.data.despesa;

        // Filtra despesas do usuário logado
        const despesasUser = despesas.filter(
          (d) => parseInt(d.id_user) === parseInt(idUser)
        );

        const hoje = new Date();
        const dataAtualDia = hoje.getDate(); // Pega o dia atual do mês

        // Filtra despesas futuras com base no dia do mês
        const filteredDespesasFuturas = despesasUser.filter((item) => {
          // Supondo que item.data_pag é apenas o dia do mês como string/número
          const itemDay = parseInt(item.data_pag);
          return itemDay >= dataAtualDia;
        });
        setDespesasFuturas(filteredDespesasFuturas);

        // Calcula o total das despesas futuras para a tabela
        const totalCalculatedDespesas = filteredDespesasFuturas.reduce(
          (acc, current) => acc + parseFloat(current.valor || 0),
          0
        );
        setTotalDespesasTabela(totalCalculatedDespesas);

        // Filtra recebimentos futuros com base no dia do mês
        const filteredRecebimentosFuturos = pagamentosUser.filter(
          (pagamento) => {
            // Supondo que pagamento.data_rec é apenas o dia do mês como string/número
            const pagamentoDay = parseInt(pagamento.data_rec);
            return pagamentoDay >= dataAtualDia;
          }
        );
        setRecebimentosFuturos(filteredRecebimentosFuturos);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
        // Implemente feedback na UI para o usuário em caso de erro
      }
    };

    fetchData();
  }, []); 

  
  const gerarPDF = async () => {
    const tableElement = tableRef.current; 
    if (tableElement) {
     
      tableElement.removeAttribute("hidden");

      try {
        const canvas = await html2canvas(tableElement, {
          useCORS: true, 
        });
        const imgData = canvas.toDataURL("image/png"); 

        const doc = new jsPDF({
          orientation: "p",
          unit: "mm",
          format: "a4",
        });
        const largura = doc.internal.pageSize.getWidth(); 
        const altura = (canvas.height * largura) / canvas.width; 

    
        doc.addImage(imgData, "PNG", 0, 0, largura, altura);

        doc.save("relatorioLancamentos.pdf");
      } catch (error) {
        console.error("Erro ao gerar PDF:", error);
      } finally {
     
        tableElement.setAttribute("hidden", "");
      }
    } else {
      console.error("Elemento da tabela para PDF não encontrado.");
    }
  };

  return (
    <>
      <div className="d-flex gap-3 flex-row mt-4">
        <NavUsuario></NavUsuario>
        <div className="container-usuario gap-2 mt-4 w-75 flex-wrap">
          <div className="d-flex gap-3 justify-content-end align-items-center flex-wrap">
            <button
              className="btn text-white fs-5"
              style={{ backgroundColor: "#ffcc00" }}
              onClick={gerarPDF}
            >
              <i className="bi bi-file-earmark-ruled-fill"></i> Gerar relatório
            </button>
            <div
              className="search bg-white rounded-pill"
              style={{ height: "fit-content" }}
            ></div>
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
                <p className="m-0">R$ {rendaMensal.toFixed(2)}</p>
              </div>
              <div className="div-contas p-3">
                <i className="bi bi-bank2"></i>
                <h3>Saldo</h3>
                <p className="m-0">R$ {saldoTotal.toFixed(2)}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      
      <div className="bg-white rounded shadow-sm p-3" hidden ref={tableRef}>
        <div className="d-flex align-items-center justify-content-center">
          <h1>Últimas Entradas e Saídas Futuras</h1>
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
            </thead>
            <tbody>
              {recebimentosFuturos.length > 0 ? (
                recebimentosFuturos.map((recebimento, index) => (
                  <tr key={`rec-${index}`}>
                    <td className="fs-5">{`${recebimento.data_rec}/${
                      new Date().getMonth() + 1
                    }`}</td>
                  
                    <td className="fs-5">Salário</td>
                    <td className="fs-5">
                      R$ {parseFloat(recebimento.renda || 0).toFixed(2)}
                    </td>
                    <td className="fs-5">Entrada</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="text-center">
                    Nenhum recebimento futuro.
                  </td>
                </tr>
              )}
              {despesasFuturas.length > 0 ? (
                despesasFuturas.map((despesa, index) => (
                  <tr key={`desp-${index}`}>
                    <td className="fs-5">{`${despesa.data_pag}/${
                      new Date().getMonth() + 1
                    }`}</td>
                 
                    <td className="fs-5">{despesa.categoria}</td>
                    <td className="fs-5">
                      R$ {parseFloat(despesa.valor || 0).toFixed(2)}
                    </td>
                    <td className="fs-5">Saída</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="text-center">
                    Nenhuma despesa futura.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <div className="d-flex justify-content-between align-items-center mt-3">
          <div className="text-black px-3 py-2">
            <p className="fs-5 bold">
              Total de gasto em despesas: R$ {totalDespesasTabela.toFixed(2)}
            </p>
          </div>
        </div>
        <div className="mt-5">
          <p className="w-50 flex-wrap fs-5">
            Este relatório tem como objetivo apresentar um panorama detalhado do
            desempenho financeiro, abrangendo os principais indicadores de
            entradas e saídas futuras. A intenção é fornecer transparência para
            auxiliar na tomada de decisões financeiras.
          </p>
        </div>
        <div className="d-grid h-100 align-items-center justify-content-end">
          <img
            src="/assinatura.png"
            alt="Assinatura byYoungFinance"
            className="h-75"
          />
          <p>-----------------------------------------------------------</p>
          <p className="fs-5">Diretores byYoungFinance</p>
        </div>
      </div>
    </>
  );
}
