import React from 'react';
import { useVisaoControllerInicio } from "./visaoControllerInicio";
import { CardProduto } from '../../componentes/CardProduto/CardProduto';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


export const TelaInicio: React.FC = () => {
    const { produtosCadastrados, deletarProduto, vaiParaTelaDeCadastroProdutoEdicao, jsxElement } = useVisaoControllerInicio();

    return (
        <main>
            <section>
                <div className="container-fluid">
                    <Row xs={1} sm={2} md={3} className="g-3 p-4 align-center">
                        {produtosCadastrados && produtosCadastrados.length > 0 ? (
                            produtosCadastrados.map((item) => (
                                <Col key={item.chavePrimaria_idProduto} className='d-flex justify-content-center'>
                                    <CardProduto
                                        nomeProduto={item.nomeProduto}
                                        descricaoProduto={item.descricaoProduto}
                                        precoProduto={item.precoProduto}
                                        urlImagemProduto={item.urlImagemProduto}
                                        quantidadeProduto={item.quantidadeProduto}
                                        tamanhoProduto={item.tamanhoProduto}
                                        tipoProduto={item.tipoProduto}
                                        acaoDeletar={() => deletarProduto(item.chavePrimaria_idProduto!)}
                                        vaiParaTelaDeEdicao={() => vaiParaTelaDeCadastroProdutoEdicao(item)}
                                        chavePrimaria_idProduto={item.chavePrimaria_idProduto}
                                    />
                                </Col>
                            ))
                        ) : (
                            <Row className="m-auto h-100">
                                <Col xs="auto">
                                    <div className="text-center">
                                        {jsxElement}
                                    </div>
                                </Col>
                            </Row>
                        )}
                    </Row>
                </div>
            </section>
        </main>
    );
}