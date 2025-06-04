"use client";
import { useState, useEffect, useContext } from "react";
import { NumericFormat } from 'react-number-format';
import "@/components/modal/modal.css";

export default function Modal() {
  const [selecionado, setSelecionado] = useState(false)
  const [salario, setSalario ] = useState('')
  const [despesas, setDespesas] = useState('')

  if (typeof window !== "undefined") {

    const [mostrarModal, setMostrarModal] = useState(false);

    useEffect(() => {
      const modalJaExibido = localStorage.getItem("modalExibido")

      if (!modalJaExibido) {
        setMostrarModal(true);
        localStorage.setItem("modalExibido", "true");

        const modal = document.getElementById("modal-u");
        const modalFundo = document.getElementById("modal-overlay")
        if (!mostrarModal) {
          modal.classList.remove("escondido");
          modal.classList.add("visivel");
          modalFundo.classList.remove("escondido");
          modalFundo.classList.add("visivel");
        }
      }
      else {
        const modal = document.getElementById("modal-u");
        const modalFundo = document.getElementById("modal-overlay")
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
  return (
    <>
      <div className="modal-overlay" id="modal-overlay"></div>
      <div
        className="modal-u rounded-3" id="modal-u"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content d-flex justify-content-center align-items-center">
            <div className="modal-top-cover text-center position-relative w-100">
              <div className="modal-cover">
                <img src="/modal-cover.png" alt="" />
              </div>
            </div>

            <div className="modal-top-cover-logo text-center">
              <img
                src="/Logo.png"
                alt="Logo"
              />
            </div>


            <div className="modal-body d-flex flex-column gap-3 justify-content-center text-white w-75">
              <h2 className="fw-semibold">Vamos começar o seu planejamento!</h2>
              <div className="d-flex flex-column gap-3 justify-content-center">
                <form action="" className="d-flex flex-column gap-3  w-100">
                  <div className="entrada-input">
                    <div className="label-nome"><p className="m-0 fw-semibold fs-4">Qual é o seu salário atual?</p></div>
                    <NumericFormat
                    value={salario}
                    onValueChange={(values) => setSalario(values.floatValue)}
                      className="w-100 rounded-4"
                      allowLeadingZeros={false} //permite zero antes do numero
                      prefix="R$"
                      decimalScale={2} //casas decimais
                      fixedDecimalScale={true}
                      allowNegative={false}
                      thousandSeparator="."
                      decimalSeparator=","
                      alloweddecimalseparator={[".", ",", ";"]}
                      placeholder="R$ 00,00"
                    />
                  </div>
                  <div>
                    <p className="m-0 fw-semibold fs-4">
                      Qual é o dia de recebimento?
                    </p>
                    <input
                      className="w-100 rounded-4"
                      type="date"
                      placeholder="Dia de recebimento..."
                    />
                  </div>
                  <div className="d-flex flex-column justify-content-center gap-2">
                    <p className="m-0 fw-semibold fs-4">
                      Quais são as sua despesas mensais?
                    </p>
                    <div className="input-usuario d-flex gap-3">
                    <div className="input-valor-despesa d-flex flex-column align-items-start w-50">
                      <p className="m-0 fw-semibold fs-4">Valor</p>
                      <NumericFormat
                        value={despesas}
                        onValueChange={(values) =>
                          setDespesas(values.floatValue)
                        }
                        className="w-100 rounded-4"
                        allowLeadingZeros={false} //permite zero antes do numero
                        prefix="R$"
                        decimalScale={2} //casas decimais
                        fixedDecimalScale={true}
                        allowNegative={false}
                        thousandSeparator="."
                        decimalSeparator=","
                        alloweddecimalseparator={[".", ",", ";"]}
                        placeholder="R$ 00,00"
                      />
                    </div>  
                    <div className="d-flex flex-column align-items-start">
                      <p className="m-0 fw-semibold fs-4">Categoria</p>
                      <div>
                        <button
                          className="rounded-4 p-2 border-0 button-selecionar-categoria"
                          type="button"
                          onClick={() => setSelecionado(!selecionado)}
                        >
                          Selecionar categoria
                        </button>
                        <div
                          className="dropDown-selecionado"
                          style={{
                            display: `${selecionado ? "block" : "none"}`,
                          }}
                        >
                          <div className="scroll d-flex flex-column gap-2">
                            <div className="categoria d-flex flex-row">
                              <div className="icone">
                                <i className="bi bi-cup-hot-fill me-1"></i>
                              </div>
                              <button className="rounded-4 pe-1 ps-1" type="button">
                                Alimentação
                              </button>
                            </div>
                            <div className="categoria d-flex flex-row">
                              <div className="icone">
                                <i className="bi bi-cart-fill me-1"></i>
                              </div>
                              <button className="rounded-4 pe-1 ps-1" type="button">
                                Compras
                              </button>
                            </div>
                            <div className="categoria d-flex flex-row">
                              <div className="icone">
                                <i className="bi bi-heart-pulse-fill me-1"></i>
                              </div>
                              <button className="rounded-4 pe-1 ps-1" type="button">
                                Saúde
                              </button>
                            </div>
                            <div className="categoria d-flex flex-row">
                              <div className="icone">
                                <i className="bi bi-bus-front-fill me-1"></i>
                              </div>
                              <button className="rounded-4 pe-1 ps-1" type="button">
                                Transporte
                              </button>
                            </div>
                            <div className="categoria d-flex flex-row">
                              <div className="icone">
                                <i className="bi bi-cash-coin me-1"></i>
                              </div>
                              <button className="rounded-4 pe-1 ps-1" type="button">
                                Impostos e taxas
                              </button>
                            </div>
                            <div className="categoria d-flex flex-row">
                              <div className="icone">
                                <i className="bi bi-clipboard2-check-fill me-1"></i>
                              </div>
                              <button className="rounded-4 pe-1 ps-1" type="button">
                                Serviços/assinaturas
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    </div>
                    
                    
                  </div>
                </form>
              </div>
            </div>

            <div className="modal-footer d-flex flex-row flex-nowrap justify-content-center w-100 gap-2 mt-3 mb-3 p-3">
              <button type="button" className="button-modal p-2 rounded-4 w-50">
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
