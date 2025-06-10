"use client";
import Link from 'next/link';
import './not-auth.css';
 
export default function Not_auth() {
  return (
    <div className='not-authorized align-items-center d-flex flex-column justify-content-center'>
      <img src="/403.png" className="d-block w-50 img-fluid" alt=""/>
      <h2 className='subtitle-not-auth'>Não Autorizado!</h2>
      <p className='text-not-auth'>
      Ops! Parece que você se perdeu pelo caminho… 
      A página que você está procurando não permiti pessoas sem login. Mas não se preocupe! Você pode ir para a página de login e entrar na sua conta ou, se não tiver uma conta, se cadastre! Se precisar de ajuda, entre em contato com a nossa equipe. Estamos sempre prontos para te ajudar!
      </p>
      <Link href="/login">
        <button className='button-not-auth'>Voltar</button>
      </Link>
    </div>
  );
};
 

 
