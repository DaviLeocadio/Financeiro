"use client";
 import './not-found.css';
import Link from 'next/link';
 
 
const NotFoundPage = () => {
  return (
    <div className='container not-found'>
      <img src="/404.png" className="d-block w-50 img-fluid" alt=""/>
      <h2 className='subtitle'>Página não encontrada</h2>
      <p className='text'>
        Ops! Parece que você se perdeu pelo caminho… A página que você está procurando não foi encontrada. Talvez ela tenha sido movida ou não exista mais. Mas não se preocupe! Você pode voltar para a página inicial e continuar explorando todas as funcionalidades que o by YoungFinance oferece. Se precisar de ajuda, entre em contato com a nossa equipe. Estamos sempre prontos para te ajudar!
      </p>
      <Link href="/">
        <button className='button'>Voltar</button>
      </Link>
    </div>
  );
};
 
export default NotFoundPage;
