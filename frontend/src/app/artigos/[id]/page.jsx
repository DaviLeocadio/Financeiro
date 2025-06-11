"use client";

import { useParams } from "next/navigation";
import json from "../../../json/blog";
import "./artigos.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Script from "next/script";

export default function ArtigoPage() {
  const { id } = useParams();
  const artigo = json.find((a) => a.id === Number(id));

  if (!artigo) {
    return <p>Artigo não encontrado.</p>;
  }

  return (
    <div className="artigo-detalhe">
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
          position: "fixed",
          bottom: "20px",
          right: "20px",
          width: "50px",
          height: "50px",
          borderRadius: "50%",
          backgroundColor: "#bec3cf",
          color: "#071954",
          fontSize: "20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          zIndex: 9999,
          border: "none",
        }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        ↑
      </button>
      <h1>{artigo.titulo}</h1>
      <h3>{artigo.descricao}</h3>
      <div className="detalhes">
        <h4>
          <i className="bi bi-calendar"></i> {artigo.data}
        </h4>
        <h4>| 10 minutos de leitura</h4>
      </div>
      <div className="imagem">
        <img src={artigo.imagem} alt={artigo.titulo} />
      </div>
      <div className="compartilhe">
        Compartilhe:
        <i className="bi bi-instagram"></i>
        <i className="bi bi-whatsapp"></i>
        <i className="bi bi-tiktok"></i>
        <i className="bi bi-twitter"></i>
        <i className="bi bi-linkedin"></i>
      </div>
      <div className="descricao">
        {artigo.descricaomaior.map((secao, index) => {
          if (secao.tipo === "paragrafo") {
            return <p key={index}>{secao.conteudo}</p>;
          }
          if (secao.tipo === "subtitulo") {
            return <h2 key={index}>{secao.conteudo}</h2>;
          }
          if (secao.tipo === "lista") {
            return (
              <ul key={index}>
                {secao.conteudo.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            );
          }
        })}
      </div>
    </div>
  );
}
