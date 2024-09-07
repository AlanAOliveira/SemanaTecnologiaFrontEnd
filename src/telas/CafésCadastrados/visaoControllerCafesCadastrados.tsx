import { useEffect, useState } from "react";
import { InterfaceProdutos } from "../../interfaces/interfaceDeProdutos";
import { useAutenticacao } from "../../contexts/useAutenticacao";
import { useEstaNaTela } from "../../hook/useEstaNaTela";
import { visaoModeloProduto } from "../../modelos/produto/visaoModeloProduto";
import { useNavigate } from "react-router-dom";


export const useVisaoControllerCafesCadastrados = () => {
    const [produtosCadastrados, setProdutosCadastrados] = useState<InterfaceProdutos[] | false>([]);
    const [jsxElement, setJsxElement] = useState<JSX.Element | null>(null);
    const { tokenJWT } = useAutenticacao();
    const estaNaTela = useEstaNaTela();
    const objVisaoModeloProdutos = new visaoModeloProduto();
    const navegacao = useNavigate();

    

    return {
        produtosCadastrados,
        jsxElement
    }
}