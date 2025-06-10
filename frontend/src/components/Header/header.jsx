'use client';
import './header.css';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Header() {
  const [logado, setLogado] = useState(null);
  useEffect(() => {
    try {
      const token = localStorage.getItem('token');
      if (token == 'undefined' || token == null || token == '') {
        return setLogado(false);
      } else {
        return setLogado(true);
      }
    } catch (err) {
      console.error('Usuário sem acesso', err);
      return [];
    }
  }, []);
  return (
    <header className="py-2 header">
      <div className="container">
        <nav className="navbar navbar-expand-md navbar-dark">
          {/* Logo */}
          <Link href="/" className="navbar-brand d-flex align-items-center">
            <Image
              src="/logoHeader.png"
              alt="Logo"
              width={110} // aumentou o tamanho da imagem
              height={110}
              className="me-2"
            />
          </Link>

          {/* Botão do hamburger */}
          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#main-navbar"
            aria-controls="main-navbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Menu colapsável */}
          <div className="collapse navbar-collapse justify-content-between" id="main-navbar">
            {/* Links de navegação */}
            <ul className="navbar-nav mb-2 mb-md-0 gap-md-3 text-center">
              <li className="nav-item">
                <Link href="/" className="nav-link text-uppercase fw-bold small">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link href="./funcionamento" className="nav-link text-uppercase fw-bold small">
                  Funcionamento
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/sobrenos" className="nav-link text-uppercase fw-bold small">
                  Sobre nós
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/blog" className="nav-link text-uppercase fw-bold small">
                  Blog
                </Link>
              </li>



            </ul>

            {/* Botões */}
            {logado === true ? (
              <li className="nav-item navItemConta text-decoration-none text-uppercase mt-3 d-flex align-items-center text-light fw-bold ">
                <Link href="/usuario" className="nav-link text-uppercase d-flex fw-bold small">
                  <p>Minha Conta</p>
                  <i className="bi bi-person-fill ms-2 text-uppercase"></i>
                </Link>
              </li>

            ) : logado === false ? (
              <div className="d-flex gap-2 justify-content-center mt-3 mt-md-0">
                <Link
                  href="/login"
                  className="btn btn-light fw-semibold px-4 py-2 rounded-pill btnLogin"
                >
                  Login
                </Link>
                <Link
                  href="/cadastro"
                  className="btn fw-semibold px-4 py-2 rounded-pill text-white btnCadastro"
                >
                  Cadastro
                </Link>

              </div>
            ) : (
              ''
            )}

          </div>
        </nav>
      </div>
    </header>
  );
}
