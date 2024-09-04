import React from 'react';
import { EntradaDeTexto } from '../../componentes/EntradaDeTexto/EntradaDeTexto';
import { AreaDeTexto } from '../../componentes/AreaDeTexto/AreaDeTexto';
import { CaixaDeCombinacao } from '../../componentes/CaixaDeCombinacao/CaixaDeCombinacao';

export const TelaCadastroDeProduto: React.FC = () => {
    const opcoesProdutos = ['Grande', 'Medio', 'Pequeno'];

    return (
        <main>
            <section>
                <div className="container vh-100 d-flex justify-content-center align-items-center">
                    <div className="row justify-content-center w-100 mb-5">
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-body">
                                    <h2 className="card-title text-center">Registre novos produtos.</h2>
                                    <form>
                                        <EntradaDeTexto
                                            tipoDeTexto="text"
                                            textoPlaceholder='Nome do produto:'
                                            estilos="w-100 my-2 border-0 py-2 border-0 g-4"
                                        //valor={emailUsuario}
                                        //mudancaDeValor={(e) => setEmailUsuario(e.target.value)}
                                        />
                                        <EntradaDeTexto
                                            tipoDeTexto="text"
                                            textoPlaceholder='Preço do produto:'
                                            estilos="w-100 my-2 border-0 py-2 g-4"
                                        //valor={senhaUsuario}
                                        //mudancaDeValor={(e) => setSenhaUsuario(e.target.value)}
                                        />
                                        <EntradaDeTexto
                                            tipoDeTexto="text"
                                            textoPlaceholder='Quantidade solicitada:'
                                            estilos="w-100 my-2 border-0 py-2 g-4"
                                        //valor={senhaUsuario}
                                        //mudancaDeValor={(e) => setSenhaUsuario(e.target.value)}
                                        />

                                        <EntradaDeTexto
                                            tipoDeTexto="text"
                                            textoPlaceholder='URL da imagem:'
                                            estilos="w-100 my-2 border-0 py-2 g-4"
                                        //valor={senhaUsuario}
                                        //mudancaDeValor={(e) => setSenhaUsuario(e.target.value)}
                                        />
                                        <CaixaDeCombinacao
                                            placeholder='Selecione o tamanho do produto'
                                            label='Tipo de produto:'
                                            opcoes={opcoesProdutos}
                                            id='1'
                                            estilos='w-100 my-2 border-0 py-2 g-4'
                                        />
                                        <CaixaDeCombinacao
                                            placeholder='Selecione o tamanho do produto'
                                            label='Tamanho:'
                                            opcoes={opcoesProdutos}
                                            id='1'
                                            estilos='w-100 my-2 border-0 py-2 g-4'
                                        />
                                        <AreaDeTexto
                                            textoPlaceholder='Descrição do produto'
                                            tipoDeTexto='text'
                                            estilos='w-100 my-2 border-0 py-2 g-4'
                                        />
                                        <button type="submit" className="btn btn-success w-100 mt-3" /*onClick={handleRealizaLogin}*/>
                                            Cadastrar produto.
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}