"use client";
 
import Link from 'next/link';
 
 
const NotFoundPage = () => {
  return (
    <div style={styles.container}>
      <img src="/404.png" className="d-block w-50" alt="" style={{width:"40%"}}/>
      <h2 style={styles.subtitle}>Página não encontrada</h2>
      <p style={styles.text}>
      Ops! Parece que você se perdeu pelo caminho… A página que você está procurando não foi encontrada. Talvez ela tenha sido movida ou não exista mais. Mas não se preocupe! Você pode voltar para a página inicial e continuar explorando todas as funcionalidades que o by YoungFinance oferece. Se precisar de ajuda, entre em contato com a nossa equipe. Estamos sempre prontos para te ajudar!
      </p>
      <Link href="/">
        <button style={styles.button}>Voltar</button>
      </Link>
    </div>
  );
};
 
export default NotFoundPage;
 
const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#dce3f2',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    textAlign: 'center',
  },
 
  subtitle: {
    fontSize: '35px',
    color: '#172d78',
    marginBottom: '30px',
    marginTop: '40px',
    fontWeight:'700'
  },
  text: {
    fontSize: '15px',
    maxWidth: '800px',
    marginBottom: '30px',
    textAlign: 'justify'
  },
  button: {
    padding: '12px 64px',
    color:"#facc15",
    backgroundColor: '#071954',
   fontWeight:'bold',
    border: 'none',
    borderRadius: '20px',
    fontSize: '20px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    marginBottom:'10px',
   
  },
 
};