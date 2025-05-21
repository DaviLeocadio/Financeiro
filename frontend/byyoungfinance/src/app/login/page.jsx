'use client';
import { useState } from 'react';
import './login.css';
import axios from 'axios';
const API_URL = 'http://localhost:8080';

export default function Login() {
  const [user, setUser] = useState();

  async function login() {
    try {
      const response = await axios.get(`${API_URL}/login`);
      console.log(response.data);
      return response.data;
    } catch {
      console.log(`Erro ao listar jogos: `, error.mesage);
      return [];
    }
  }

  return (
    <>
      <div className="container my-5 w-75 p-4 rounded-4 d-flex">
        <div className="col-md-5 col-12">
          <div className="row align-items-center w-100 justify-content-center d-grid">
            <h1 className="fs-2 fw-bold">Entre na sua conta</h1>
          </div>
          <div className="row mt-3">
            <p className="fw-bold">Nome ou Email</p>
          </div>
          <div className="row">
            <input
              type="text"
              className="input-infos rounded-4"
              value={user}
              onChange={(user) => user.target.value}
            />
          </div>
          <div className="row mt-4">
            <p className="fw-bold">Senha</p>
          </div>
          <div className="row">
            <input type="password" className="input-infos rounded-4" />
          </div>
          <div className="row mt-5">
            <button
              type="button"
              className="button-login rounded-4"
              onClick={login}
            >
              Fazer login
            </button>
          </div>
          <div className="row d-grid mt-2 align-items-center justify-content-center">
            <p>ou</p>
          </div>
          <div className="row">
            <button
              type="button"
              className="button-cadastro rounded-4 border-none"
            >
              Criar conta
            </button>
          </div>
        </div>

        <div className="col-md-7 col-7 align-items-center justify-content-center d-none d-md-flex">
          <img
            src="/img-login.png"
            alt=""
            className="img-login img-fluid ms-5"
          />
        </div>
      </div>
    </>
  );
}
