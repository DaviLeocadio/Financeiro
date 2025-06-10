'use client';

import React from 'react';
import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Script from 'next/script';

// imagens editadas

export default function HomePage() {

  const teamMembers = [
    { name: 'Jessica Anderson', image: '/integranteUm.png' },
    { name: 'Matthew Taylor', image: '/integranteDois.png' },
    { name: 'Amelia Morgan', image: '/integranteTres.png' },
    { name: 'Jessica Anderson', image: '/integranteQuatro.png' },
    { name: 'Matthew Taylor', image: '/integranteCinco.png' },
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000, // duração da animação em ms (ajuste se quiser)
      once: true,     // se a animação deve acontecer só uma vez ao rolar
    });
  }, []);

  return (
    <div>
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


      {/* Inicio */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center">

            {/* Colagem visual de imagens */}
            <div className="col-md-6 mb-4 mb-md-0">
              <div className="d-flex flex-wrap gap-3 justify-content-center">
                <div className="rounded-4 overflow-hidden mt-3" style={{ width: '70%' }}>
                  <Image
                    src="/equipe.png"
                    alt="Economia de Dinheiro"
                    width={280}
                    height={140}
                    style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                  />
                </div>
              </div>
            </div>
            {/* Texto e métricas */}
            <div className="col-md-6 text-center text-md-start">
              <p className="text-uppercase text-warning fw-bold small">Jovens no controle</p>
              <h2 className="fw-bold mb-3">
                Transformando <span className="text" style={{ color: '#1f3a93' }}>Centavos</span> em Conquistas Reais
              </h2>
              <p className="text-muted mb-4">
                Ajudamos jovens a dominarem suas finanças de forma leve, com ferramentas inteligentes, visual moderno e metas alcançáveis.
              </p>

              <div className="d-flex flex-wrap justify-content-center justify-content-md-start gap-4">
                <div className="text-center">
                  <div className="bg-white p-3 rounded-circle shadow-sm mb-2" style={{ width: '70px', height: '70px' }}>
                    <i className="bi bi-person-fill text-primary fs-3"></i>
                  </div>
                  <h5 className="mb-0 fw-bold">10.000+</h5>
                  <small className="text-muted">Usuários Ativos</small>
                </div>
                <div className="text-center">
                  <div className="bg-white p-3 rounded-circle shadow-sm mb-2" style={{ width: '70px', height: '70px' }}>
                    <i className="bi bi-graph-up-arrow text-success fs-3"></i>
                  </div>
                  <h5 className="mb-0 fw-bold">85%</h5>
                  <small className="text-muted">Metas Alcançadas</small>
                </div>
                <div className="text-center">
                  <div className="bg-white p-3 rounded-circle shadow-sm mb-2" style={{ width: '70px', height: '70px' }}>
                    <i className="bi bi-cash-stack text-warning fs-3"></i>
                  </div>
                  <h5 className="mb-0 fw-bold">R$500K+</h5>
                  <small className="text-muted">Economia Gerada</small>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* nossos serviços */}
      <section className="py-5 bg-light" >
        <div className="container"  data-aos="fade-up" data-aos-delay="200">
          <h2 className="text-uppercase" style={{ color: '#1f3a93' }}>Nossos serviços</h2>
          <p className="text-muted mb-5">
            Somos uma plataforma feita por e para jovens que querem entender, organizar e planejar suas finanças com leveza e praticidade. Com recursos simples, gráficos intuitivos e metas personalizadas, ajudamos você a transformar centavos em conquistas.
          </p>
          <div className="row justify-content-center">
            <div className="col-6 col-md-3 mb-4">
              <div className="d-flex flex-column align-items-center">
                <div className="text-white rounded-circle d-flex justify-content-center align-items-center mb-3" style={{ width: '70px', height: '70px', fontSize: '1.5rem', backgroundColor: '#ffcc00' }}>
                  <i className="bi bi-wallet-fill" aria-label="Ícone de carteira"></i>
                </div>
                <h6 className="fw-bold">Controle de Gastos</h6>
                <p className="text-muted small text-center">Gerencie cada real com inteligência e praticidade.</p>
              </div>
            </div>
            <div className="col-6 col-md-3 mb-4">
              <div className="d-flex flex-column align-items-center">
                <div className="text-white rounded-circle d-flex justify-content-center align-items-center mb-3" style={{ width: '70px', height: '70px', fontSize: '1.5rem', backgroundColor: '#ffcc00' }}>
                  <i className="bi bi-pie-chart-fill" aria-label="Ícone de gráfico de pizza"></i>
                </div>
                <h6 className="fw-bold">Gráficos Interativos</h6>
                <p className="text-muted small text-center">Visualize sua evolução financeira em tempo real.</p>
              </div>
            </div>
            <div className="col-6 col-md-3 mb-4">
              <div className="d-flex flex-column align-items-center">
                <div className="text-white rounded-circle d-flex justify-content-center align-items-center mb-3" style={{ width: '70px', height: '70px', fontSize: '1.5rem', backgroundColor: '#ffcc00' }}>
                  <i className="bi bi-flag-fill" aria-label="Ícone de bandeira"></i>
                </div>
                <h6 className="fw-bold">Metas de Economia</h6>
                <p className="text-muted small text-center">Trace objetivos e veja seu dinheiro crescer.</p>
              </div>
            </div>
            <div className="col-6 col-md-3 mb-4">
              <div className="d-flex flex-column align-items-center">
                <div className="text-white rounded-circle d-flex justify-content-center align-items-center mb-3" style={{ width: '70px', height: '70px', fontSize: '1.5rem', backgroundColor: '#ffcc00' }}>
                  <i className="bi bi-file-earmark-bar-graph-fill" aria-label="Ícone de relatório"></i>
                </div>
                <h6 className="fw-bold">Relatórios Detalhados</h6>
                <p className="text-muted small text-center">Informações precisas para decisões mais inteligentes.</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Seção sobre nos  */}
      <section className="py-5">
        <div className="container">
          <div className="row align-items-center">

            {/* Texto à esquerda com imagem */}
            <div className="col-md-6 mb-4 mb-md-0 text-center">
              <img
                src="/sobreNos.png"
                alt="Jovens conectados"
                className="img-fluid"
                style={{ maxHeight: '200px', width: 'auto' }}
              />
              <h2 className="fw-bold mt-4" style={{ color: '#1f3a93' }}>By YoungFinance</h2>
              <p className="text-muted px-md-3">
                Nasceu da vontade de transformar a relação dos jovens com o dinheiro. Em um mundo onde as finanças pessoais parecem distantes, queremos provar que é possível se organizar e crescer sem perder a leveza da juventude.
              </p>
            </div>

            {/* Blocos à direita */}
            <div className="col-md-6">
              <div className="d-flex flex-column gap-4">

                <div className="p-4 bg-white shadow rounded d-flex">
                  <div className="me-3">
                    <div className="rounded-circle d-flex justify-content-center align-items-center" style={{ width: '50px', height: '50px', backgroundColor: '#071954' }}>
                      <i className="bi bi-coin text-white fs-5"></i>
                    </div>
                  </div>
                  <div>
                    <h6 className="fw-bold mb-1">Feito por Jovens, para Jovens</h6>
                    <p className="text-muted small mb-0">Sabemos na pele os desafios do dia a dia, por isso criamos soluções que falam a sua língua.</p>
                  </div>
                </div>

                <div className="p-4 bg-white shadow rounded d-flex">
                  <div className="me-3">
                    <div className="rounded-circle d-flex justify-content-center align-items-center" style={{ width: '50px', height: '50px', backgroundColor: '#071954' }}>
                      <i className="bi bi-stars text-white fs-5"></i>
                    </div>
                  </div>
                  <div>
                    <h6 className="fw-bold mb-1">Do Básico ao Sonho Grande</h6>
                    <p className="text-muted small mb-0">Desde as pequenas despesas até aquela viagem dos sonhos: estamos com você em cada passo.</p>
                  </div>
                </div>

                <div className="p-4 bg-white shadow rounded d-flex">
                  <div className="me-3">
                    <div className="rounded-circle d-flex justify-content-center align-items-center" style={{ width: '50px', height: '50px', backgroundColor: '#071954' }}>
                      <i className="bi bi-lightning-fill text-white fs-5"></i>
                    </div>
                  </div>
                  <div>
                    <h6 className="fw-bold mb-1">Dinheiro Sem Complicação</h6>
                    <p className="text-muted small mb-0">Chega de estresse e burocracia! Cuidar das finanças pode (e deve) ser leve, simples e divertido.</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Sessão Time */}
      <section className="py-5 bg-light">
        <div className="container text-center">
          <h3 className="fw-bold mb-4">Time By YoungFinance</h3>
          <div
            className="d-flex flex-row flex-wrap justify-content-center"
            style={{ gap: '1rem' }}
          >
            {teamMembers.map((member, idx) => (
              <div
                key={idx}
                className="card border-0 shadow-sm"
                style={{
                  flex: '1 1 180px',
                  maxWidth: '220px',
                  borderRadius: '15px',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  cursor: 'pointer',
                  background: 'white',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'scale(1.05)';
                  e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.15)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
                }}
              >
                <div style={{ overflow: 'hidden', borderTopLeftRadius: '15px', borderTopRightRadius: '15px' }}>
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={220}
                    height={220}
                    className="img-fluid"
                    style={{ objectFit: 'cover', borderTopLeftRadius: '15px', borderTopRightRadius: '15px' }}
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title mb-1">{member.name}</h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
