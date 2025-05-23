
import "@/app/usuario/usuario.css";
import Link from "next/link";
import Grafico from "@/components/chart/chart";

export default function Usuario() {

  return (
    <>
      <div className="d-flex flex-row gap-4 mt-4">
        <div className="nav-usuario h-75">
          <ul className="p-4 d-flex flex-column row-gap-3">
            <img src="/logo.svg" alt="logo By young finance" />
            <Link href={"/usuario"}>
              <button className="ms-3">
                <li>
                  <i className="bi bi-pie-chart-fill me-3 fs-4"></i>Visão geral
                </li>
              </button>
            </Link>
            <Link href={"#"}>
              <button className="ms-3">
                <li>
                  <i className="bi bi-send-fill me-3 fs-4"></i>Lançamentos
                </li>
              </button>
            </Link>
            <Link href={"#"}>
              <button className="ms-3">
                <li>
                  <i className="bi bi-bell-fill me-3 fs-4"></i>Notificações
                </li>
              </button>
            </Link>
            <Link href={"/extrato"}>
              <button className="ms-3">
                <li>
                  <i className="bi bi-file-ruled-fill me-3 fs-4"></i>Extrato
                </li>
              </button>
            </Link>
            <Link href={"#"}>
              <button className="ms-3">
                <li>
                  <i className="bi bi-graph-up-arrow me-3 fs-4"></i>Relatórios
                </li>
              </button>
            </Link>
          </ul>
        </div>
        <div className="flex-collumn d-md-none justify-content-around align-items-center"></div>

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
          <div className="contas d-flex gap-3 mt-4 mb-4">
            <div className="div-contas-total d-flex flex-column justify-content-center p-3 rounded-4">
              <h3 className="text-white">
                <i className="bi bi-wallet pe-3"></i>Total da conta
              </h3>
              <p className="text-white m-0">R$ 5.000</p>
            </div>
            <div className="div-contas p-3 rounded-4">
              <i className="bi bi-patch-minus-fill pe-3"></i>
              <h3>Contas a pagar</h3>
              <p className="m-0">R$ 260.00</p>
            </div>
            <div className="div-contas p-3 rounded-4">
              <i className="bi bi-patch-check-fill pe-3"></i>
              <h3>Contas a receber</h3>
              <p className="m-0">R$ 130.00</p>
            </div>
          </div>
          <div className="graficos">
            <div className="movimentacoes m-4 mt-5">
              <Grafico></Grafico>
            </div>
            <div className="div-notificacoes mt-4 p-3 rounded-4 w-75">
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
      </div>
    </>
  );
}
