'use client'
import './login.css';
import { useState, useEffect } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';

export default function Login() {
  const [captchaValue, setCaptchaValue] = useState(null);

  const handleCaptchaChange = (value) => {
    console.log('Valor do Captcha:', value);
    setCaptchaValue(value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (captchaValue) {
      // Envie o captchaValue para o seu backend para verificação
      const response = await fetch('/api/verify-captcha', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ captchaValue }),
      });
      const data = await response.json();
      if (data.success) {
        console.log('CAPTCHA verificado com sucesso!');
        // Continue com o envio do formulário
      } else {
        console.error('Falha na verificação do CAPTCHA:', data.error);
        // Exiba uma mensagem de erro ao usuário
      }
    } else {
      alert('Por favor, complete o CAPTCHA.');
    }
  };
  return (
    <>
      <div className="container my-5 w-50 p-4 rounded-4 d-flex">
        <div className="col-md-5 col-12">
          <div className="row align-items-center justify-content-center d-flex">
            <h1 className="fs-2 fw-bold">Entre na sua conta</h1>
          </div>
          <div className="row mt-5">
            <p className="fw-bold">Nome ou Email</p>
          </div>
          <div className="row">
            <input type="text" className="input-infos rounded-4" />
          </div>
          <div className="row mt-4">
            <p className="fw-bold">Senha</p>
          </div>
          <div className="row">
            <input type="password" className="input-infos rounded-4" />
          </div>
          <div className="row">
            <form onSubmit={handleSubmit}>
              {/* Outros campos do formulário */}
              <ReCAPTCHA
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                onChange={handleCaptchaChange}
              />
              <button type="submit">Enviar</button>
            </form>
          </div>
          <div className="row mt-5">
            <button type="button" className="button-login rounded-4">
              Fazer login
            </button>
          </div>
          <div className="row align-items-center justify-content-center d-grid">
            <p>ou</p>
          </div>
          <div className="row">
            <button type="button" className="button-cadastro rounded-4">
              Criar conta
            </button>
          </div>
        </div>

        <div className="col-md-7 col-7 align-items-center justify-content-center d-none d-md-flex">
          <img
            src="/img-login.png"
            alt=""
            className="img-login img-fluid ms-5"
          />
        </div>
      </div>
    </>
  );
}
