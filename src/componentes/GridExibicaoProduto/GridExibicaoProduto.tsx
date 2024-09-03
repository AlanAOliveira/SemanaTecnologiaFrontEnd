import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { CardProduto } from '../CardProduto/CardProduto';
import { InterfaceProdutos } from "../../interfaces/interfaceDeProdutos";

interface ArrayObjetosProdutos {
    arrayObjetosProdutos: InterfaceProdutos[] | false;
}

export const GridExibicaoProduto: React.FC<ArrayObjetosProdutos> = (props) => {
    const { arrayObjetosProdutos } = props;

    return (
        <div className="container-fluid">
            <Row xs={1} sm={2} md={3} className="g-3 p-4 align-center">
                {arrayObjetosProdutos && Array.isArray(arrayObjetosProdutos) && arrayObjetosProdutos.length > 0 && arrayObjetosProdutos.map((item) => (
                    <Col key={item.chavePrimaria_idProduto} className='d-flex justify-content-center'>
                        <CardProduto
                            nomeProduto={item.nomeProduto}
                            descricaoProduto={item.descricaoProduto}
                            precoProduto={item.precoProduto}
                            urlImagemProduto={item.urlImagemProduto}
                            quantidadeProduto={item.quantidadeProduto}
                            tamanhoProduto={item.tamanhoProduto}
                            tipoProduto={item.tipoProduto}
                        />
                    </Col>
                ))}
            </Row>
        </div>
    );
}
