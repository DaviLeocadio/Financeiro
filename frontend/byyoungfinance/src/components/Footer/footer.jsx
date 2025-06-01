import 'bootstrap-icons/font/bootstrap-icons.css';
import Link from 'next/link';
import './footer.css';

export default function Footer() {
  return (
    <>
      <footer className="footer align-items-center justify-content-center mt-5">
        <div className="footer-container d-sm-flex d-grid">
          <div className="footer-section">
            <div className="footer-section footer-center">
              <Link href="/">
                <img src="/Logo.png" className="footer-logo" />
              </Link>
            </div>
            <p className="footer-description">
              O by YoungFinance é um controle financeiro online para uso
              pessoal. Com o sistema, você organiza despesas e receitas, além de
              ter uma análise completa de gastos.
            </p>
          </div>

          <div className="footer-section">
            <h2 className="footer-title">Navegue</h2>
            <ul>
              <li>
                <a href="#">Sobre Nós</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="/Funcionamento">Funcionamento</a>
              </li>
            </ul>
          </div>

          <div className="footer-section d-md-block d-grid">
            <h2 className="footer-title">Contato</h2>
            <p>(11) 9846-3843</p>
            <p className="email">byYoungFinance@gmail.com</p>
          </div>

          <div className="footer-section">
            <h2 className="footer-title d-none d-lg-block">Cadastre-se</h2>
            <Link href='/cadastro'>
              <p className='cadastro-footer d-none d-lg-block'>Cadastro</p>
            </Link>
            <Link href='/login'>
              <p className='cadastro-footer d-none d-lg-block'>Login</p>
            </Link>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2025 by YoungFinance - Todos os direitos reservados</p>
          <div className="logo-icon">
            <i className="bi bi-instagram"></i>
            <i className="bi bi-twitter w-50"></i>
            <i className="bi bi-linkedin"></i>
            <i className="bi bi-facebook"></i>
            <i className="bi bi-youtube"></i>
          </div>
        </div>
      </footer>
    </>
  );
}
