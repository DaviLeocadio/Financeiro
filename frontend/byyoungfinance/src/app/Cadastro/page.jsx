'use client';
import axios from 'axios';
import { useState } from 'react';
import Link from 'next/link';
import './cadastro.css';
import Swal from "sweetalert2";

const API_URL = 'http://localhost:8080';

export default function Cadastro() {

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [cpf, setCpf] = useState('');
  const [data_nasc, setData_nasc] = useState('');
  const [cadastrado, setCadastrado] = useState(null);

  async function CadastrarUsuario() {
    if (!nome || !email || !senha || !cpf || !data_nasc) {
    
      Swal.fire({
        title: "Erro!",
        text: `Não foi possível criar sua conta`,
        icon: "error",
        confirmButtonText: "OK",
      });
      return;
    }

    try {
      await axios.post(`${API_URL}/cadastro`, {
        nome,
        email,
        senha,
        cpf,
        data_nasc,
      });

      setNome('');
      setEmail('');
      setSenha('');
      setCpf('');
      setData_nasc('');
      setCadastrado(true);

      Swal.fire({
        title: "Parabéns!",
        text: `Sua conta foi criada com sucesso`,
        icon: "success",
        confirmButtonText: "OK",
      });

      // Redireciona após 2s
      setTimeout(() => {
        window.location.href = '/login';
      }, 3000);
    } catch (err) {
      console.error('Erro ao cadastrar:', err);
      setCadastrado(false);
    }
  }

  return (
    <>
      <div className="container-fluid d-flex align-items-center justify-content-center p-0 mt-md-0 mt-5">
        <div className="row align-items-stretch justify-content-center bg-white p-3 p-md-4 rounded-5 m-2 m-md-4 w-75">
          <div className="forms-dados col-12 col-md-6 p-3 p-md-4">
            <div className="d-flex align-items-center justify-content-center">
              <h3 className="fw-bold" style={{ color: '#000' }}>Crie sua conta</h3>
            </div>

            {/* Inputs */}
            <div className="d-flex flex-column mb-3">
              <label className="form-label fw-bold">Nome</label>
              <input
                type="text"
                className="form-control rounded-4"
                placeholder="Digite seu nome completo"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label fw-bold">Email</label>
              <input
                type="email"
                className="form-control rounded-4"
                placeholder="seuemail@exemplo.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label fw-bold">Senha</label>
              <input
                type="password"
                className="form-control rounded-4"
                placeholder="Criar senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label fw-bold">CPF</label>
              <input
                type="text"
                className="form-control rounded-4"
                placeholder="000.000.000-00"
                value={cpf}
                onChange={(e) => setCpf(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label fw-bold">Data de Nascimento</label>
              <input
                type="date"
                className="form-control rounded-4"
                value={data_nasc}
                onChange={(e) => setData_nasc(e.target.value)}
              />
            </div>


            <div className="d-flex flex-column align-items-center gap-3 mt-4">
              <button
                className="button-cadastrar text-white w-100 p-3 rounded-4 align-items-center d-flex justify-content-center"
                onClick={CadastrarUsuario}
              >
                <p className="m-0">Criar Conta</p>
              </button>

              <p className="m-0">ou</p>

              <Link href="/login" className="w-100 text-decoration-none">
                <button className="button-login w-100 rounded-4 d-flex justify-content-center align-items-center">
                  Fazer Login
                </button>
              </Link>
            </div>
          </div>

          <div className="col-md-6 d-none d-md-flex align-items-center justify-content-center p-3">
            <img
              className="img-fluid h-100 rounded-4"
              src="/cadastro-img.png"
              alt="Imagem ilustrativa do cadastro"
            />
          </div>
        </div>
      </div>
    </>
  );
}
