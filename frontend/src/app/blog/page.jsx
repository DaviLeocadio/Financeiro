"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import "./blog.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import json from "../../json/blog";
import Script from 'next/script';

export default function BlogBanner() {
  const [query, setQuery] = useState('');

  const artigoPrincipal = json.find(a => a.tipo === 'principal');
  const artigosLaterais = json.filter(a => a.tipo === 'mini');

  const artigosFiltrados = json.filter(artigo =>
    artigo.titulo.toLowerCase().includes(query.toLowerCase()) ||
    artigo.descricao.toLowerCase().includes(query.toLowerCase())
  );


  return (
    <>

    <Script
            src="https://code.jquery.com/jquery-3.6.0.min.js"
            strategy="beforeInteractive"
          />
    
          {/* Importando a biblioteca que contém HSGoTo */}
          <Script
            src="https://unpkg.com/hs-go-to/dist/hs-go-to.min.js"
            strategy="beforeInteractive"
          />
    
          {/* Inicializando o HSGoTo */}
          <Script id="hs-go-to-init" strategy="afterInteractive">
            {`
              $(document).ready(function () {
                $('.js-go-to').each(function () {
                  var goTo = new HSGoTo($(this)).init();
                });
              });
            `}
          </Script>
    
          {/* Elemento de exemplo com classe js-go-to */}
          <button
            className="js-go-to"
            data-hs-go-to-options='{"offsetTop": 700, "position": {"init": "bottom", "show": "bottom"}, "type": "fixed", "compensationSelector": "#header", "showEffect": "slideInUp", "hideEffect": "slideOutDown"}'
            style={{
              position: 'fixed',
              bottom: '20px',
              right: '20px',
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              backgroundColor: '#bec3cf',
              color: '#071954',
              fontSize: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              zIndex: 9999,
              border: 'none',
            }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            ↑
          </button>
    
      <section className="banner">
        <div className="banner-content">
          <h1>
            BEM VINDO AO <span className="highlight">BLOG</span> DA <span className="highlight">YOUNGFINANCE</span>
          </h1>
          <p>
            Descubra conteúdos exclusivos sobre finanças pessoais, investimentos e organização financeira.
            Aprenda a transformar sua relação com o dinheiro e conquistar seus objetivos com informação de qualidade.
          </p>

          <form className="search-bar" onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              placeholder="pesquisar"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button type="submit">
              <i className="bi bi-search"></i>
            </button>
          </form>
        </div>

        <img src="/seta.png" alt="seta" className="banner-icon seta" />
        <img src="/cursor.png" alt="cursor" className="banner-icon cursor" />
      </section>

      {query ? (
        <section className="artigos">
          <div className="secao">
            <h2><span className="destaque">RESULTADOS</span> DA PESQUISA</h2>
            <hr />
            <div className="artigos-destaque">
              {artigosFiltrados.length > 0 ? (
                artigosFiltrados.map(artigo => (
                  <Link key={artigo.id} href={`/artigos/${artigo.id}`} className="card-artigo">
                    <img src={artigo.imagem} alt={artigo.titulo} />
                    <h4>{artigo.titulo}</h4>
                    <p className="data">
                      <i className="bi bi-calendar"></i> {artigo.data}
                    </p>
                    <span className="btn-leia-mais">Leia Mais</span>
                  </Link>
                ))
              ) : (
                <p>Nenhum artigo encontrado.</p>
              )}
            </div>
          </div>
        </section>
      ) : (
        <>
          <section className="artigos">
            <div className="secao">
              <h2><span className="destaque">ARTIGOS</span> MAIS LIDOS</h2>
              <hr />

              <div className="mais-lidos">
                <Link href={`/artigos/${artigoPrincipal.id}`} className="artigo-principal">
                
                  <img src={artigoPrincipal.imagem} alt={artigoPrincipal.titulo} className='img-fluid' />
                  <h3>{artigoPrincipal.titulo}</h3>
                  <p className="data">
                    <i className="bi bi-calendar"></i> {artigoPrincipal.data}
                  </p>
                  <p>{artigoPrincipal.descricao}</p>
                  <span className="btn-leia-mais">Leia Mais</span>
           
                  
                </Link>

                <div className="artigos-laterais">
                  <div className="container-fluid">
                  {artigosLaterais.map(artigo => (
                    <div className="row mb-5" key={artigo.id}>
                    <Link  href={`/artigos/${artigo.id}`} className="artigo-mini">
                    <div className="col-6">
                      <img src={artigo.imagem} alt={artigo.titulo} className='img-fluid' />
                    </div>
                      
                    <div className="col-6">
                      <h4>{artigo.titulo}</h4>
                        <p className="data">
                          <i className="bi bi-calendar"></i> {artigo.data}
                        </p>
                        <span className="btn-leia-mais">Leia Mais</span>
             
                    </div>
                        
                    </Link>
                    </div>
                  ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="secao">
              <h2><span className="destaque">ARTIGOS</span> EM DESTAQUE</h2>
              <hr />
            </div>
          </section>

          <div className="artigos-destaque">
            {json.filter(artigo => artigo.id >= 5).map(artigo => (
              <Link key={artigo.id} href={`/artigos/${artigo.id}`} className="card-artigo">
                <img src={artigo.imagem} alt={artigo.titulo} />
                <h4>{artigo.titulo}</h4>
                <p className="data">
                  <i className="bi bi-calendar"></i> {artigo.data}
                </p>
                <span className="btn-leia-mais">Leia Mais</span>
              </Link>
            ))}
          </div>
        </>
      )}

      <div className="bannerblog">
        <img src="/bannerblog.png" alt="" style={{ width: "90%" }} />
      </div>
    </>
  );
}
