import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { InterfaceProdutos } from "../../interfaces/interfaceDeProdutos";

export const CardProduto: React.FC<InterfaceProdutos> = (props) => {
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
                    <Button variant="primary">{precoFormatado}</Button>
                    <Button variant="primary">Editar</Button>
                </div>
            </Card.Body>
        </Card>
    );
}