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
            <div className="modal-content">
              {/* Top Cover */}
              <div className="modal-top-cover bg-primary text-center position-relative">
                <figure className="position-absolute right-0 bottom-0 left-0 m-0">
                  <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1920 100.1"
                  >
                    <path
                      fill="#fff"
                      d="M0,0c0,0,934.4,93.4,1920,0v100.1H0L0,0z"
                    />
                  </svg>
                </figure>
              </div>

              {/* Avatar/Logo */}
              <div className="modal-top-cover-avatar text-center">
                <img
                  className="avatar avatar-lg avatar-circle avatar-border-lg shadow-soft"
                  src="/assets/svg/brands/front.svg"
                  alt="Logo"
                />
              </div>

              {/* Corpo */}
              <div className="modal-body d-flex flex-column gap-3 justify-content-center text-white w-75">
                <h2>Vamos começar o seu planejamento</h2>
                <div className="d-flex flex-column gap-3 justify-content-center">
                  <form action="" className="d-flex flex-column gap-3  w-75">
                    <div>
                    <p className="m-0">Qual é o seu salário atual?</p>
                    <input
                    className="w-100"
                      type="number"
                      placeholder="Insira o valor do seu salário..."
                    />
                    </div>
                    <div>
                    <p className="m-0">Qual é o dia de recebimento?</p>
                    <input className="w-100" type="date" placeholder="Dia de recebimento..." />
                    </div>
                    
                    <p className="m-0">Quais são as sua despesas mensais?</p>
                    <div className="d-flex flex-row justify-content-center gap-3">
                      <div className="d-flex flex-column align-items-start">
                        <p className="m-0">Valor</p>
                        <input type="number" />
                      </div>
                      <div className="d-flex flex-column align-items-start">
                         <p className="m-0">Categoria</p>
                      <div>
                        <button
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

              {/* Rodapé */}
              <div className="modal-footer justify-content-center">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Fechar
                </button>
                <button type="button" className="btn btn-primary">
                  Salvar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
