"use client";
import { useState, useEffect } from "react";
import "./modal.css";
import axios from "axios";
import Swal from "sweetalert2";

const API_URL = "http://localhost:8080";

export default function Modal() {
  const [salario, setSalario] = useState("");
  const [renda, setRenda] = useState("");
  const [data_rec, setData_rec] = useState("");
  const [mostrarModal, setMostrarModal] = useState(false);

  useEffect(() => {
    const fetchFinanceiro = async () => {
      if (typeof window === "undefined") return;

      const userId = localStorage.getItem("id");
      if (!userId) return;

      try {
        const response = await axios.get(`${API_URL}/financeiro/${userId}`);
        if (parseInt(response.data.dado.id_user) === parseInt(userId)) {
          console.log("Usuário já possui informações financeiras cadastradas.");
          setMostrarModal(false);
          document.getElementById("modal-u")?.classList.add("escondido");
          document.getElementById("modal-overlay")?.classList.add("escondido");
        } else {
          console.log("Usuário não possui informações financeiras cadastradas.");
          setMostrarModal(true);
          document.getElementById("modal-u")?.classList.add("visivel");
          document.getElementById("modal-overlay")?.classList.add("visivel");
        }
      } catch (err) {
        if (err.response && err.response.status === 404) {
          
          setMostrarModal(true);
          document.getElementById("modal-u")?.classList.add("visivel");
          document.getElementById("modal-overlay")?.classList.add("visivel");
        } else {
          console.error("Erro ao buscar financeiro:", err);
        }
      }
    };

    fetchFinanceiro();
  }, []);

  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  async function CriarInfoFinanceiro() {
    if (renda === "" || data_rec === "") {
      Swal.fire({
        title: "Erro!",
        text: "Preencha todos os campos!",
        icon: "error",
        confirmButtonText: "OK",
      });
      return;
    }

    try {
      const response = await axios.post(`${API_URL}/financeiro`, {
        renda,
        data_rec,
        id_user: localStorage.getItem("id"),
      });
      window.location.reload();
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

                  <input type="text" className="w-100 rounded-4" value={renda} onChange={(e) => setRenda(e.target.value)} />
                </div>
                <div>
                  <p className="m-0 fw-semibold fs-4">
                    Qual é o dia de recebimento?
                  </p>
                  <input
                    className="w-100 rounded-4"
                    type="text"
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
          </div>
        </div>
      </div>
    </div>
  </>
  );
}







