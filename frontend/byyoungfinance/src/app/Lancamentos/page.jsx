'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './lancamento.css';
import axios from 'axios';

const API_URL = 'http://localhost:8080';

export default function Lancamentos() {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [categoria, setCategoria] = useState('');
  const [descricao, setDescricao] = useState('');
  const [valor, setValor] = useState('');
  const [data_pag, setData_pag] = useState('');
  const [despesa, setDespesa] = useState([]);
  const [nomeUser, setNomeUser] = useState('');
  let count = 0;

  useEffect(() => {
    (async () => {
      const verDespesa = await axios.get(`${API_URL}/despesas`);
      setDespesa(verDespesa.data);
      setNomeUser(localStorage.getItem('nome'));

      return verDespesa.data;
    })();
  }, []);

  async function CadastrarDespesa() {
    try {
      const response = await axios.post(`${API_URL}/despesas`, {
        categoria: categoria,
        descricao: descricao,
        valor: valor,
        data_pag: data_pag,
        id_user: localStorage.getItem('id'),
      });

      return response.data;
    } catch (err) {
      console.error('Erro ao enviar despesa: ', err);
      return [];
    }
  }

  async function DeletarDespesa(id_despesas) {
    try {
      const response = await axios.delete(`${API_URL}/despesas/`, {
        id_despesa: id_despesas
      });
      console.log(id_despesas);
      return response.data;
    } catch (err) {
      console.error('Erro ao enviar deletar despesa', err);
      return [];
    }
  }

  return (
    <div className="container-fluid">
      <div className="row min-vh-100">
        <div
          className="col-12 col-lg-3 nav-usuario text-white p-3"
          style={{ backgroundColor: '#071954', marginTop: '20px' }}
        >
          <div className="text-center mb-4">
            <img
              src="/logo.svg"
              alt="logo By young finance"
              className="img-fluid"
            />
          </div>
          <ul className="nav flex-column gap-2">
            <li>
              <Link href="#">
                <button className="btn btn-primary text-start w-100">
                  <i className="bi bi-speedometer2 me-2"></i> Visão geral
                </button>
              </Link>
            </li>
            <li>
              <Link href="#">
                <button
                  className="btn text-white fw-bold text-start w-100"
                  style={{ backgroundColor: '#ffcc00' }}
                >
                  <i className="bi bi-star-fill me-2"></i> Lançamentos
                </button>
              </Link>
            </li>

            <li>
              <Link href="#">
                <button className="btn btn-primary text-start w-100">
                  <i className="bi bi-bell-fill me-2"></i> Notificações
                </button>
              </Link>
            </li>
            <li>
              <Link href="#">
                <button className="btn btn-primary text-start w-100">
                  <i className="bi bi-receipt-cutoff me-2"></i> Extrato
                </button>
              </Link>
            </li>
            <li>
              <Link href="#">
                <button className="btn btn-primary text-start w-100">
                  <i className="bi bi-graph-up-arrow me-2"></i> Relatórios
                </button>
              </Link>
            </li>
          </ul>
        </div>

        {/* Conteúdo principal */}
        <div
          className="col-12 col-lg-8 ms-5 p-4 bg-light rounded-4"
          style={{ marginTop: '20px' }}
        >
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center gap-3 mb-4">
            <h4 className="fw-bold m-0">Lançamentos</h4>
            <div className="d-flex align-items-center gap-3">
              <button
                className="btn text-white"
                style={{ backgroundColor: '#ffcc00' }}
                onClick={() => setMostrarFormulario(true)}
              >
                + Adicionar
              </button>
              <div className="d-flex align-items-center text-dark">
                <span className="me-2 fw-bold">{nomeUser}</span>
                <i className="bi bi-person-circle fs-4"></i>
              </div>
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
                    <label className="form-label text-white">Data</label>
                    <input
                      type="date"
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
                <div className="mb-4">
                  <label className="form-label text-white">Anexo</label>
                  <input type="file" className="form-control custom-input" />
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
                    style={{ backgroundColor: '#ffcc00', color: 'white' }}
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
                    <th>Data</th>
                    <th>Descrição</th>
                    <th>Tipo</th>
                    <th>Valor</th>
                    <th></th>
                  </tr>
                </thead>
                {despesa.map((despesa, index) => {
                  count++;
                  return (
                    <thead key={index} className="gap-5">
                      <tr>
                        <th>{despesa.data_pag}</th>
                        <th>{despesa.descricao}</th>
                        <th>{despesa.categoria}</th>
                        <th>R${despesa.valor}</th>
                        <th>
                          <button onClick={() => DeletarDespesa({ count })}>
                            <i className="bi bi-trash3-fill mt-0"></i>
                          </button>
                        </th>
                      </tr>
                    </thead>
                  );
                })}
              </table>
            </div>
            <div className="d-flex justify-content-between align-items-center mt-3">
              <a href="#" className="text-primary text-decoration-underline">
                Entenda seu saldo
              </a>
              <div
                className="text-white rounded px-3 py-2 fw-bold"
                style={{ backgroundColor: '#ffcc00' }}
              >
                Saldo: R$0.00
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
