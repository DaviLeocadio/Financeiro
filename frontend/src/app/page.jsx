"use client";
//Page Home
import './home.css';
import Partners from "../components/carrossel/partners";
import Faq from "../components/Faq/faq";
import Link from 'next/link';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Script from 'next/script';

// editado a responsividade e as imagens

const cards = [
  {
    title: 'CONTAS',
    description: 'Gerencie com precisão.',
    imageUrl: '/cardIcone1.png',
    porcentagem: '97% de precisão:',
    progress: 97,
  },
  {
    title: 'ORÇAMENTO',
    description: 'Crie seu planejamento financeiro.',
    imageUrl: '/cardIcone2.png',
    porcentagem: '88% de planejamento eficaz:',
    progress: 88,
  },
  {
    title: 'EXTRATO',
    description: 'Vida financeira consolidada.',
    imageUrl: '/cardIcone3.png',
    porcentagem: '78% de conta consolidada:',
    progress: 78,
  },
];


export default function Home() {
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

      <div className="text-white HomeInicial d-flex align-items-center justify-content-center text-center">
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-8">
              <h1 className="mb-3 tituloInical">SISTEMA PARA CONTROLE FINANCEIRO RÁPIDO E SEGURO</h1>


              <div className="my-4" />

              <p className="lead textHome mx-auto">
                Gerencie suas finanças de forma simples, rápida e segura com o by YoungFinance. Nosso sistema oferece controle total sobre receitas e despesas, com uma interface intuitiva e proteção dos seus dados em primeiro lugar. Tenha tranquilidade e organização financeira ao seu alcance.
              </p>

              <Link href="/cadastro">
                <button className="botaoHome3 mt-4">CADASTRE-SE</button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="carousel slide banner-mt">
        <div className="carousel-inner">

          <div className="carousel-item active">
            <div className="imagem-graficos">
              <img
                src="/graficos.png"
                className="d-block w-100"
                alt="Banner"
              /></div>
          </div>
        </div>
      </div>



      <div className="FundoHome">
        <div className="container py-5">
          <div className="row align-items-center">
            {/* Imagem da tela */}
            <div className="col-12 col-md-6 mb-4 mb-md-0">
              <img
                src="/telaHome.jpg"
                alt="Imagem principal"
                className="img-fluid rounded img-pequena"
              />
            </div>

            {/* Texto e botões */}
            <div className="col-12 col-md-6 text-center text-md-start" data-aos="fade-up">
              <h1 className="mb-1 titulo">CONTROLE SUAS</h1>
              <h1 className="mb-3 subtitulo">DESPESAS</h1>
              <p className="mb-4">
                Gerencie com precisão todas as despesas dos seus cartões de crédito.
                Tenha controle do cartão titular e dos adicionais. Receba lembretes
                para pagar suas faturas e contas em dia.
              </p>

              {/* Ícones */}
              <div className="row justify-content-center justify-content-md-start mb-3">
                <div className="col-4 col-sm-3 d-flex justify-content-end pe-1">
                  <img src="/controleUm.png" className="img-fluid rounded" alt="Controle 1" />
                </div>
                <div className="col-4 col-sm-3 d-flex justify-content-start ps-1">
                  <img src="/controleDois.png" className="img-fluid rounded" alt="Controle 2" />
                </div>
              </div>

              {/* Botão */}
              <Link href="/cadastro">
                <button className="btn btn-primary botaoHome">EXPERIMENTAR ➜</button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="fundoEspaco"></div>
      <div className="fundoEspaco"></div>



      {/* Porque investir */}
      <div className="Investir">
        <div className="container py-5 text-center">
          {/* Título */}
          <div className="row justify-content-center align-items-center mb-4">
            <div className="col-12 d-flex flex-wrap justify-content-center align-items-center">
              <div className="linha-vertical me-2"></div>
              <h1 className="titulo me-2 mb-0">PORQUE INVESTIR NA</h1>
              <h1 className="subtitulo mb-0">BY YOUNG FINANCE</h1>
            </div>
          </div>

          {/* Bloco azul com conteúdo */}
          <div className="bg-primary text-white p-4 container1">
            <div className="p-3">
              {/* Item 1 */}
              <div className="row mb-3 justify-content-center align-items-center">
                <div className="col-12 col-md-2 text-center mb-2 mb-md-0">
                  <img src="/icone1.png" alt="Imagem 1" className="img-fluid rounded" />
                </div>
                <div className="col-12 col-md-10 text-md-start">
                  <h4>FÁCIL DE USAR</h4>
                  <p className="pHome">
                    Finalmente você vai sentir que domina a sua rotina financeira, e sem precisar de planilhas.
                  </p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="row mb-3 justify-content-center align-items-center">
                <div className="col-12 col-md-2 text-center mb-2 mb-md-0">
                  <img src="/icone2.png" alt="Imagem 2" className="img-fluid rounded" />
                </div>
                <div className="col-12 col-md-10 text-md-start">
                  <h4>EXCELÊNCIA NA GESTÃO</h4>
                  <p className="pHome">
                    Alcance o maior nível de eficiência da gestão financeira, com clareza em todos os fluxos.
                  </p>
                </div>
              </div>

              {/* Item 3 */}
              <div className="row mb-3 justify-content-center align-items-center">
                <div className="col-12 col-md-2 text-center mb-2 mb-md-0">
                  <img src="/icone3.png" alt="Imagem 3" className="img-fluid rounded" />
                </div>
                <div className="col-12 col-md-10 text-md-start">
                  <h4>TUDO EM QUALQUER LUGAR</h4>
                  <p className="pHome">
                    Acompanhe todas as contas de onde estiver, pelo site ou direto no nosso aplicativo.
                  </p>
                </div>
              </div>
            </div>

            {/* Botões */}
            <div className="d-flex flex-column flex-md-row justify-content-center mt-3 gap-3">
              <Link href="/funcionamento">
                <button className="botaoHome">USAR RECURSOS</button>
              </Link>
              <Link href="/sobrenos">
                <button className="botaoHome2">CONHEÇA A GENTE</button>
              </Link>
            </div>
          </div>
        </div>
      </div>



      {/* Guia financeiro */}
      <div className="celulartexto container py-5" >
        <div className="textoGuia text-center">
          <div className="organize">Organize suas finanças</div>
          <div className="guia mb-4">O guia para o seu sucesso financeiro</div>
          <div className="row justify-content-center" data-aos="zoom-in">
            <div className="col-12 col-md-6 mb-4">
              <div className="guia1 text-center text-md-start">
                <div className="flex-guia align-items-center">
                  <h2 className="me-3">01</h2>
                  <h3>Suas contas e cartões num só lugar</h3>
                </div>
                <p>
                  Comece cadastrando suas contas e cartões para ter uma visão mais clara das suas finanças.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 mb-4">
              <div className="guia1 text-center text-md-start">
                <div className="flex-guia align-items-center">
                  <h2 className="me-3">02</h2>
                  <h3>Cadastre todos os seus gastos</h3>
                </div>
                <p>
                  Garanta uma previsibilidade financeira poderosa cadastrando suas despesas em tempo real, de onde você estiver.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 mb-4">
              <div className="guia1 text-center text-md-start">
                <div className="flex-guia align-items-center">
                  <h2 className="me-3">03</h2>
                  <h3>Saiba o destino de cada centavo</h3>
                </div>
                <p>
                  Mantenha tudo sob controle informando sua renda e ganhos extras para ter um ponto de partida.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 mb-4">
              <div className="guia1 text-center text-md-start">
                <div className="flex-guia align-items-center">
                  <h2 className="me-3">04</h2>
                  <h3>Transformando em hábito</h3>
                </div>
                <p>
                  Lance os gastos do dia a dia, acompanhe os relatórios sempre que possível e assuma o controle do seu dinheiro.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>





      {/* Organize seu dinheiro */}
      <div className="space"></div>
      <div className="Fundograficos">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 text-left ">
              <div className="d-flex justify-content-center align-items-center mb-4 baixo">
                <div className="linha-vertical"></div>
                <h1 className="titulo1 me-2">ORGANIZE SEU</h1>
                <h1 className="subtitulo1">DINHEIRO</h1>
              </div>
              <div className="text-center text-md-start">
                <p className="mb-2 pHome">Tenha informações sobre seus gastos e ganhos organizadas de forma clara e objetiva, permitindo tomar as melhores decisões.
                </p>
              </div>
              <div className="icone d-flex flex-column align-items-start">
                <div className="d-flex align-items-center mb-3">
                  <img src="/iconeA.png" alt="Imagem 1" className="mb-3" />
                  <p className="TituloI">CONTAS ARMAZENADAS</p>
                </div>
                <div className="d-flex align-items-center mb-3">
                  <img src="/iconeB.png" alt="Imagem 2" className="mb-2" />
                  <p className="TituloI">FLUXO DE CONTAS</p>
                </div>
              </div>
            </div>

            <div className="col-md-6 text-right">
              <img src="/graficoAzul.png" alt="Imagem 3" className="centraliza" />
            </div>
          </div>
        </div>
      </div>
      <div className="Fundocontinuacao">
      </div>




      <div className="fundoHome1" data-aos="fade-up">
        <div className="d-flex">
          <div className="row">
            <div className="col-12 d-flex titulosHome">
              <div className="linha-vertical"></div>
              <div className="me-2">

                <h1 >ADMINISTRE SUAS</h1>
              </div>
              <div>
                <h1 >FINANÇAS</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="space"></div>
        <div className="container mt-5 ">
          <div className="row justify-content-center">
            {cards.map((card, index) => (
              <div className="col-md-4 d-flex justify-content-center mb-4 mt-5" key={index}>
                <div className="position-relative text-white text-center p-4 shadow cardHome" style={{ width: '18rem', paddingTop: '3rem' }}>
                  <img
                    src={card.imageUrl}
                    alt={`Imagem ${index + 1}`}
                    className="position-absolute top-0 start-50 translate-middle"

                  />
                  <h5 className="mt-5 tituloCard">{card.title}</h5>
                  <p>{card.description}</p>
                  <div className="text-warning text-start mt-3 textY">{card.porcentagem}</div>
                  <div className="progress mt-2" style={{ height: '11px' }}>
                    <div
                      className="progress-bar bg-warning"
                      role="progressbar"
                      style={{ width: `${card.progress}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>


      {/* Bancos e investidores */}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" style={{ backgroundColor: "#dce3f2" }}><path fill="#040e4f" d="M0,224L80,234.7C160,245,320,267,480,245.3C640,224,800,160,960,144C1120,128,1280,160,1360,176L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
      <Partners />
      <div className="bancos">
        <div className="borda" >
          <div className="bancosdisponiveis">
            BANCOS DISPONÍVEIS
          </div>
          <div className="imgbancos" style={{ textAlign: "center", marginBottom: "40px" }}>
            <img src="/bancos.png" className="d-block w-100" alt="" style={{ width: "50%" }} />
          </div>
        </div>
      </div>


      {/* Recursos */}
      <div className="recursos" >
        <div className="titulorecursos">
          <h1>NOSSOS PRINCIPAS RECURSOS</h1>
        </div>
        <div className="subtitulorecursos">
          Conheça os recursos que vão revolucionar seu controle financeiro.
        </div>
        <div className="flex">
          <div className="recursos1">
            <div className="iconetitulo">
              <i className="bi bi-bullseye"></i>
              <h2>LIMITE DE GASTOS</h2>
            </div>
            <div className="descricaorecursos">
              Defina o quanto gastar em cada categoria e economize sem esforço.
            </div>
            <div className="iconetitulo">
              <i className="bi bi-bell-fill"></i>
              <h2>ALERTAS</h2>
            </div>
            <div className="descricaorecursos">
              Receba alertas de todas as suas contas a pagar e dê adeus aos juros!
            </div>
            <div className="iconetitulo">
              <i className="bi bi-credit-card-fill"></i>
              <h2>CONTROLE DE CARTÕES</h2>
            </div>
            <div className="descricaorecursos">
              controle todos seus cartões em um único lugar.
            </div>
          </div>

          <div className="imagemcelularrecursos">
            <img src="/celular2.png" className="d-block w-100" alt="" style={{ width: "80%", borderRadius: "10px" }} />
          </div>
          <div className="recursos2">
            <div className="iconetitulo">
              <i className="bi bi-bar-chart-fill"></i>
              <h2>RELATÓRIOS</h2>
            </div>
            <div className="descricaorecursos">
              Resumos incríveis, com gráficos simples e completos.
            </div>
            <div className="iconetitulo">
              <i className="bi bi-columns-gap"></i>
              <h2>CRIAÇÃO DE CATEGORIA</h2>
            </div>
            <div className="descricaorecursos">
              Crie suas próprias categorias de acordo com a sua necessidade.
            </div>
            <div className="iconetitulo">
              <i className="bi bi-laptop"></i>
              <h2>MULTIPLATAFORMA</h2>
            </div>
            <div className="descricaorecursos">
              Acesse seu controle financeiro de onde estiver, do celular ou computador.
            </div>
          </div>
        </div>
      </div>



      {/* Perguntas Frequentes */}

      <div className="perguntasfrequentes">
        PERGUNTAS FREQUENTES
      </div>
      <div className="flex2">
        <div className="textoImagem">
          <div className="imagemPerguntas">
            <div className="d-none d-md-flex">
              <div id="carouselExample" className="carousel slide">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src="/logosemfundo.png" className="d-block w-50" alt="..." />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="textoperguntas" data-aos="fade-up"
            data-aos-anchor-placement="center-bottom">
            <p>
              Confira as respostas para as perguntas mais frequentes sobre o funcionamento e as principais funcionalidades do sistema by YoungFinance. Nosso objetivo é garantir que você aproveite ao máximo todos os recursos disponíveis, desde o controle de gastos até a organização completa da sua vida financeira.
            </p>
            <p>
              Navegue pelas perguntas, esclareça suas dúvidas e descubra como tornar sua gestão financeira mais simples, prática e eficiente com o YoungFinance ao seu lado!


            </p>
          </div>

        </div>
        <div className="faq" data-aos="fade-up">
          <Faq />
        </div>
      </div>
      <div className="banner-container"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000">
        <img src="/banner.png" alt="Banner YoungFinance" className="banner-img" />
        <Link href="/cadastro" className="btn-cadastrar">
          CADASTRE-SE
        </Link>
      </div>




    </>

  );
}


