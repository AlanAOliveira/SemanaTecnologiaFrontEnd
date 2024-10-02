import React from 'react';
import { useVisaoControllerCafesCadastrados } from '../CafésCadastrados/visaoControllerCafesCadastrados';
import { Col, Row } from 'react-bootstrap';
import { CardProduto } from '../../componentes/CardProduto/CardProduto';


export const TelaCafesCadastrados: React.FC = () => {
    const { cafesCadastrados, componenteJSX, deletarCafe, vaiParaTelaDeEdicaoProduto } = useVisaoControllerCafesCadastrados();

    return (
        <section>
            <div className="container-fluid">
                <Row xs={1} sm={2} md={3} className="g-3 p-4 align-center">
                    {cafesCadastrados && cafesCadastrados.length > 0 ? (
                        cafesCadastrados.map((item) => (
                            <Col key={item.chavePrimaria_idProduto} className='d-flex justify-content-center'>
                                <CardProduto
                                    nomeProduto={item.nomeProduto}
                                    descricaoProduto={item.descricaoProduto}
                                    precoProduto={item.precoProduto}
                                    urlImagemProduto={item.urlImagemProduto}
                                    quantidadeProduto={item.quantidadeProduto}
                                    tamanhoProduto={item.tamanhoProduto}
                                    tipoProduto={item.tipoProduto}
                                    acaoDeletar={() => deletarCafe(item.chavePrimaria_idProduto!)}
                                    vaiParaTelaDeEdicao={() => vaiParaTelaDeEdicaoProduto(item)}
                                    chavePrimaria_idProduto={item.chavePrimaria_idProduto}
                                />
                            </Col>
                        ))
                    ) : (
                        <Row className="m-auto h-100">
                            <Col xs="auto">
                                <div className="text-center">
                                    {componenteJSX}
                                </div>
                            </Col>
                        </Row>
                    )}
                </Row>
            </div>
        </section>
    );
}