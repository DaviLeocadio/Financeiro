'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function HomePage() {
  const services = [
    {
      title: "Controle de Gastos"
    },
    {
      title: "Gráficos Interativos" 
    },
    {
      title: "Metas de Economia"
    },
    {
      title: "Relatórios Detalhados"
    },
    {
      title: "Planejamento Orçamentário"
    },
    {
      title: "Histórico e Linha do Tempo"
    },
  ];

  const teamMembers = [
    { name: 'Jessica Anderson', image: 'MulherUm.svg' },
    { name: 'Matthew Taylor', image: 'MulherDois.svg' },
    { name: 'Amelia Morgan', image: 'MulherTres.svg' },
    { name: 'Jessica Anderson', image: 'MulherQuatro.svg' },
    { name: 'Matthew Taylor', image: 'HomemUm.svg' },
  ];

  const SobreNosImages = [
    'Jornada.svg',
  ];

  return (
    <div>

  {/* ByYoungFinance */}
  <section className="py-5 bg-white">
        <div className="container">
          <div className="row align-items-center">

            {/* Texto */}
            <div className="col-md-6 mb-4 mb-md-0">
              <h2 className="display-5 text-dark">
                <span className="text" style={{color:'#ffcc00'}}>By YoungFinance</span> </h2>
              <ul className="mt-3 text-muted fs-6 ps-3">
                <li>
                Nasceu da vontade de transformar a relação dos jovens com o dinheiro. Em um mundo onde as finanças pessoais podem parecer complicadas e distantes, percebemos que muitos jovens enfrentam desafios para organizar seus gastos, economizar e planejar o futuro — tudo isso sem perder a leveza e a espontaneidade dessa fase da vida.
                </li>
                <li className="mt-2">
                Nosso site foi criado por jovens, para jovens. Entendemos as dificuldades e as dúvidas que aparecem no dia a dia, desde controlar pequenas despesas até traçar metas para sonhos maiores, como aquela viagem especial ou o primeiro investimento. Queremos mostrar que cuidar do dinheiro não precisa ser estressante nem burocrático.
                </li>
              </ul>
            </div>

            {/* Imagens */}
            <div className="col-md-6">
              <div className="row">
                {SobreNosImages.map((src, index) => (
                  <div key={index} className="col-12 mb-3">
                    <Image
                      src={src}
                      alt={`Imagem ${index + 1}`}
                      layout="responsive"
                      width={400}
                      height={250}
                      className="rounded-3"
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Services Section */}
<section className="py-5 bg-light">
  <div className="container text-center">
    <h3 className="fw-bold mb-3">Nossos serviços</h3>
    <p className="text-muted mb-5">
    Somos uma plataforma feita por e para jovens que querem entender, organizar e planejar suas finanças com leveza e praticidade. Com recursos simples, gráficos intuitivos e metas personalizadas, ajudamos você a transformar centavos em conquistas.
    </p>
    <div className="row">
      {services.map((service, idx) => (
        <div key={idx} className="col-12 col-sm-6 col-md-4 mb-4">
          <div className="d-flex flex-column align-items-center p-4 border rounded shadow-sm h-100 bg-white">
            <h6 className="fw-bold">{service.title}</h6>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>



      {/* Team Section */}
      <section className="py-5">
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
