import React from 'react';
import { EntradaDeTexto } from '../../componentes/EntradaDeTexto/EntradaDeTexto';
import { useVisaoControllerLogin } from './visaoControllerLogin';

export const TelaLogin: React.FC = () => {
    const {
        realizaLogin,
        emailUsuario,
        setEmailUsuario,
        senhaUsuario,
        setSenhaUsuario, vaiParaRegistro} = useVisaoControllerLogin();

    const handleRealizaLogin = async (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        await realizaLogin({ emailUsuario, senhaUsuario });
    };

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
                                    valor={emailUsuario}
                                    mudancaDeValor={(e) => setEmailUsuario(e.target.value)}
                                />
                                <EntradaDeTexto
                                    tipoDeTexto="password"
                                    textoPlaceholder='Insira sua senha:'
                                    estilos="w-100 my-2 border-0 py-2"
                                    valor={senhaUsuario}
                                    mudancaDeValor={(e) => setSenhaUsuario(e.target.value)}
                                />
                                <button type="submit" className="btn btn-success w-100 mt-3" onClick={handleRealizaLogin}>
                                    Entrar
                                </button>
                                <div className="d-flex justify-content-center mt-3" onClick={vaiParaRegistro}>
                                    <button type="button" className="btn btn-link">
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