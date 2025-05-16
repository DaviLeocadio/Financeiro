'use client';
import React from 'react';
import Link from 'next/link';

export default function Header() {
  return (
    <header
      className="py-4"
      style={{
        borderBottomLeftRadius: '3rem',
        borderBottomRightRadius: '3rem',
        background: '#071954',
      }}
    >
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center text-center text-md-start">
        {/* Logo e Navegação */}
        <nav className="d-flex flex-column flex-md-row align-items-center gap-3 mb-3 mb-md-0">
          <Link
            href="#sobre-nos"
            className="text-white fw-bold text-uppercase small text-decoration-none"
          >
            SOBRE NÓS
          </Link>
          <Link
            href="#contato"
            className="text-white fw-bold text-uppercase small text-decoration-none"
          >
            CONTATO
          </Link>
          <Link
            href="#blog"
            className="text-white fw-bold text-uppercase small text-decoration-none"
          >
            BLOG
          </Link>
        </nav>

        {/* Botões */}
        <div className="d-flex gap-2 justify-content-center">
          <Link
            href="/login"
            className="btn btn-light fw-semibold px-4 py-2 rounded-pill"
            style={{ color: '#071954' }}
          >
            Login
          </Link>
          <Link
            href="/cadastro"
            className="btn btn-outline-light fw-semibold px-4 py-2 rounded-pill text-white"
          >
            Entrar
          </Link>
        </div>
      </div>
    </header>
  );
}
