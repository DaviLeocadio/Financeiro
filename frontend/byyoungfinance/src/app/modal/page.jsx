"use client";
import { useState, useEffect } from "react";


import "@/app/modal/modal.css";

export default function Modal() {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  const [selecionado, setSelecionado] = useState(false);

  return (
    <div className="container bg-info h-75 w-50 py-5">
      <p>olal</p>
      <div className="bg-primary p-3">
        {/* Botão para abrir o modal */}
        <button
          type="button"
          className="btn btn-light"
          data-bs-toggle="modal"
          data-bs-target="#exampleModalTopCover"
        >
          Top cover modal
        </button>

        {/* Modal */}
        <div
          className="modal fade text-white"
          id="exampleModalTopCover"
          tabIndex="-1"
          aria-labelledby="exampleModalTopCoverTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content d-flex justify-content-center align-items-center">
              {/* Top Cover */}
              <div className="modal-top-cover text-center position-relative w-100">
                <div className="modal-cover">
                  <img height={30} src="/modal-cover.png" alt="" />
                </div>
              </div>

              <div className="modal-top-cover-logo text-center">
                <img 
                  src="/Logo.png"
                  alt="Logo"
                />
              </div>

              {/* Corpo */}
              <div className="modal-body d-flex flex-column gap-3 justify-content-center text-white w-75">
                <h2 className="fw-semibold">Vamos começar o seu planejamento!</h2>
                <div className="d-flex flex-column gap-3 justify-content-center">
                  <form action="" className="d-flex flex-column gap-3  w-100">
                    <div className="entrada-input">
                     <div className="label-nome"><p className="m-0 fw-semibold fs-4">Qual é o seu salário atual?</p></div> 
                      <input
                        className="w-100 rounded-4"
                        type="number"
                        placeholder="Insira o valor do seu salário..."
                      />
                    </div>
                    <div>
                      <p className="m-0 fw-semibold fs-4">Qual é o dia de recebimento?</p>
                      <input className="w-100 rounded-4" type="date" placeholder="Dia de recebimento..." />
                    </div>

                    <p className="m-0 fw-semibold fs-4">Quais são as sua despesas mensais?</p>
                    <div className="d-flex flex-row justify-content-center gap-3 ">
                      <div className="input-valor-despesa d-flex flex-column align-items-start w-50">
                        <p className="m-0 fw-semibold fs-4">Valor</p>
                        <input className="w-100 rounded-4" type="number" placeholder="Valor despesas..." />
                      </div>
                      <div className="d-flex flex-column align-items-start">
                        <p className="m-0 fw-semibold fs-4">Categoria</p>
                        <div>
                          <button
                            className="rounded-4 p-2 border-0"
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
                            <div className="scroll">
                              <div className="categoria">
                                <div className="icone">Alimentação</div>
                              </div>
                              <div className="categoria">
                                <div className="icone">Compras</div>
                              </div>
                              <div className="categoria">
                                <div className="icone">Educação</div>
                              </div>
                              <div className="categoria">
                                <div className="icone">Saúde</div>
                              </div>
                              <div className="categoria">
                                <div className="icone">Transporte</div>
                              </div>
                              <div className="categoria">
                                <div className="icone">Impostos e taxas</div>
                              </div>
                              <div className="categoria">
                                <div className="icone">
                                  Serviços e assinaturas
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

              <div className="modal-footer d-flex flex-row justify-content-center w-100 gap-2">
                 <button type="button" className="button-modal p-2 rounded-4 w-50 fs-4">
                  Salvar
                </button>
                <button
                  type="button"
                  className="button-fechar-modal text-white p-2 rounded-4 w-50 fs-4"
                  data-bs-dismiss="modal"
                >
                  Fechar
                </button>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
