'use client'
import { useState } from 'react';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './lancamento.css';
import NavUsuario from '@/components/nav-usuario/nav-usuario';

export default function Lancamentos() {
    const [mostrarFormulario, setMostrarFormulario] = useState(false);

    return (
        <div>
            <div className="row min-vh-100">
               
                <NavUsuario></NavUsuario>

                {/* Conteúdo principal */}
                <div className="col-12 col-lg-9 p-4 bg-light rounded-4 mb-4" style={{ marginTop: '20px' }}>
                    <div className="d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center gap-3 mb-4" >
                        <h4 className="fw-bold m-0">Lançamentos</h4>
                        <div className="d-flex align-items-center gap-3">
                        <button
                                className="btn text-white"
                                style={{ backgroundColor: '#ffcc00' }}
                            >
                                Gerar relatório
                            </button>
                            <button
                                className="btn text-white"
                                style={{ backgroundColor: '#ffcc00' }}
                                onClick={() => setMostrarFormulario(true)}
                            >
                                + Adicionar
                            </button>
                            <div className="d-flex align-items-center text-dark">
                                <span className="me-2 fw-bold">Nome usuário</span>
                                <i className="bi bi-person-circle fs-4"></i>
                            </div>
                        </div>
                    </div>

                    {/* Formulario */}
                    {mostrarFormulario && (
                        <div className="formulario-lancamento p-4 mb-4">
                            <h5 className="text-white fw-bold mb-3">Nova Despesa</h5>
                            <form>
                                <div className="mb-3">
                                    <label className="form-label text-white">Descrição</label>
                                    <input type="text" className="form-control custom-input" />
                                </div>
                                <div className="row mb-3">
                                    <div className="col">
                                        <label className="form-label text-white">Valor</label>
                                        <input type="number" className="form-control custom-input" />
                                    </div>
                                    <div className="col">
                                        <label className="form-label text-white">Data</label>
                                        <input type="date" className="form-control custom-input" />
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label text-white">Categoria</label>
                                    <input type="text" className="form-control custom-input" />
                                </div>
                                <div className="mb-4">
                                    <label className="form-label text-white">Anexo</label>
                                    <input type="file" className="form-control custom-input" />
                                </div>
                                <div className="d-flex justify-content-between">
                                    <button
                                        type="button"
                                        className="btn btn-light fw-bold px-4"
                                        onClick={() => setMostrarFormulario(false)}
                                    >
                                        Cancelar
                                    </button>
                                    <button type="submit" className="btn fw-bold px-4" style={{ backgroundColor: '#ffcc00', color: 'white' }}>
                                        Adicionar
                                    </button>
                                </div>
                            </form>
                        </div>
                    )}

                    <div className="bg-white rounded shadow-sm p-3">
                        <div className="table-responsive">
                            <table className="table table-hover">
                                <thead className="bg-warning text-dark fw-bold">
                                    <tr>
                                        <th>Data</th>
                                        <th>Descrição</th>
                                        <th>Tipo</th>
                                        <th>Valor</th>
                                    </tr>
                                </thead>
                                
                            </table>
                        </div>
                        <div className="d-flex justify-content-between align-items-center mt-3">
                            <a href="#" className="text-primary text-decoration-underline">Entenda seu saldo</a>
                            <div className="text-white rounded px-3 py-2 fw-bold" style={{ backgroundColor: '#ffcc00' }}>
                                Saldo: R$0.00
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
