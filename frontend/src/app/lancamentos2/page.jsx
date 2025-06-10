"use client";
import "./lancamento.css";
import axios from "axios";
import { useEffect, useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import NavUsuario from "@/components/nav-usuario/nav-usuario";
import Swal from "sweetalert2";
import Link from "next/link";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

const API_URL = "http://localhost:8080";

export default function Lancamentos() {


  const [nome, setNome] = useState("");
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [categoria, setCategoria] = useState("");
  const [descricao, setDescricao] = useState("");
  const [valor, setValor] = useState("");
  const [data_pag, setData_pag] = useState("");
  const [despesa, setDespesa] = useState([]);
  const [nomeUser, setNomeUser] = useState("");
  const [total, setTotal] = useState("");

  useEffect(() => {
    setNome(localStorage.getItem("nome"));
    if (!localStorage.getItem("token") || !localStorage.getItem("nome")) {
      window.location.href = "/not-auth";
      return;
    }
  }, []);

  useEffect(() => {

    const botaoGerar = document.getElementById("generate-pdf");

    if (botaoGerar) {
      botaoGerar.addEventListener("click", () => {
        var conteudo = document.querySelector("#table");

        // o then(canvas) é para aguardar o html
        if (conteudo) {
          html2canvas(conteudo).then((canvas) => {
            const imgData = canvas.toDataURL("image/png");
            console.log(imgData)

            const doc = new jsPDF({
              orientation: "p",
              unit: "mm",
              format: "a4"
            });
            const largura = 210;
            const altura = (canvas.height * largura) / canvas.width;
            doc.setFillColor('#000000'); 
            doc.rect(0, 0, 210, 297, "F"); 


            //imagem para base 64
            const img = new Image();
            img.src = "/logoPdf.png";
            img.onload = function () {
              const canvas = document.createElement("canvas");
              const ctx = canvas.getContext("2d");
              canvas.width = img.width;
              canvas.height = img.height;
              ctx.drawImage(img, 0, 0);
              const imgLogo = canvas.toDataURL("image/png");

              doc.addImage(imgData, "PNG", 10, 45, largura - 20, altura);
              doc.addImage(imgLogo, "PNG", 10, 10, 60, 30,)
              doc.setFont("times")
              doc.setFontSize(22);
              doc.setTextColor('#ffffff')
              doc.text("Relatório financeiro dos lançamentos", 80, 30)
              doc.save("relatorioLancamentos.pdf");
            }

          })
        }
      })
    }

  }, []);

  return (
    <div className="d-flex flex-row mt-4 gap-2">
      <NavUsuario></NavUsuario>

    <div className="d-flex justify-content-center w-100">
        <div className="p-4 bg-light rounded-4 w-100 m-2 div-lancamentos">
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
          <Link href={"/perfil"} className="link">
            <div className="div-usuario d-flex align-items-center gap-2 pe-3">
              <p className="m-0">{nome}</p>
              <i className="bi bi-person-circle"></i>
            </div>
          </Link>
        </div>
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center gap-3 mb-4">
          <h4 className="fw-bold m-0">Lançamentos</h4>
          <div className="d-flex align-items-center gap-3">
            <button
              className="btn text-white fs-5"
              style={{ backgroundColor: "#ffcc00" }}
              id="generate-pdf"
            >
             <i className="bi bi-file-earmark-ruled-fill"></i> Gerar relatório
            </button>
            <button
              className="btn text-white fs-5"
              style={{ backgroundColor: '#ffcc00' }}
              onClick={() => setMostrarFormulario(true)}
            >
              + Adicionar
            </button>
          </div>
        </div>

        {/* Formulario */}
        {mostrarFormulario && (
          <div className="formulario-lancamento p-4 mb-4">
            <h5 className="text-white fw-bold mb-3">Nova Despesa</h5>
            <form>
              <div className="mb-3">
                <label className="form-label text-white">Descrição</label>
                <input
                  type="text"
                  className="form-control custom-input"
                  value={descricao}
                  onChange={(e) => setDescricao(e.target.value)}
                />
              </div>
              <div className="row mb-3">
                <div className="col">
                  <label className="form-label text-white">Valor por mês</label>
                  <input
                    type="text"
                    className="form-control custom-input"
                   
                  />
                </div>
                <div className="col">
                  <label className="form-label text-white">
                    Dia do gasto / mês
                  </label>
                  <input
                    type="text"
                    className="form-control custom-input"
                    value={data_pag}
                    onChange={(e) => setData_pag(e.target.value)}
                  />
                </div>
              </div>
              <div className="mb-3">
                <label className="form-label text-white">Categoria</label>
                <input
                  type="text"
                  className="form-control custom-input"
                  value={categoria}
                  onChange={(e) => setCategoria(e.target.value)}
                />
              </div>
              <div className="d-flex justify-content-between flex-wrap gap-3">
                <button
                  type="button"
                  className="btn btn-light fw-bold px-4"
                  onClick={() => setMostrarFormulario(false)}
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  onClick={CadastrarDespesa}
                  className="btn fw-bold px-4"
                  style={{ backgroundColor: "#ffcc00", color: "white" }}
                >
                  Adicionar
                </button>
              </div>
            </form>
          </div>
        )}

        <div className="bg-white rounded shadow-sm p-3" id="table" >
          <div className="table-responsive">
            <table className="table table-hover">
              <thead className="bg-warning text-dark fw-bold">
                <tr>
                  <th>Dia / mês</th>
                  <th>Descrição</th>
                  <th>Tipo</th>
                  <th>Valor</th>
                  <th></th>
                </tr>
              </thead>
              
            </table>
          </div>
          <div className="d-flex justify-content-between align-items-center mt-3">
            <div
              className="text-white rounded px-3 py-2"
              style={{ backgroundColor: "#ffcc00" }}
            >
              Total de gasto: R${ }
            </div>
          </div>
        </div>
      </div>
    </div>
    
    </div>
  );
}
