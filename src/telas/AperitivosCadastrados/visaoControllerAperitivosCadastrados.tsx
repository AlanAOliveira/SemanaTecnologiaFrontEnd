import { useNavigate } from "react-router-dom";
import { useAutenticacao } from "../../contexts/useAutenticacao";
import { useEstaNaTela } from "../../hook/useEstaNaTela";
import { visaoModeloProduto } from "../../modelos/produto/visaoModeloProduto";
import { useEffect, useState } from "react";
import { InterfaceProdutos } from "../../interfaces/interfaceDeProdutos";
import { TipoProduto } from '../../Enum/EnumTipoProduto';

export const useVisaoControllerAperitivosCadastrados = () => {
    const [aperitivosCadastrados, setAperitivosCadastrados] = useState<InterfaceProdutos[] | false>([]);
    const [jsxElement, setJsxElement] = useState<JSX.Element | null>(null);

    const { tokenJWT } = useAutenticacao();
    const estaNaTela = useEstaNaTela();
    const objVisaoModeloProdutos = new visaoModeloProduto();
    const navegacao = useNavigate();

    useEffect(() => {
        buscaInformacoes();
    }, [estaNaTela, tokenJWT]);

    const buscaInformacoes = async () => {
        if (tokenJWT) {
            try {
                const response = await objVisaoModeloProdutos.listarProdutos(tokenJWT, TipoProduto.APERITIVO);
                if (response !== false) {
                    setAperitivosCadastrados(response.produtos);
                    setJsxElement(response.jsx);
                } else {
                    setAperitivosCadastrados([]);
                }
            } catch (error) {
                console.error('Erro ao buscar produtos:', error);
            }
        }
    };

    const deletarAperitivo = async (id: number) => {
        if (tokenJWT) {
            if (await objVisaoModeloProdutos.deletarProduto(tokenJWT, id)) {
                setAperitivosCadastrados(produtosDoEstado => {
                    if (produtosDoEstado === false) {
                        return false;
                    }
                    buscaInformacoes();
                    return produtosDoEstado.filter(produto => produto.chavePrimaria_idProduto !== id);
                });
            }
        };
    }

    const vaiParaTelaDeEdicaoProduto = async (objetoParaEdicao: InterfaceProdutos) => {
        if (tokenJWT) {
            if (objetoParaEdicao.chavePrimaria_idProduto) {
                const produtoSelecionado = await objVisaoModeloProdutos.listarProdutoPeloID(tokenJWT, objetoParaEdicao.chavePrimaria_idProduto);
                navegacao('/cadastroDeProduto', {
                    state: { ehEdicao: true, editarObjeto: produtoSelecionado }
                });
            }
        }
    }

    return {
        aperitivosCadastrados,
        jsxElement, deletarAperitivo,
        vaiParaTelaDeEdicaoProduto
    }
}