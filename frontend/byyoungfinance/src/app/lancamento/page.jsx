'use client';
import axios from 'axios';
import { useEffect, useState } from 'react';
const API_URL = 'http://localhost:8080';

export default function geral() {
  const [nome, setNome] = useState();
  const [renda, setRenda] = useState('');
  const [data_rec, setData_rec] = useState('');

  useEffect(() => {
    setNome(localStorage.getItem('nome'));

    if (!localStorage.getItem('token')) {
      console.log('erro');
    } else {
      console.log(nome);
    }
  }, []);

  async function lancamento() {
    console.log(renda, data_rec);
    try {   
      const response = await axios.post(`${API_URL}/financeiro`, {
        renda: renda,
        data_rec: data_rec,
        id_user: localStorage.getItem('id'),
      });

      console.log(response.data);

      return response.data;
    } catch (err) {
      console.error('Não foi possível enviar as informações', err);
      return [];
    }
  }

  return (
    <>
      <h1>Olá {nome}</h1>
      <input
        type="text"
        placeholder="digite sua renda mensal"
        value={renda}
        onChange={(e) => setRenda(e.target.value)}
      />
      <input
        type="date"
        value={data_rec}
        onChange={(e) => setData_rec(e.target.value)}
      />
      <button type="button" onClick={financeiro}>
        oi
      </button>
    </>
  );
}
