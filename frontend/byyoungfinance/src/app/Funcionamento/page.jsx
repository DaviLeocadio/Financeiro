"use client";

import { useState } from "react";
import Image from "next/image";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from "react-bootstrap";
import emailjs from "emailjs-com";

// Importações Swiper para Depoimentos
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";


export default function Funcionamento() {
  // Objetivos Cards
  const cards = [
    {
      nome: "Empoderar pessoas por meio da educação financeira",
      cargo: "Nosso compromisso central é capacitar cada indivíduo a tomar decisões financeiras.",
      detalhes: "Aqui a gente acredita que dinheiro não precisa ser um bicho de sete cabeças. Empoderamento financeiro é sobre aprender a usar a grana a seu favor — sem pressão, sem tabu e no seu ritmo. Dicas simples e direto ao ponto: como organizar seu rolê com um orçamento, sair do sufoco das dívidas, guardar um dinheirinho no fim do mês e até dar os primeiros passos pra investir de um jeito fácil.",
    },
    {
      nome: "Romper com o tabu que envolve o dinheiro",
      cargo: "Trabalhamos para desconstruir a ideia de que falar sobre finanças é complicado, técnico ou reservado a especialistas...",
      detalhes: "Aqui a gente sabe que dinheiro não precisa ser complicado. É sobre aprender a usar sua grana do jeito que funciona pra você, sem estresse, sem pressão e no seu tempo. A ideia é dar dicas simples pra organizar seus gastos, sair das dívidas, guardar um troco no fim do mês e até começar a investir sem complicação.",
    },
    {
      nome: "Estimular o planejamento e o cuidado com o futuro",
      cargo: "Queremos que nossos usuários enxerguem a organização financeira como uma ferramenta essencial para o seu planejamento financeiro",
      detalhes: "Planejar, definir metas e controlar o orçamento pode parecer difícil, mas a real é que tudo isso te leva pra uma vida financeira mais tranquila. Vem que eu te mostro como dar os primeiros passos de um jeito simples e sem complicação.",
    },
  ];

  const [show, setShow] = useState(false);
  const [cardSelecionado, setCardSelecionado] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = (card) => {
    setCardSelecionado(card);
    setShow(true);
  };

  //Principios
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

  // Depoimentos
  const testimonials = [
    {
      name: "Alexa Rodriguez",
      text: "Organizar meus gastos mensais com essa plataforma incrível mudou minha relação com o dinheiro.",
      img: "PessoaUm.svg",
    },
    {
      name: "Emily Chen",
      text: "Com o sistema de metas e orçamento, consegui sair do vermelho e guardar um valor todo mês. Super intuitivo e direto!",
      img: "PessoaTres.svg",
    },
    {
      name: "James Johnson",
      text: "Ter controle financeiro ficou simples. Eu e minha família passamos a planejar melhor nossos sonhos. Plataforma excelente!",
      img: "PessoaDois.svg",
    },
  ];

  //Formulário FaleConosco
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    mensagem: "",
  });

  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Mensagem enviada:", formData);
    setEnviado(true);
    setFormData({ nome: "", email: "", mensagem: "" });
  };


  return (
    <>
      {/* Banner */}
      <div className="carousel slide" style={{ marginTop: '10px' }}>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="BannerFuncionamento.svg" className="d-block w-100" alt="Banner" />
          </div>
        </div>
      </div>


      {/* Sobre */}
      <section className="container py-5" id="sobre-nos">
        <div className="d-flex align-items-center justify-content-center mb-4">
          <div
            style={{
              width: "8px",
              height: "40px",
              backgroundColor: "#ffcc00",
              borderRadius: "10px",
              marginRight: "10px",
            }}
          ></div>
          <h2 className="fw-bold m-0" style={{ fontSize: "28px", color: "#1e3a8a" }}>
            Controle sua vida financeira com leveza e segurança
          </h2>
        </div>
        <p className="text-muted text-center mx-auto" style={{ maxWidth: '700px' }}>
          Esqueça planilhas complicadas e aplicativos confusos. Nossa plataforma oferece uma experiência moderna, acessível e prática para que você assuma o controle do seu dinheiro com tranquilidade e confiança.
        </p>
      </section>



      {/* Seção Objetivos com modal */}
      <div className="py-5" style={{ backgroundColor: "#dce3f2" }}>
        <div className="container text-center">
          <div className="d-flex align-items-center justify-content-center mb-5">
            <div
              style={{
                width: "8px",
                height: "40px",
                backgroundColor: "#1e3a8a",
                borderRadius: "10px",
                marginRight: "10px",
              }}
            />
            <h2 className="m-0 fw-bold" style={{ fontSize: "28px", color: "#1e3a8a" }}>
              OBJETIVOS DA <span style={{ color: "#000" }}>ByYOUNGFINANCE</span>
            </h2>
          </div>

          <div className="d-flex flex-wrap justify-content-center gap-4">
            {cards.map((card, idx) => (
              <div
                key={idx}
                className="position-relative text-center"
                style={{
                  width: "300px",
                  background: "#fff",
                  borderRadius: "20px",
                  padding: "20px",
                  cursor: "pointer",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  boxShadow: "none",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-10px)";
                  e.currentTarget.style.boxShadow = "0 10px 20px rgba(0,0,0,0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
                onClick={() => handleShow(card)}
              >
                <h5 className="mt-3 mb-1 fw-bold" style={{ color: "#1e3a8a" }}>
                  {card.nome}
                </h5>
                <p style={{ color: "#333", minHeight: "60px" }}>{card.cargo}</p>

                <button
                  className="btn rounded-pill"
                  style={{backgroundColor:"#ffcc00", color:"#fff"}}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleShow(card);
                  }}
                >
                  Veja mais
                </button>
              </div>
            ))}
          </div>
        </div>

        <Modal show={show} onHide={handleClose} centered>
          {cardSelecionado && (
            <>
              <Modal.Header closeButton style={{ backgroundColor: "#92b1f4" }}>
                <Modal.Title className="fw-bold text-dark">{cardSelecionado.nome}</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <p style={{ color: "#333" }}>{cardSelecionado.detalhes}</p>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Fechar
                </Button>
              </Modal.Footer>
            </>
          )}
        </Modal>
      </div>


      {/* Modal */}
      <Modal show={show} onHide={handleClose} centered>
        {cardSelecionado && (
          <>
            <Modal.Header closeButton style={{ backgroundColor: "#92b1f4" }}>
              <Modal.Title className="fw-bold text-dark">
                {cardSelecionado.nome}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body className="text-center">
              <p className="text-dark">{cardSelecionado.detalhes}</p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Fechar
              </Button>
            </Modal.Footer>
          </>
        )}
      </Modal>



      {/* Finance Section */}
      <section className="py-5 bg-white">
        <div className="container d-flex flex-column flex-md-row align-items-center justify-content-between">
          {/* Texto à esquerda */}
          <div className="text-section mb-4 mb-md-0" style={{ maxWidth: "540px" }}>
            <h6 style={{ color: "#ffcc00", fontWeight: "600", letterSpacing: "1px" }}>
              SERVIÇOS EXCLUSIVOS
            </h6>
            <h2 className="fw-bold" style={{ fontSize: "32px", color: "#071954" }}>
              Gerencie suas finanças sem sair de casa
            </h2>
            <p className="text-muted mt-2 mb-4" style={{ fontSize: "1rem" }}>
              Veja como você pode cuidar das suas finanças: fácil de usar, seguro, rápido e no conforto do seu lar.
            </p>

            <ul className="list-unstyled">
              <li className="d-flex align-items-start mb-3">
                <span className="me-2 text-success">✓</span>
                Acompanhar sua conta, fazer transferências e pagamentos de onde estiver
              </li>
              <li className="d-flex align-items-start mb-3">
                <span className="me-2 text-success">✓</span>
                Soluções de planejamento e controle simples das suas finanças
              </li>
              <li className="d-flex align-items-start mb-3">
                <span className="me-2 text-success">✓</span>
                Acesso direto às opções de investimento, de acordo com seu perfil de investidor
              </li>
              <li className="d-flex align-items-start">
                <span className="me-2 text-success">✓</span>
                Acompanhar faturas do cartão de crédito e compras online com facilidade
              </li>

            </ul>
          </div>

          {/* Imagem à direita */}
          <div className="image-section text-center">
            <Image
              src="FotoCelular.svg"
              alt="Celular com app financeiro"
              width={480}
              height={460}
            />
          </div>
        </div>
      </section>



      {/* Principios Section */}
      <div className="container my-5">
        <div className="d-flex align-items-center justify-content-center mb-3">
          <div
            style={{
              width: "8px",
              height: "40px",
              backgroundColor: "#ffcc00",
              borderRadius: "10px",
              marginRight: "10px",
            }}
          ></div>
          <h2 className="fw-bold m-0" style={{ fontSize: "28px", color: "#1e3a8a" }}>
            Nossa missão, visão e valores são mais do que palavras
          </h2>
        </div>

        <div className="row g-4 mt-5">
          {principios.map((principio, idx) => (
            <div key={idx} className="col-12 col-md-4">
              <div className="flip-card" onClick={() => virarCard(idx)}>
                <div className={`flip-card-inner ${virados[idx] ? "is-flipped" : ""}`}>
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

        {/* Estilos do Flip Card */}
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

      {/* Seção depoimentos */}
      <section className="testimonials">
        <div className="container">
          <h2 className="title">Depoimentos</h2>
          <p className="subtitle">
            Veja o que nossos usuários têm a dizer sobre como o controle financeiro transformou suas rotinas.
          </p>

          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            navigation
            modules={[Navigation]}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {testimonials.map((t, index) => (
              <SwiperSlide key={index}>
                <div className="testimonial-card">
                  <img
                    src={t.img}
                    alt={t.name}
                    className="testimonial-img"
                  />
                  <h4>{t.name}</h4>
                  <p>"{t.text}"</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <style jsx>{`
    .testimonials {
      padding: 60px 20px;
      background: #071954;
      color: white;
      text-align: center;
    }

    .testimonials .title {
      font-size: 28px;
      font-weight: bold;
      margin-bottom: 10px;
    }

    .testimonials .subtitle {
      font-size: 16px;
      margin-bottom: 40px;
      max-width: 600px;
      margin-left: auto;
      margin-right: auto;
    }

    .testimonial-card {
      background: white;
      color: #333;
      border-radius: 12px;
      padding: 20px;
      box-shadow: 0 4px 14px rgba(0, 0, 0, 0.1);
      text-align: left;
    }

    .testimonial-img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      object-fit: cover;
      margin-bottom: 10px;
    }
  `}</style>
      </section>

      {/* FaleConosco  */}
      <section className="py-5" style={{ backgroundColor: "#f9fbff" }}>
        <div className="container d-flex flex-column flex-lg-row align-items-center">
          <div className="flex-fill text-center">
            <Image
              src="FotoFaleConosco.svg"
              alt="Entre em contato"
              width={500}
              height={500}
              className="img-fluid d-none d-md-flex"
            />
          </div>
          <div
            className="flex-fill p-5 rounded shadow-sm"
            style={{ backgroundColor: "#ffffff", minWidth: "350px", maxWidth: "600px", width: "100%" }}
          >
            <h2 className="fw-bold mb-4 text-center" style={{ color: "#1e3a8a" }}>
              Fale Conosco
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Nome</label>
                <input
                  type="text"
                  name="nome"
                  className="form-control"
                  value={formData.nome}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">E-mail</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Mensagem</label>
                <textarea
                  name="mensagem"
                  className="form-control"
                  rows="4"
                  value={formData.mensagem}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <div className="d-grid">
                <button
                  type="submit"
                  className="btn rounded-pill fw-semibold"
                  style={{backgroundColor:'#ffcc00', color:'#fff'}}
                >
                  Enviar mensagem
                </button>
              </div>

              {enviado && (
                <div className="alert alert-success mt-3 text-center" role="alert">
                  Sua mensagem foi enviada com sucesso!
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
