"use client";
import "@/app/notificacoes/notificacoes.css"
import Link from "next/link";
import Grafico from "@/components/graficoDonut/chart";
import NavUsuario from "@/components/nav-usuario/nav-usuario";
import { useEffect, useState } from "react";
import axios from "axios";
const API_URL = 'http://localhost:8080';


export default function Notificacoes() {
  const [nome, setNome] = useState();
  const [despesa, setDespesa] = useState([]);
  const [categoria, setCategoria] = useState('');
  const [descricao, setDescricao] = useState('');
  let despesaArray = [];

  useEffect(() => {
    setNome(localStorage.getItem('nome'));
    if (!localStorage.getItem('token') || !localStorage.getItem('nome')) {
      window.location.href = '/not-auth';
      return;
    }
  }, []);

  useEffect(() => {
    (async () => {
      const verDespesa = await axios.get(`${API_URL}/despesas`);
      setDespesa([verDespesa.data]);
      console.log(verDespesa.data);

      if (despesa['data_pag'] >= new Date().getDate) {
       
        setDespesa(verDespesa.data);
        setCategoria(verDespesa.data['categoria']);
        setDescricao(verDespesa.data['descricao']);
        console.log(verDespesa.data);

        despesa.forEach((item) => {
          despesaArray.push({
                categoria: `${item['categoria']}`,
                descricao: `${item['descricao']}`,
                data_pag: `${item['data_pag']}`
          });
        });
        setDespesa(despesaArray);
        console.log(despesa);
        console.log(despesaArray);
        setCategoria(despesa['categoria']);
        setDescricao(despesa['descricao']);
        
      }
      
      return verDespesa.data;
    })();
  }, []);




  return (<>
    <div className="d-flex flex-row gap-4 mt-4">
      <NavUsuario></NavUsuario>
      <div className="container-usuario gap-4 m-4 w-75 flex-wrap">
        <div className="d-flex gap-3 justify-content-end align-items-center flex-wrap">
          <div
            className="search bg-white rounded-pill"
            style={{ height: "fit-content" }}
          >
            <form className="d-flex" role="search">
              <input
                className="form-control rounded-pill me-2"
                type="search"
                placeholder="Buscar"
                aria-label="Search"
              />
              <button className="btn btn-pesquisa" type="submit">
                <i className="bi bi-search"></i>
              </button>
            </form>
          </div>
          <div className="div-usuario d-flex align-items-center gap-2 pe-3">
            <p className="m-0">{nome}</p>
            <i className="bi bi-person-circle"></i>
          </div>
        </div>

        <div className="">
          <h1 className="notificacoes-usuario mb-4" id="greetings">
            Notificações
          </h1>
          <div className="notificacoes">
            <div className="div-notificacoes p-3 rounded-4">
              <div className="notificacoes">
                <table>
                  <tbody>
                    {despesaArray.map((item, index) => (
                      <tr key={index}>
                        <td data-th="Data">{item.data_pag}</td>
                        <td data-th="Descrição">{item.descricao}</td>
                        <td data-th="Tipo">{item.categoria}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


  </>)
}