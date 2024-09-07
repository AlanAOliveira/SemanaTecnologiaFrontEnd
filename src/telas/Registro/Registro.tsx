import React from 'react';
import { EntradaDeTexto } from '../../componentes/EntradaDeTexto/EntradaDeTexto';
import { useVisaoControllerRegistro } from './visaoControllerRegistro';
import { Controller } from 'react-hook-form';

export const TelaRegistro: React.FC = () => {
    const { control, errors, handleSubmit, realizaCadastro } = useVisaoControllerRegistro();

    return (
        <div className="container vh-100 d-flex justify-content-center align-items-center">
            <div className="row justify-content-center w-100 mb-5">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <h1 className="card-title text-center">Bem-vindo ao Native Coffee.</h1>
                            <form onSubmit={handleSubmit(realizaCadastro)}>
                                <Controller
                                    name="nomeUsuario"
                                    control={control}
                                    defaultValue=""
                                    render={({ field }) => (
                                        <EntradaDeTexto
                                            label="Informe o seu primeiro nome:"
                                            id="primeiroNome"
                                            tipoDeTexto="text"
                                            textoPlaceholder='Insira o seu primeiro nome:'
                                            estilos="w-100 my-2 border-0 py-2"
                                            valor={field.value}
                                            mudancaDeValor={field.onChange}
                                        />
                                    )}
                                    rules={{ required: 'O primeiro nome é obrigatório' }}
                                />
                                {errors.nomeUsuario && <p>{errors.nomeUsuario.message}</p>}

                                <Controller
                                    name="sobrenomeUsuario"
                                    control={control}
                                    defaultValue=""
                                    render={({ field }) => (
                                        <EntradaDeTexto
                                            label="Informe o seu último nome:"
                                            id="ultimoNome"
                                            tipoDeTexto="text"
                                            textoPlaceholder='Insira o seu último nome:'
                                            estilos="w-100 my-2 border-0 py-2"
                                            valor={field.value}
                                            mudancaDeValor={field.onChange}
                                        />
                                    )}
                                    rules={{ required: 'O último nome é obrigatório' }}
                                />
                                {errors.sobrenomeUsuario && <p>{errors.sobrenomeUsuario.message}</p>}

                                <Controller
                                    name="emailUsuario"
                                    control={control}
                                    defaultValue=""
                                    render={({ field }) => (
                                        <EntradaDeTexto
                                            label="Informe o seu e-mail:"
                                            id="email"
                                            tipoDeTexto="email"
                                            textoPlaceholder='Insira o seu e-mail:'
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
                                            textoPlaceholder='Crie a sua senha:'
                                            estilos="w-100 my-2 border-0 py-2"
                                            valor={field.value}
                                            mudancaDeValor={field.onChange}
                                        />
                                    )}
                                    rules={{ required: 'A senha é obrigatória' }}
                                />
                                {errors.senhaUsuario && <p>{errors.senhaUsuario.message}</p>}

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