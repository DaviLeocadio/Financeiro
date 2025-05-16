import './login.css';

export default function Login(){
    return(
        <>
            <div className="container my-5 w-50 p-4 rounded-4 d-flex">
                <div className="col-md-5 col-12">
                    <div className="row align-items-center justify-content-center d-flex">
                        <h1 className='fs-2 fw-bold'>Entre na sua conta</h1>
                    </div>
                    <div className="row mt-5">
                        <p className='fw-bold'>Nome ou Email</p>
                    </div>
                    <div className="row">
                        <input type="text" className="input-infos rounded-4" />
                    </div>
                    <div className="row mt-4">
                        <p className='fw-bold'>Senha</p>
                    </div>
                    <div className="row">
                        <input type="password" className="input-infos rounded-4" />
                    </div>
                    <div className="row mt-5">
                        <button type="button" className='button-login rounded-4'>Fazer login</button>
                    </div>
                    <div className="row align-items-center justify-content-center d-grid">
                        <p>ou</p>
                    </div>
                    <div className="row">
                        <button type="button" className='button-cadastro rounded-4'>Criar conta</button>
                    </div>
                </div>

                <div className="col-md-7 col-7 align-items-center justify-content-center d-none d-md-flex">
                    <img src="/img-login.png" alt="" className='img-login img-fluid ms-5' />
                </div>
            </div>
        </>
    )
}