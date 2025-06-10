"use client";

import { useParams } from 'next/navigation';
import json from '../../../json/blog';
import "./artigos.css";
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function ArtigoPage() {
  const { id } = useParams();
  const artigo = json.find(a => a.id === Number(id));

  if (!artigo) {
    return <p>Artigo não encontrado.</p>;
  }

  return (
    <div className="artigo-detalhe">
      <h1>{artigo.titulo}</h1>
      <h3>{artigo.descricao }</h3>
      <div className="detalhes">
    <h4><i className="bi bi-calendar"></i> {artigo.data}</h4>
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
  if (secao.tipo === 'paragrafo') {
    return <p key={index}>{secao.conteudo}</p>;
  }
  if (secao.tipo === 'subtitulo') {
    return <h2 key={index}>{secao.conteudo}</h2>;
  }
  if (secao.tipo === 'lista') {
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
