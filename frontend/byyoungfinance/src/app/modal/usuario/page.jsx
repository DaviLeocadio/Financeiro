import "@/app/usuario/usuario.css";
import Link from "next/link";
import NavUsuario from "@/components/nav-usuario/nav-usuario";
import GraficoBarras from "@/components/graficoBarras/chartsBarras";
import CardInfoUser from "@/components/cardInfoUser/infoUser";
import Modal from "@/components/modal/page";

export default function Usuario() {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center ">
      <div className="position-absolute" style={{top: "10rem"}}>
        <Modal></Modal>
      </div>
      </div>
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
          <h1 className="bemvindo-usuario" id="greetings">
            Bem vindo nome usuário
          </h1>

          <div className="contas d-flex gap-3 mt-4 mb-4 flex-wrap">
            <CardInfoUser
              classe="div-contas-total d-flex flex-column justify-content-center p-3 rounded-4 text-white"
              icon="bi bi-wallet pe-3"
              totalConta="Total da conta"
              valor="R$ 260.00"
            ></CardInfoUser>
            <CardInfoUser
              icon="bi bi-patch-minus-fill pe-3"
              conteudoCard="Contas a pagar"
              valor="R$ 260.00"
            >
            </CardInfoUser>
            <CardInfoUser
              icon="bi bi-patch-check-fill pe-3"
              conteudoCard="Contas a receber"
              valor="R$ 130.00"
            >
            </CardInfoUser>
          </div>
        </div>
      </div>

      <div className="container-usuario mb-4">
        <div className="graficos d-flex flex-column align-items-center container-fluid row-gap-5">
          <div className="movimentacoes bg-white rounded-4 p-3 mt-4">
            <GraficoBarras></GraficoBarras>
          </div>
          <div className="div-notificacoes p-3 rounded-4">
            <p>Painel notificação</p>
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
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
