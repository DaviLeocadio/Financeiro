'use client';
import { useState } from 'react';
import Link from 'next/link';
import './login.css';
import axios from 'axios';
const API_URL = 'http://localhost:8080';
import Swal from "sweetalert2";

export default function Login() {
  const [nome, setNome] = useState();
  const [nomeS, setNomeS] = useState('');
  const [senha, setSenha] = useState();
  const [senhaS, setSenhaS] = useState('');



  async function login(nomeLogin, senhaLogin) {
    if (nomeS == "" || senhaS == '') {
      Swal.fire({
        title: "Erro!",
        text: `Preencha todos os campos`,
        icon: "error",
        confirmButtonText: "OK",
      });
      localStorage.setItem('token', JSON.stringify());
      return [];
    }

    nomeLogin = nomeS;
    senhaLogin = senhaS;
    try {
      const response = await axios.post(`${API_URL}/login`, {
        nome: nomeLogin,
        email: nomeLogin,
        senha: senhaLogin,
      });

      if (response.data['senha'] == 'null' || response.data['nome'] == 'null' || response.data['email'] == 'null') {
        console.log(`Senha ou nome incorretos`);
        setSenhaS('');
        Swal.fire({
          title: "Erro!",
          text: `Senha ou nome incorretos`,
          icon: "error",
          confirmButtonText: "OK",
        });
        localStorage.setItem('token', JSON.stringify());
        return [];
      }


      localStorage.setItem('token', JSON.stringify(response.data['token']));
      localStorage.setItem('nome', ([response.data['nome']]));
      localStorage.setItem('email', ([response.data['email']]));
      localStorage.setItem('cpf', ([response.data['cpf']]));
      localStorage.setItem('data_nasc', ([response.data['data_nasc']]));
      localStorage.setItem('id', JSON.stringify(response.data['id']));
    

      if (response.data) {
        window.location.href = '/usuario';
      }
      return response.data;
    } catch {
      console.log(`Erro ao fazer login: `, error.mesage);
      return [];
    }
  }


  return (
    <>
      <div className="container login my-5 w-75 p-4 rounded-4 d-flex">
        <div className="col-md-5 col-12 ms-md-3">
          <div className="row align-items-center w-100 justify-content-center d-grid">
            <h1 className="fs-2 mt-1 fw-bold">Entre na conta</h1>
          </div>
          <div className="row mt-3">
            <p className="fw-bold">Email</p>
          </div>
          <div className="row">
            <input
              type="text"
              className="input-infos rounded-4"
              placeholder='user@gmail.com'
              value={nome}
              onChange={(nome) => {
                setNomeS(nome.target.value);
              }}
            />
          </div>
          <div className="row mt-4">
            <p className="fw-bold">Senha</p>
          </div>
          <div className="row">
            <input type="password" className="input-infos rounded-4" value={senha}
              onChange={(senha) => {
                setSenhaS(senha.target.value);
              }} />
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
          <div className="row d-grid mt-md-2 mt-0 align-items-center justify-content-center">
            <p>ou</p>
          </div>
          <div className="row">
            <Link href="/cadastro" className="w-100 p-0">
              <button
                type="button"
                className="button-cadastro rounded-4 border-none w-100"
              >
                Criar conta
              </button>
            </Link>

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
