import React from 'react';
import { EntradaDeTexto } from '../../componentes/EntradaDeTexto/EntradaDeTexto';
import { useVisaoControllerLogin } from './visaoControllerLogin';
import { Controller } from 'react-hook-form';

export const TelaLogin: React.FC = () => {
    const {
        control,
        errors,
        handleSubmit,
        realizaLogin,
        vaiParaRegistro
    } = useVisaoControllerLogin();

    return (
        <div className="container vh-100 d-flex justify-content-center align-items-center">
            <div className="row justify-content-center w-100 mb-5">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <h1 className="card-title text-center">Bem-vindo.</h1>
                            <form onSubmit={handleSubmit(realizaLogin)}>
                                <Controller
                                    name="emailUsuario"
                                    control={control}
                                    defaultValue=""
                                    render={({ field }) => (
                                        <EntradaDeTexto
                                            label="Informe o seu e-mail:"
                                            id="email"
                                            tipoDeTexto="email"
                                            textoPlaceholder='Insira seu e-mail:'
                                            estilos="w-100 my-2 border-0 py-2"
                                            valor={field.value}
                                            mudancaDeValor={field.onChange}
                                        />
                                    )}
                                    rules={{ required: 'O e-mail é obrigatório' }}
                                />
                                {errors.emailUsuario && <p>{errors.emailUsuario.message}</p>}

                                <Controller
                                    name="senhaUsuario"
                                    control={control}
                                    defaultValue=""
                                    render={({ field }) => (
                                        <EntradaDeTexto
                                            label="Informe a sua senha:"
                                            id="senha"
                                            tipoDeTexto="password"
                                            textoPlaceholder='Insira sua senha:'
                                            estilos="w-100 my-2 border-0 py-2"
                                            valor={field.value}
                                            mudancaDeValor={field.onChange}
                                        />
                                    )}
                                    rules={{ required: 'A senha é obrigatória' }}
                                />
                                {errors.senhaUsuario && <p>{errors.senhaUsuario.message}</p>}

                                <button type="submit" className="btn btn-success w-100 mt-3">
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