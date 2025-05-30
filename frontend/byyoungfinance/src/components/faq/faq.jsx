"use client";
import React, { useState } from 'react';
import styles from './faq.module.css'; // Certifique-se de criar e estilizar esse arquivo

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.faqItem}>
      <button onClick={() => setIsOpen(!isOpen)} className={styles.faqQuestion}>
        {question}
        <span>{isOpen ? '▲' : '▼'}</span>
      </button>
      {isOpen && <div className={styles.faqAnswer}>{answer}</div>}
    </div>
  );
};

const Faq = () => {
  const faqs = [
    {
      question: 'Como posso começar a usar o by YoungFinance?',
      answer: 'Basta criar uma conta, conectar suas contas bancárias e cartões para começar a monitorar suas finanças.',
    },
    {
      question: 'O by YoungFinance é seguro?',
      answer: 'Sim! Utilizamos protocolos de segurança de ponta para garantir a proteção dos seus dados financeiros.',
    },
    {
      question: 'Posso categorizar meus gastos?',
      answer: 'Claro! O sistema permite criar categorias personalizadas para organizar melhor suas finanças.',
    },
    {
      question: 'Como recebo alertas de gastos?',
      answer: 'Você pode configurar notificações para receber alertas sempre que atingir o limite de gastos definido.',
    },
    {
      question: 'O by YoungFinance possui relatórios?',
      answer: 'Sim! Relatórios completos com gráficos intuitivos para visualizar sua saúde financeira em tempo real.',
    },
    {
      question: 'Preciso pagar para usar o by YoungFinance?',
      answer: 'Oferecemos uma versão gratuita com recursos essenciais e planos premium para funcionalidades avançadas.',
    },
    {
      question: 'Consigo acessar de diferentes dispositivos?',
      answer: 'Sim! A plataforma é multiplataforma, acessível pelo seu smartphone, tablet ou computador.',
    },
  ];

  return (
    <div className={styles.faqContainer}>
      {faqs.map((faq, index) => (
        <FAQItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
};

export default Faq;
