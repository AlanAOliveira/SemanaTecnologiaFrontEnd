import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { InterfaceProdutos } from "../../interfaces/interfaceDeProdutos";

interface InterfaceProdutoAcoes extends InterfaceProdutos {
    acaoDeletar?: (id: number) => void;
    vaiParaTelaDeEdicao?: (objProdutoSelecionado: InterfaceProdutos) => void;
}

export const CardProduto: React.FC<InterfaceProdutoAcoes> = (props) => {
    const precoFormatado = `R$ ${props.precoProduto.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img
                variant="top"
                src={props.urlImagemProduto}
                style={{ width: '100%', height: '20vh', maxHeight: '25vh', objectFit: 'cover' }}
            />
            <Card.Body>
                <Card.Title>{props.nomeProduto}</Card.Title>
                <Card.Text>
                    {props.descricaoProduto}
                </Card.Text>
                <div className='d-flex flex-column gap-2'>
                    <p className='fw-bold text-center h4'>{precoFormatado}</p>
                    <Button variant="primary" onClick={() => { if (props.vaiParaTelaDeEdicao) { props.vaiParaTelaDeEdicao(props) } }}>Ver produto</Button>
                    <Button variant="danger" onClick={() => { if (props.chavePrimaria_idProduto && props.acaoDeletar) { props.acaoDeletar(props.chavePrimaria_idProduto) } }}>Deletar</Button>
                </div>
            </Card.Body>
        </Card>
    );
}