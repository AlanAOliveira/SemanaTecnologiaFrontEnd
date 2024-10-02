import { useState, useEffect } from "react";
import { useAutenticacao } from "../../contexts/useAutenticacao";
import { InterfaceProdutos } from "../../interfaces/interfaceDeProdutos";
import { visaoModeloProduto } from "../../modelos/produto/visaoModeloProduto";
import { useEstaNaTela } from "../../hook/useEstaNaTela";
import { useNavigate } from "react-router-dom";

export const useVisaoControllerInicio = () => {
    const [produtosCadastrados, setProdutosCadastrados] = useState<InterfaceProdutos[] | false>([]);
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
                const response = await objVisaoModeloProdutos.listarProdutos(tokenJWT);
                if (response !== false) {
                    setProdutosCadastrados(response.produtos);
                    setJsxElement(response.jsx);
                } else {
                    setProdutosCadastrados([]);
                }
            } catch (error) {
                console.error('Erro ao buscar produtos:', error);
            }
        }
    };

    const deletarProduto = async (id: number) => {
        if (tokenJWT) {
            if (await objVisaoModeloProdutos.deletarProduto(tokenJWT, id)) {
                setProdutosCadastrados(produtosDoEstado => {
                    if (produtosDoEstado === false) {
                        return false;
                    }
                    buscaInformacoes();
                    return produtosDoEstado.filter(produto => produto.chavePrimaria_idProduto !== id);
                });
            }
        };
    }

    const vaiParaTelaDeCadastroProdutoEdicao = async (objetoParaEdicao: InterfaceProdutos) => {
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
        produtosCadastrados,
        deletarProduto,
        vaiParaTelaDeCadastroProdutoEdicao,
        jsxElement
    };
};
