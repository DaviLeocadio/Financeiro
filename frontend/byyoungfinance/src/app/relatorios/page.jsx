import "@/app/relatorios/relatorios.css"
import Link from "next/link";
import NavUsuario from "@/components/nav-usuario/nav-usuario";
import GraficoLinha from "@/components/graficoLinha/chartsLinha";

export default function Relatorios(){
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
              <p className="m-0">nome usuário</p>
              <i className="bi bi-person-circle"></i>
            </div>
            </div>
            
            <div className="">
            <h1 className="relatorios-usuario" id="greetings">
            Relatórios
            </h1>
            <div>
              <h2>Entradas</h2>
            <GraficoLinha></GraficoLinha>
            </div>
            <div>
              <h2>Saídas</h2>
            <GraficoLinha></GraficoLinha>
            </div>
            </div>
          </div>
          </div>

      
          
    </>)
}