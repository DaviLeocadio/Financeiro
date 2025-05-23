import "bootstrap-icons/font/bootstrap-icons.css";
import Link from "next/link";
import "./footer.css"
 
 
  export default function Footer() {
    return (
        <>
      <footer className="footer">
        <div className="footer-container">
         
          <div className="footer-section">
          <div className="footer-section footer-center">
          <Link href="/">
            <img src="/img/Logo.png" className="footer-logo" />
          </Link>
          </div>
            <p className="footer-description">
              O by YoungFinance é um controle financeiro online para uso pessoal. Com o sistema, você organiza despesas e receitas, além de ter uma análise completa de gastos.
            </p>
          </div>
 
       
          <div className="footer-section">
            <h2 className="footer-title">NAVEGUE</h2>
            <ul>
              <li><a href="#">SOBRE NÓS</a></li>
              <li><a href="#">BLOG</a></li>
              <li><a href="#">FUNCIONAMENTO</a></li>
            </ul>
          </div>
 
         
          <div className="footer-section">
            <h2 className="footer-title">CONTATO</h2>
            <p>(11) 9846-3843</p>
            <p className="email">YOUNGFINANCE@GMAIL.COM</p>
          </div>
 
         
          <div className="footer-section">
            <h2 className="footer-title">CADASTRE-SE</h2>
            <input type="email" placeholder="Email" className="email-input" />
            <button className="send-button">ENVIAR</button>
 
            <div className="back-to-top">
          <a href="#top">
            Voltar ao topo <i className="bi bi-arrow-up-circle-fill"></i>
          </a>
        </div>
          </div>
        </div>
 
        <div className="footer-bottom">
          <p>© 2025 by YoungFinance - Todos os direitos reservados</p>
          <div className="logo-icon">
            <i className="bi bi-instagram"></i>
          <i className="bi bi-twitter"></i>
          <i className="bi bi-linkedin"></i>
          <i className="bi bi-facebook"></i>
          <i className="bi bi-youtube"></i>
          </div>
        </div>
 
       
      </footer>
      </>
    );
  }
 
 
       