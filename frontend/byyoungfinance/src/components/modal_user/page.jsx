"use client";
import { useState, useEffect, useContext } from "react";
import { NumericFormat } from "react-number-format";
import "./modal.css";
import axios from "axios";

const API_URL = "http://localhost:8080";

export default function Modal() {
  const [salario, setSalario] = useState("");
  const [renda, setRenda] = useState("");
  const [data_rec, setData_rec] = useState("");

  if (typeof window !== "undefined") {
    const [mostrarModal, setMostrarModal] = useState(false);

    // Mostrar o modal\\}
    useEffect(() => {
      const modalJaExibido = localStorage.getItem("modalExibido");

      if (!modalJaExibido) {
        setMostrarModal(true);
        localStorage.setItem("modalExibido", "true");

        const modal = document.getElementById("modal-u");
        const modalFundo = document.getElementById("modal-overlay");
        if (!mostrarModal) {
          modal.classList.remove("escondido");
          modal.classList.add("visivel");
          modalFundo.classList.remove("escondido");
          modalFundo.classList.add("visivel");
        }
      } else {
        const modal = document.getElementById("modal-u");
        const modalFundo = document.getElementById("modal-overlay");
        modal.classList.remove("visivel");
        modal.classList.add("escondido");
        modalFundo.classList.remove("visivel");
        modalFundo.classList.add("escondido");
      }
    }, []);

    useEffect(() => {
      import("bootstrap/dist/js/bootstrap.bundle.min.js");
    }, []);
  }

  function fecharModal() {
    const modal = document.getElementById("modal-u");
    const modalFundo = document.getElementById("modal-overlay");
    if (modal) {
      modal.classList.remove("visivel");
      modal.classList.add("escondido");
      modalFundo.classList.remove("visivel");
      modalFundo.classList.add("escondido");
    }
  }

  async function CriarInfoFinanceiro() {
    try {
      const response = await axios.post(`${API_URL}/financeiro`, {
        renda: renda,
        data_rec: data_rec,
        id_user: localStorage.getItem('id')
      });
      setTimeout(() => {
        window.location.reload(false);
      });
      return response.data;
    } catch (err) {
      console.error("Erro ao enviar os dados do financeiro", err);
    }
  }

  return (
    <>
      <div className="modal-overlay" id="modal-overlay"></div>
      <div className="modal-u rounded-3" id="modal-u">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content d-flex justify-content-center align-items-center">
            <div className="modal-top-cover text-center position-relative w-100">
              <div className="modal-cover">
                <img src="/modal-cover.png" alt="" />
              </div>
            </div>

            <div className="modal-top-cover-logo text-center">
              <img src="/logo_modal.png" alt="Logo" />
            </div>

            <div className="modal-body d-flex flex-column gap-3 justify-content-center text-white w-75">
              <div className="d-flex justify-content-center align-items-center">
                <h2 className="fw-semibold mt-4">Vamos planejar!</h2>
              </div>

              <div className="d-flex flex-column gap-3 justify-content-center">
                <form action="" className="d-flex flex-column gap-3  w-100">
                  <div className="entrada-input">
                    <div className="label-nome">
                      <p className="m-0 fw-semibold fs-4">
                        Qual sua renda mensal?
                      </p>
                    </div>
              
                    <input type="text" className="w-100 rounded-4" value={renda} onChange={(e)=>setRenda(e.target.value)} />
                  </div>
                  <div>
                    <p className="m-0 fw-semibold fs-4">
                      Qual é o dia de recebimento?
                    </p>
                    <input
                      className="w-100 rounded-4"
                      type="date"
                      placeholder="Dia de recebimento..."
                      value={data_rec}
                      onChange={(e) => setData_rec(e.target.value)}
                    />
                  </div>
                </form>
              </div>
            </div>

            <div className="modal-footer d-flex flex-row flex-nowrap justify-content-center w-100 gap-2 mt-3 mb-3 p-3">
              <button
                type="button"
                className="button-modal p-2 rounded-4 w-50"
                onClick={CriarInfoFinanceiro}
              >
                <h3 className="fonte fs-5 m-0">Salvar</h3>
              </button>
              <button
                type="button"
                className="button-fechar-modal text-white p-2 rounded-4 w-50"
                onClick={fecharModal}
              >
                <h3 className="fonte fs-5 m-0">Fechar</h3>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
