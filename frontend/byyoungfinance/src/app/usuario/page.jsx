export default function Usuario() {
//   const greetingElement = document.getElementById("bomdia");

//   // Obtém a hora atual do sistema
//   const currentHour = new Date().getHours();

//   if (currentHour >= 5 && currentHour < 12) {
//     greetingElement.textContent = "Bom dia";
//   } else if (currentHour >= 12 && currentHour < 18) {
//     greetingElement.textContent = "Boa tarde";
//   } else {
//     greetingElement.textContent = "Boa noite";
//   }

//   greetingElement.textContent = greetingMessage;
  return (
    <>
      <div className="d-flex flex-row gap-4 mt-4">
        <div className="nav-usuario h-75 bg-primary">
          <ul className="p-4 d-flex flex-column row-gap-3">
            <h1>logo(:</h1>
            <li>Visão geral</li>
            <li>Lançamentos</li>
            <li>Contas</li>
            <li>Notificações</li>
            <li>Extrato</li>
            <li>Relatórios</li>
          </ul>
        </div>
        <div className="container-usuario m-4 d-grid w-75 gap-0 row-gap-3 flex-wrap">
          <div className="d-flex gap-3 align-items-end justify-content-end flex-wrap">
            <div className="search bg-white rounded-pill">
              <form className="d-flex" role="search">
                <input
                  className="form-control rounded-pill me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
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
              <img
                width={600}
                height={300}
                src="https://i.pinimg.com/736x/06/64/6a/06646aced3e7469e5de189da8e02bc83.jpg"
                alt=""
              />
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
