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
                   
                    </Row>
                </div>
            </section>
        </main>
    );
}