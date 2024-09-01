import React from 'react';
import { EntradaDeTexto } from '../../componentes/EntradaDeTexto/EntradaDeTexto';
import { useNavigate } from 'react-router-dom';

export const TelaLogin: React.FC = () => {
    const navegacao = useNavigate();

    const vaiParaRegistro = () => {
        navegacao('/registro');
    }

    return (
        <div className="container vh-100 d-flex justify-content-center align-items-center">
            <div className="row justify-content-center w-100 mb-5">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <h1 className="card-title text-center">Bem-vindo.</h1>
                            <form>
                                <EntradaDeTexto
                                    tipoDeTexto="email"
                                    textoPlaceholder='Insira seu e-mail:'
                                    estilos="w-100 my-2 border-0 py-2"
                                />
                                <EntradaDeTexto
                                    tipoDeTexto="password"
                                    textoPlaceholder='Insira sua senha:'
                                    estilos="w-100 my-2 border-0 py-2"
                                />
                                <button type="submit" className="btn btn-success w-100 mt-3">
                                    Entrar
                                </button>
                                <div className="d-flex justify-content-center mt-3">
                                    <button type="button" className="btn btn-link" onClick={vaiParaRegistro}>
                                        Cadastrar-se
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}