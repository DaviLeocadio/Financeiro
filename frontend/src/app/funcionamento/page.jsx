'use client';

import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from 'react-bootstrap';
import Script from 'next/script';
import './funcionamento.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

export default function Funcionamento() {
  const cards = [
    {
      nome: 'Empoderar pessoas por meio da educação financeira',
      cargo: 'Nosso compromisso central é capacitar cada indivíduo a tomar decisões financeiras.',
      detalhes: 'Aqui a gente acredita que dinheiro não precisa ser um bicho de sete cabeças. Empoderamento financeiro é sobre aprender a usar a grana a seu favor — sem pressão, sem tabu e no seu ritmo. Dicas simples e direto ao ponto: como organizar seu rolê com um orçamento, sair do sufoco das dívidas, guardar um dinheirinho no fim do mês e até dar os primeiros passos pra investir de um jeito fácil.',
    },
    {
      nome: 'Romper com o tabu que envolve o dinheiro',
      cargo: 'Trabalhamos para desconstruir a ideia de que falar sobre finanças é complicado, técnico ou reservado a especialistas...',
      detalhes: 'Aqui a gente sabe que dinheiro não precisa ser complicado. É sobre aprender a usar sua grana do jeito que funciona pra você, sem estresse, sem pressão e no seu tempo. A ideia é dar dicas simples pra organizar seus gastos, sair das dívidas, guardar um troco no fim do mês e até começar a investir sem complicação.',
    },
    {
      nome: 'Estimular o planejamento e o cuidado com o futuro',
      cargo: 'Queremos que nossos usuários enxerguem a organização financeira como uma ferramenta essencial para o seu planejamento financeiro',
      detalhes: 'Planejar, definir metas e controlar o orçamento pode parecer difícil, mas a real é que tudo isso te leva pra uma vida financeira mais tranquila. Vem que eu te mostro como dar os primeiros passos de um jeito simples e sem complicação.',
    },
  ];

  const principios = [
    {
      titulo: 'Nossa Missão',
      descricao: 'Empoderar pessoas para que tomem decisões financeiras conscientes e equilibradas, com ferramentas simples e acessíveis.',
      fundo: '#dce3f2',
      imagem: '/fotoCardUm.png',
      corTexto: '#333',
    },
    {
      titulo: 'Nossa Visão',
      descricao: 'Ser referência nacional em educação financeira digital e promover autonomia para milhões de pessoas cuidarem do seu dinheiro com clareza.',
      fundo: '#dce3f2',
      imagem: '/fotoCardDois.png',
      corTexto: '#333',
    },
    {
      titulo: 'Nossos Valores',
      descricao: 'Valorizamos a transparência e a ética em todas as nossas ações, buscando sempre oferecer uma experiência com facilidade e acessibilidade para todos os perfis de usuários. Acreditamos na importância da empatia e do acolhimento, respeitando a jornada única de cada pessoa.',
      fundo: '#dce3f2',
      imagem: '/fotoCardTres.png',
      corTexto: '#333',
    },
  ];

  const testimonials = [
    {
      name: 'Alexa Rodriguez',
      text: 'Organizar meus gastos mensais com essa plataforma incrível mudou minha relação com o dinheiro.',
      img: '/pessoaUm.png',
      rating: 5,
    },
    {
      name: 'Emily Chen',
      text: 'Com o sistema de metas e orçamento, consegui sair do vermelho e guardar um valor todo mês. Super intuitivo e direto!',
      img: '/pessoaTres.png',
      rating: 4,
    },
    {
      name: 'James Johnson',
      text: 'Ter controle financeiro ficou simples. Eu e minha família passamos a planejar melhor nossos sonhos. Plataforma excelente!',
      img: '/pessoaDois.png',
      rating: 5,
    },
  ];

  const [show, setShow] = useState(false);
  const [cardSelecionado, setCardSelecionado] = useState(null);
  const [virados, setVirados] = useState(Array(principios.length).fill(false));
  const [formData, setFormData] = useState({ nome: '', email: '', mensagem: '' });
  const [enviado, setEnviado] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (card) => {
    setCardSelecionado(card);
    setShow(true);
  };

  const virarCard = (index) => {
    const novo = [...virados];
    novo[index] = !novo[index];
    setVirados(novo);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Mensagem enviada:', formData);
    setEnviado(true);
    setFormData({ nome: '', email: '', mensagem: '' });
  };

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
    {/* Importando jQuery */}
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

      {/* Banner */}
      {/* Banner */}
      <div className="carousel slide banner-mt">
        <div className="carousel-inner">
         
          <div className="carousel-item active">
            <div className="banner-funcionamento">
            <img
              src="/bannerFuncionamento.png"
              alt="Banner"
            /></div>
          </div>
        </div>
      </div>

      {/* Sobre */}
      <section className="container py-5" id="sobre-nos">
        <div className="d-flex align-items-center justify-content-center mb-4">
          <div className="section-title-bar-yellow"></div>
          <h2 className="fw-bold m-0 section-title">
            Controle sua vida financeira com leveza e segurança
          </h2>
        </div>
        <p className="text-muted text-center mx-auto sobre-text">
          Esqueça planilhas complicadas e aplicativos confusos. Nossa plataforma
          oferece uma experiência moderna, acessível e prática para que você
          assuma o controle do seu dinheiro com tranquilidade e confiança.
        </p>
      </section>

      {/* Seção Objetivos com modal */}
      <div className="objetivos-section"  data-aos="fade-up">
        <div className="container text-center">
          <div className="d-flex align-items-center justify-content-center mb-5">
            <div className="section-title-bar-blue"></div>
            <h2 className="m-0 fw-bold section-title">
              OBJETIVOS DA <span className="text-black">ByYOUNGFINANCE</span>
            </h2>
          </div>

          <div className="d-flex flex-wrap justify-content-center gap-4">
            {cards.map((card, idx) => (
              <div
                key={idx}
                className="objetivo-card"
                onClick={() => handleShow(card)}
              >
                <h5 className="mt-3 mb-1 fw-bold objetivo-card-title">
                  {card.nome}
                </h5>
                <p className="objetivo-card-desc">{card.cargo}</p>
                <button
                  className="btn rounded-pill objetivo-card-btn"
                  onClick={e => {
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
              <Modal.Header closeButton className="modal-header-custom">
                <Modal.Title className="text-black">
                  {cardSelecionado.nome}
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <p className="objetivo-modal-desc">{cardSelecionado.detalhes}</p>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose} className="objetivo-modal-btn">
                  Fechar
                </Button>
              </Modal.Footer>
            </>
          )}
        </Modal>
      </div>

      {/* Modal duplicado removido */}

     {/* Finance Section */}
<section className="py-5 bg-white" >
  <div className="container">
    <div className="row align-items-center">
      {/* Texto à esquerda (em telas grandes) */}
      <div className="col-12 col-md-6 mb-4 mb-md-0">
        <h6 className="finance-highlight">SERVIÇOS EXCLUSIVOS</h6>
        <h2 className="fw-bold finance-title">
          Gerencie suas finanças sem sair de casa
        </h2>
        <p className="text-muted mt-2 mb-4 finance-desc">
          Veja como você pode cuidar das suas finanças: fácil de usar,
          seguro, rápido e no conforto do seu lar.
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
      <div className="col-12 col-md-6 text-center">
        <Image
          src="/logosemfundo.png"
          alt="Celular com app financeiro"
          width={480}
          height={460}
          className="img-fluid"
        />
      </div>
    </div>
  </div>
</section>

      {/* Principios Section */}
      <div className="container my-5">
        <div className="d-flex align-items-center justify-content-center mb-3">
          <div className="section-title-bar-yellow"></div>
          <h2 className="fw-bold m-0 section-title">
            Nossa missão, visão e valores são mais do que palavras
          </h2>
        </div>

        <div className="row g-4 mt-5">
          {principios.map((principio, idx) => (
            <div key={idx} className="col-12 col-md-4">
              <div className="flip-card" onClick={() => virarCard(idx)}>
                <div
                  className={`flip-card-inner ${
                    virados[idx] ? 'is-flipped' : ''
                  }`}
                >
                  <div
                    className="flip-card-front"
                    style={{
                      backgroundColor: principio.fundo,
                    }}
                  >
                    <Image
                      src={principio.imagem}
                      alt={principio.titulo}
                      fill
                      style={{
                        objectFit: 'cover',
                        borderRadius: '20px',
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
                    <p className="fs-6" style={{ fontSize: '0.95rem' }}>
                      {principio.descricao}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Seção depoimentos */}
      <section className="testimonials">
        <div className="container" data-aos="zoom-in">
          <h2 className="title">Depoimentos</h2>
          <p className="subtitle">
            Veja o que nossos usuários têm a dizer sobre como o controle
            financeiro transformou suas rotinas.
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
                  <img src={t.img} alt={t.name} className="testimonial-img" />
                  <h4>{t.name}</h4>
                  <div className="stars">
                    {Array.from({ length: 5 }, (_, i) => (
                      <span key={i} className={i < t.rating ? 'filled' : ''}>
                        ★
                      </span>
                    ))}
                  </div>
                  <p>"{t.text}"</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* FaleConosco  */}
      <section className="py-5 fale-section">
        <div className="container d-flex flex-column flex-lg-row align-items-center">
          <div className="flex-fill text-center">
            <Image
              src="/fotoFaleConosco.png"
              alt="Entre em contato"
              width={500}
              height={500}
              className="img-fluid d-none d-md-flex"
            />
          </div>
          <div className="flex-fill fale-form-container">
            <h2 className="fw-bold mb-4 text-center fale-title">
              Fale Conosco
            </h2>

            <form
              action="https://formsubmit.co/ormellivitoria@gmail.com"
              method="POST"
            >
              <input type="hidden" name="_captcha" value="false" />

              <div className="mb-3">
                <label className="form-label" htmlFor="nome">
                  Nome
                </label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  className="form-control"
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label" htmlFor="email">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control"
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label" htmlFor="mensagem">
                  Mensagem
                </label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  className="form-control"
                  rows="4"
                  required
                ></textarea>
              </div>

              <div className="d-grid">
                <button
                  type="submit"
                  className="btn rounded-pill fw-semibold fale-btn"
                >
                  Enviar mensagem
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}