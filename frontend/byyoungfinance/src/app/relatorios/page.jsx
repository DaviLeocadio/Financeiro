import "@/app/relatorios/relatorios.css"
import Link from "next/link";
import NavUsuario from "@/components/nav-usuario/nav-usuario";
import GraficoLinha from "@/components/graficoLinha/chartsLinha";

export default function Relatorios(){
    return (<>
    <div className="d-flex gap-3 flex-row mt-4">
        <NavUsuario></NavUsuario>
        <div className="container-usuario gap-2 m-4 w-75 flex-wrap">
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
            
            <div className="d-flex flex-column gap-3">
            <h1 className="relatorios-usuario" id="greetings">
            Relatórios
            </h1>
            <div className="renda d-flex flex-row gap-3">
            <div className="div-contas p-3 rounded-4">
            <i className="bi bi-cash-stack"></i>
              <h3>Minha renda</h3>
              <p className="m-0">R$ 260.00</p>
            </div>
            <div className="div-contas p-3 rounded-4">
              <i className="bi bi-bank2"></i>
              <h3>Saldo</h3>
              <p className="m-0">R$ 260.00</p>
            </div>
            </div>
            <div>
              <h2 className="entradas">Entradas</h2>
            <GraficoLinha></GraficoLinha>
            </div>
            <div className="mb-3">
              <h2 className="entradas">Saídas</h2>
            <GraficoLinha></GraficoLinha>
            </div>
            </div>
          </div>
          </div>

      
          
    </>)
}