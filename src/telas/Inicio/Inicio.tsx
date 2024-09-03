import React from 'react';
import { MenuSuperior } from '../../componentes/MenuSuperior/MenuSuperior';
import { useVisaoControllerInicio } from "./visaoControllerInicio";
import { CardProduto } from '../../componentes/CardProduto/CardProduto';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export const TelaInicio: React.FC = () => {
    const { produtosCadastrados } = useVisaoControllerInicio();
    console.log(produtosCadastrados);


    return (
        <main>
            <MenuSuperior />
            <div className="container-fluid">
                <Row xs={1} sm={2} md={3} className="g-3 bg-danger p-4 align-center">
                    {produtosCadastrados && produtosCadastrados.length > 0 && produtosCadastrados.map((item) => (
                        <Col key={item.chavePrimaria_idProduto} className='d-flex justify-content-center'>
                            <CardProduto
                                nomeProduto={item.nomeProduto}
                                descricaoProduto={item.descricaoProduto}
                                precoProduto={item.precoProduto}
                                urlImagemProduto={item.urlImagemProduto}
                                quantidadeProduto={item.quantidadeProduto}
                                tamanhoProduto={item.tamanhoProduto}
                                tipoProduto={item.tipoProduto}
                                key={item.chavePrimaria_idProduto}
                            />
                        </Col>
                    ))}
                </Row>
            </div>

        </main>
    );
}