import React from 'react';
import { EntradaDeTexto } from '../../componentes/EntradaDeTexto/EntradaDeTexto';
import { useVisaoControllerRegistro } from './visaoControllerRegistro';

export const TelaRegistro: React.FC = () => {
    const controllerRegistro = useVisaoControllerRegistro();

    const handleRegistro = async (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();

        await controllerRegistro.realizaCadastro({
            nomeUsuario: controllerRegistro.nomeUsuario,
            sobrenomeUsuario: controllerRegistro.sobrenomeUsuario,
            emailUsuario: controllerRegistro.emailUsuario,
            senhaUsuario: controllerRegistro.senhaUsuario
        });
    }

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
                                    valor={controllerRegistro.nomeUsuario}
                                    mudancaDeValor={(e) => controllerRegistro.setNomeUsuario(e.target.value)}
                                />
                                <EntradaDeTexto
                                    tipoDeTexto="text"
                                    textoPlaceholder='Insira o seu último nome:'
                                    estilos="w-100 my-2 border-0 py-2"
                                    valor={controllerRegistro.sobrenomeUsuario}
                                    mudancaDeValor={(e) => controllerRegistro.setSobrenomeUsuario(e.target.value)}
                                />
                                <EntradaDeTexto
                                    tipoDeTexto="e-mail"
                                    textoPlaceholder='Insira o seu e-mail:'
                                    estilos="w-100 my-2 border-0 py-2"
                                    valor={controllerRegistro.emailUsuario}
                                    mudancaDeValor={(e) => controllerRegistro.setEmailUsuario(e.target.value)}
                                />
                                <EntradaDeTexto
                                    tipoDeTexto="password"
                                    textoPlaceholder='Crie a sua senha:'
                                    estilos="w-100 my-2 border-0 py-2"
                                    valor={controllerRegistro.senhaUsuario}
                                    mudancaDeValor={(e) => controllerRegistro.setSenhaUsuario(e.target.value)}
                                />
                                <button type="submit" className="btn btn-success w-100 mt-3" onClick={handleRegistro}>
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