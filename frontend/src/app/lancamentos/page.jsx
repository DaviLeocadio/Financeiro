"use client";
import "./lancamento.css";
import axios from "axios";
import { useEffect, useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import NavUsuario from "@/components/nav-usuario/nav-usuario";
import Swal from "sweetalert2";

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
  const [total, setTotal] = useState();
  const [despesaUser, setDespesaUser] = useState(false);


  useEffect(() => {
    setNome(localStorage.getItem("nome"));
    if (!localStorage.getItem("token") || !localStorage.getItem("nome")) {
      window.location.href = "/not-auth";
      return;
    }
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(`${API_URL}/despesas`);
        const todasDespesas = res.data?.despesa || [];

        if (todasDespesas.length === 0) {
          console.log("Nenhuma despesa cadastrada.");
          setDespesa([]);
          return;
        }

        const userId = parseInt(localStorage.getItem("id"));
        const despesasDoUsuario = todasDespesas.filter(
          (d) => parseInt(d.id_user) === userId
        );

        if (despesasDoUsuario.length === 0) {
          console.log("Usuário não possui despesas cadastradas.");
          setDespesa([]);
          return;
        }

        setDespesaUser(true);
        setDespesa(despesasDoUsuario);
        setNomeUser(localStorage.getItem("nome"));

        const totalGasto = despesasDoUsuario.reduce(
          (acc, curr) => acc + parseFloat(curr.valor),
          0
        );

        setTotal(totalGasto);
        localStorage.setItem("totalGasto", totalGasto);
      } catch (err) {
        console.error("Erro ao buscar despesas: ", err);
      }
    })();
  }, []);


  async function CadastrarDespesa() {
    try {
      const response = await axios.post(`${API_URL}/despesas`, {
        categoria: categoria,
        descricao: descricao,
        valor: valor,
        data_pag: data_pag,
        id_user: localStorage.getItem("id"),
      });

      return response.data;
    } catch (err) {
      console.error("Erro ao enviar despesa: ", err);
      return [];
    }
  }

  async function DeletarDespesa(id_despesa) {
    try {
      const response = await axios.delete(`${API_URL}/despesas/${id_despesa}`);
      console.log(response);
      Swal.fire({
        title: "Despesa Deletada!",
        icon: "success",
        confirmButtonText: "OK",
      });
      setTimeout(() => {
        window.location.reload(false);
      }, 2000);
      return response.data;
    } catch (err) {
      console.log(id_despesa);
      console.error("Erro ao enviar deletar despesa", err);
      return [];
    }
  }

  return (
    <div className="container-fluid mt-4">
      <div className="row min-vh-100">
        {/* Barra lateral */}
        <NavUsuario></NavUsuario>
        {/* Conteúdo principal */}
        <div className="col-12 col-lg-8 ms-5 p-4 bg-light rounded-4">
          <div className="d-flex gap-3 justify-content-end align-items-center flex-wrap">
              <div className="div-usuario d-flex align-items-center gap-2 pe-3">
                <p className="m-0 fw-700">{nome}</p>
                <i className="bi bi-person-circle"></i>
    </div>
          </div>
          <div className="d-flex mt-4 flex-column flex-md-row justify-content-between align-items-start align-items-md-center gap-3 mb-4">
            <h4 className="fw-bold m-0">Lançamentos</h4>
            <div className="d-flex align-items-center gap-3">
              <button
                className="btn text-white"
                style={{ backgroundColor: "#ffcc00" }}
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
                    <label className="form-label text-white">
                      Valor por mês
                    </label>
                    <input
                      type="text"
                      className="form-control custom-input"
                      value={valor}
                      onChange={(e) => setValor(e.target.value)}
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
                <div className="d-flex justify-content-between">
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

          <div className="bg-white rounded shadow-sm p-3">
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
                {despesaUser ? (despesa.map((despesa, index) => {
                  return (
                    <thead key={index} className="gap-5">
                      <tr>
                        <th>{despesa.data_pag}</th>
                        <th>{despesa.descricao}</th>
                        <th>{despesa.categoria}</th>
                        <th>R${despesa.valor}</th>

                        <th>
                          <button
                            onClick={() => DeletarDespesa(despesa.id_despesas)}
                            className="bg-light border-0"
                          >
                            <i className="bi bi-trash3-fill mt-0"></i>
                          </button>
                        </th>
                      </tr>
                    </thead>
                  );
                })) : (
                  ''
                )}
              </table>
            </div>
            <div className="d-flex justify-content-between align-items-center mt-3">
              <div
                className="text-white rounded px-3 py-2 fw-bold"
                style={{ backgroundColor: "#ffcc00" }}
              >
                Total de gasto: R$ {total ? total.toFixed(2) : "0.00"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
