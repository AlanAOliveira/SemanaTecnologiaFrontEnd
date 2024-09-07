import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { CardProduto } from '../../componentes/CardProduto/CardProduto';
import { useVisaoControllerAperitivosCadastrados } from './visaoControllerAperitivosCadastrados';


export const TelaAperitivosCadastrados: React.FC = () => {
    const { aperitivosCadastrados, jsxElement } = useVisaoControllerAperitivosCadastrados();
    
    return (
        <main>
            <section>
                <div className="container-fluid">
                    <Row xs={1} sm={2} md={3} className="g-3 p-4 align-center">
                        {aperitivosCadastrados && aperitivosCadastrados.length > 0 ? (
                            aperitivosCadastrados.map((item) => (
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