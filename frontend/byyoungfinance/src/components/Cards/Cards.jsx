"use client";

import { useState } from "react";
import Image from "next/image";

export default function Principios() {
  const principios = [
    {
      titulo: "Nossa Missão",
      descricao:
        "Empoderar pessoas para que tomem decisões financeiras conscientes e equilibradas, com ferramentas simples e acessíveis.",
      fundo: "#dce3f2",
      imagem: "/FotoCardUm.svg", 
      corTexto: "#333",
    },
    {
      titulo: "Nossa Visão",
      descricao:
        "Ser referência nacional em educação financeira digital e promover autonomia para milhões de pessoas cuidarem do seu dinheiro com clareza.",
      fundo: "#dce3f2",
      imagem: "/FotoCardDois.svg",
      corTexto: "#333",
    },
    {
      titulo: "Nossos Valores",
      descricao:
        "Valorizamos a transparência e a ética em todas as nossas ações, buscando sempre oferecer uma experiência com facilidade e acessibilidade para todos os perfis de usuários. Acreditamos na importância da empatia e do acolhimento, respeitando a jornada única de cada pessoa.",
      fundo: "#dce3f2",
      imagem: "/FotoCardTres.svg",
      corTexto: "#333",
    },
  ];

  const [virados, setVirados] = useState(Array(principios.length).fill(false));

  const virarCard = (index) => {
    const novo = [...virados];
    novo[index] = !novo[index];
    setVirados(novo);
  };

  return (
    <div className="container my-5">
      {/* TÍTULO */}
      <div className="text-center mb-4">
        <h2 className="fw-bold display-5" style={{ color: "#92b1f4" }}>
          O que nos move
        </h2>
        <p className="text-muted fs-6">
          Nossa missão, visão e valores são mais do que palavras — são o coração da nossa jornada
        </p>
      </div>

      {/* FLIP CARDS */}
      <div className="row g-4">
        {principios.map((principio, idx) => (
          <div key={idx} className="col-12 col-md-4">
            <div className="flip-card" onClick={() => virarCard(idx)}>
              <div className={`flip-card-inner ${virados[idx] ? "is-flipped" : ""}`}>
                {/* Frente */}
                <div
                  className="flip-card-front"
                  style={{ backgroundColor: principio.fundo }}
                >
                  <Image
                   src={principio.imagem}
                   alt={principio.titulo}
                   fill
                   style={{
                     objectFit: "cover",
                     borderRadius: "20px",
                   }}
                 />
                  
                </div>

                {/* Verso */}
                <div
                  className="flip-card-back"
                  style={{
                    backgroundColor: principio.fundo,
                    color: principio.corTexto,
                  }}
                >
                  <h4 className="fw-bold mb-2">{principio.titulo}</h4>
                  <p className="fs-6" style={{ fontSize: "0.95rem" }}>
                    {principio.descricao}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Estilos de animação */}
      <style jsx>{`
        .flip-card {
          width: 100%;
          height: 280px;
          perspective: 1000px;
          cursor: pointer;
        }

        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transition: transform 0.6s;
          transform-style: preserve-3d;
        }

        .flip-card-front,
        .flip-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          border-radius: 20px;
          padding: 1rem;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        }

        .flip-card-back {
          transform: rotateY(180deg);
        }

        .flip-card-inner.is-flipped {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  );
}
