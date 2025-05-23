export default function Cadastro() {
  return (
    <>
      <div className="container-fluid d-flex align-items-center justify-content-center p-0">
        <div className="row align-items-stretch justify-content-center bg-white p-3 p-md-4 rounded-5 m-2 m-md-4 w-75">
          <div className="forms-dados col-12 col-md-6 p-3 p-md-4">
            <h3>Crie sua conta</h3>
            <div className="d-flex flex-column mb-3">
              <label className="form-label label-color">Nome</label>
              <input
                type="text"
                className="form-control rounded-4"
                id="formGroupName"
                placeholder="Digite seu nome completo"
              />
            </div>
            <div className="mb-3">
              <label className="form-label label-color">Email</label>
              <input
                type="email"
                className="form-control rounded-4"
                id="formGroupEmail"
                placeholder="seuemail@exemplo.com"
              />
            </div>
            <div className="mb-3">
              <label className="form-label label-color">Senha</label>
              <input
                type="password"
                className="form-control rounded-4"
                id="formGroupPassword"
                placeholder="Criar senha"
              />
            </div>
            <div className="mb-3">
              <label className="form-label label-color">CPF</label>
              <input
                type="text"
                className="form-control rounded-4"
                id="formGroupCPF"
                placeholder="000.000.000-00"
              />
            </div>
            <div className="mb-3">
              <label className="form-label label-color">
                Data de Nascimento
              </label>
              <input
                type="date"
                className="form-control rounded-4"
                id="formGroupBirthdate"
                placeholder="DD/MM/AAAA"
              />
            </div>
            <div className="div-button-cadastrar d-flex flex-column align-items-center gap-3 mt-4">
              <button className="button-cadastrar text-white w-100 p-3 rounded-4">
                <p className="m-0">Criar Conta</p>
              </button>
              <p className="m-0">ou</p>
              <button className="button-login w-100 p-3 rounded-4">
                Fazer Login
              </button>
            </div>
          </div>
          <div className="col-md-6 d-none d-md-flex align-items-center justify-content-center p-3">
            <img
              className="img-fluid h-100 rounded-4"
              src="/cadastro-img.png"
              alt="Imagem do cadastro"
            />
          </div>
        </div>
      </div>
    </>
  );
}
