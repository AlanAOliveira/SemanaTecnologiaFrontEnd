import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { InterfaceProdutos } from "../../interfaces/interfaceDeProdutos";
import { useDesign } from '../../contexts/useDesign';

interface InterfaceProdutoAcoes extends InterfaceProdutos {
    acaoDeletar?: (id: number) => void;
    vaiParaTelaDeEdicao?: (objProdutoSelecionado: InterfaceProdutos) => void;
}

export const CardProduto: React.FC<InterfaceProdutoAcoes> = (props) => {
    const { paletaCores } = useDesign();
    const precoFormatado = `R$ ${props.precoProduto.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img
                variant="top"
                src={props.urlImagemProduto}
                style={{ width: '100%', height: '20vh', maxHeight: '25vh', objectFit: 'cover' }}
            />
            <Card.Body>
                <Card.Title style={{ textAlign: 'center', fontWeight: 'bold' }}>{props.nomeProduto}</Card.Title>
                <Card.Text style={{ textAlign: 'justify' }}>
                    {props.descricaoProduto}
                </Card.Text>
                <div className='d-flex flex-column gap-2'>
                    <p className='fw-bold text-center h4' style={{ color: paletaCores.marromTerciario, fontWeight: 'bold' }}>{precoFormatado}</p>
                    <Button style={{ backgroundColor: paletaCores.marromPrimario, color: paletaCores.corFontePrimaria, borderColor: paletaCores.corFontePrimaria }} onClick={() => { if (props.vaiParaTelaDeEdicao) { props.vaiParaTelaDeEdicao(props) } }}>Ver produto</Button>
                    <Button style={{ backgroundColor: paletaCores.marromTerciario, color: paletaCores.corFontePrimaria, borderColor: paletaCores.corFontePrimaria, fontWeight: 'bold' }} onClick={() => { if (props.chavePrimaria_idProduto && props.acaoDeletar) { props.acaoDeletar(props.chavePrimaria_idProduto) } }}>Deletar</Button>
                </div>
            </Card.Body>
        </Card>
    );
}