import React from 'react';
import { EntradaDeTexto } from '../../componentes/EntradaDeTexto/EntradaDeTexto';

export const TelaRegistro: React.FC = () => {
    
    return (
        <div className="container vh-100 d-flex justify-content-center align-items-center">
            <div className="row justify-content-center w-100 mb-5">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <h1 className="card-title text-center">Bem-vindo ao Native Coffee.</h1>
                            <form>
                                <EntradaDeTexto
                                    tipoDeTexto="text"
                                    textoPlaceholder='Insira o seu primeiro nome:'
                                    estilos="w-100 my-2 border-0 py-2"
                                />
                                <EntradaDeTexto
                                    tipoDeTexto="text"
                                    textoPlaceholder='Insira o seu último nome:'
                                    estilos="w-100 my-2 border-0 py-2"
                                />
                                <EntradaDeTexto
                                    tipoDeTexto="e-mail"
                                    textoPlaceholder='Insira o seu e-mail:'
                                    estilos="w-100 my-2 border-0 py-2"
                                />
                                <EntradaDeTexto
                                    tipoDeTexto="password"
                                    textoPlaceholder='Crie a sua senha:'
                                    estilos="w-100 my-2 border-0 py-2"
                                />
                                <button type="submit" className="btn btn-success w-100 mt-3">
                                    Cadastrar!
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}