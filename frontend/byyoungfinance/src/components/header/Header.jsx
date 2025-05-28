'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header
      style={{
        borderBottomLeftRadius: '3rem',
        borderBottomRightRadius: '3rem',
        background: '#071954',
      }}
      className="py-2" // diminuiu a altura do header
    >
      <div className="container">
        <nav className="navbar navbar-expand-md navbar-dark">
          {/* Logo */}
          <Link href="/" className="navbar-brand d-flex align-items-center">
            <Image
              src="/Logo.svg"
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
                <Link href="#sobre-nos" className="nav-link text-uppercase fw-bold small">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link href="#contato" className="nav-link text-uppercase fw-bold small">
                  Funcionamento
                </Link>
              </li>
              <li className="nav-item">
                <Link href="#blog" className="nav-link text-uppercase fw-bold small">
                  Sobre nós
                </Link>
              </li>
              <li className="nav-item">
                <Link href="#perfil" className="nav-link text-uppercase fw-bold small">
                  Meu perfil
                </Link>
              </li>
            </ul>

            {/* Botões */}
            <div className="d-flex gap-2 justify-content-center mt-3 mt-md-0">
              <Link
                href="/login"
                className="btn btn-light fw-semibold px-4 py-2 rounded-pill"
                style={{ color: '#071954' }}
              >
                Login
              </Link>
              <Link
                href="/cadastro"
                className="btn fw-semibold px-4 py-2 rounded-pill text-white border border-white"
                style={{ backgroundColor: 'transparent' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'white';
                  e.currentTarget.style.color = '#071954';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = '#071954';
                }}
              >
                Cadastro
              </Link>

            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
