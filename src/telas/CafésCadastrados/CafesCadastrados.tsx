import React from 'react';
import { useVisaoControllerInicio } from '../Inicio/visaoControllerInicio';
import { Col, Row } from 'react-bootstrap';
import { CardProduto } from '../../componentes/CardProduto/CardProduto';


export const TelaCafesCadastrados: React.FC = () => {
    const { produtosCadastrados, jsxElement } = useVisaoControllerInicio();

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