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
        
    };

    const deletarProduto = async (id: number) => {
        
    }

    const vaiParaTelaDeCadastroProdutoEdicao = async (objetoParaEdicao: InterfaceProdutos) => {
        
    }

    return {
        produtosCadastrados,
        deletarProduto,
        vaiParaTelaDeCadastroProdutoEdicao,
        jsxElement
    };
};
