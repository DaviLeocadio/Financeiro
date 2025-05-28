import "@/app/notificacoes/notificacoes.css"
import Link from "next/link";
import Grafico from "@/components/graficoDonut/chart";
import NavUsuario from "@/components/nav-usuario/nav-usuario";

export default function Notificacoes(){
    return(<>
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
                  <p className="m-0">nome usuário</p>
                  <i className="bi bi-person-circle"></i>
                </div>
                </div>
                
                <div className="">
                <h1 className="notificacoes-usuario" id="greetings">
                Notificações
                </h1>
                    <div className="notificacoes">
                    <div className="div-notificacoes p-3 rounded-4">
              <div className="notificacoes">
                <table>
                  <tbody>
                    <tr className="table-header">
                      <th className="verde-claro">Data</th>
                      <th className="azul">Descrição</th>
                      <th className="verde-escuro">Tipo</th>
                    </tr>
                    <tr>
                      <td data-th="Data">16/05/2025</td>
                      <td data-th="Descrição">Mercado</td>
                      <td data-th="Tipo">Alimentação</td>
                    </tr>
                    <tr>
                      <td data-th="Data">16/05/2025</td>
                      <td data-th="Descrição">Energia</td>
                      <td data-th="Tipo">Serviços</td>
                    </tr>
                    <tr>
                      <td data-th="Data">28/05/2025</td>
                      <td data-th="Descrição">Almoço</td>
                      <td data-th="Tipo">Alimentação</td>
                    </tr>
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