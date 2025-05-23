import Link from "next/link"
import "@/components/nav-usuario/nav-usuario.css"

export default function NavUsuario(){
    return(<>
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
    </>)
}