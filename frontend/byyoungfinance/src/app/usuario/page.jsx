import "./usuario.css"
import Link from 'next/link'
import Grafico from "@/components/chart/chart";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Usuario() {

  return (
    <>
      <div className="d-flex flex-row gap-4 mt-4">
        <div className="nav-usuario h-75 bg-primary">
          <ul className="p-4 d-flex flex-column row-gap-3">
            <img src="/logo.svg" alt="logo By young finance" />
            <Link href={"/usuario"}>
            <button className="">
            <li>Visão geral</li>
            </button>
            </Link>
            <Link href={"#"}>
            <button className="">
            <li>Lançamentos</li>
            </button>
            </Link>
            <Link href={"#"}>
            <button className="">
            <li>Contas</li>
            </button>
            </Link>
            <Link href={"#"}>
            <button className="">
            <li>Notificações</li>
            </button>
            </Link>
            <Link href={"#"}>
            <button className="">
            <li>Extrato</li>
            </button>
            </Link>
            <Link href={"#"}>
            <button className="">
            <li>Relatórios</li>
            </button>
            </Link>
          </ul>
        </div>
        <div className="container-usuario m-4 d-grid w-75 gap-0 row-gap-3 flex-wrap">
          <div className="d-flex gap-3 align-items-end justify-content-end flex-wrap">
            <div className="search bg-white rounded-pill">
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
            <div className="user d-flex gap-2 bg-warning">
              <p className="m-0">Nome Usuário</p>
              <i className="bi bi-person-circle fs-5"></i>
            </div>
          </div>
          <h1 id="bomdia"></h1>
          <div className="contas d-flex d-grid gap-3">
            <div className="bg-info">
              <h3>Total da conta</h3>
              <p>R$ 5.000</p>
            </div>
            <div className="p-3">
              <h3>Contas a pagar</h3>
              <p>R$ 260.00</p>
            </div>
            <div className="p-3">
              <h3>Contas a receber</h3>
              <p>R$ 130.00</p>
            </div>
          </div>
          <div className="graficos">
            <div className="movimentacoes">
              <p>grafico</p>
              <Grafico></Grafico>
            </div>
            <div className="notificacoes">
              <p>painel notificação</p>
              <img
                width={600}
                height={300}
                src="https://i.pinimg.com/736x/c1/6a/c1/c16ac1b29b1e24b2ea1fbc757f0b0e51.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
