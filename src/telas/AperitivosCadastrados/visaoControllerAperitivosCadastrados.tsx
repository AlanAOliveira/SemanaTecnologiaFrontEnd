import { useNavigate } from "react-router-dom";
import { useAutenticacao } from "../../contexts/useAutenticacao";
import { useEstaNaTela } from "../../hook/useEstaNaTela";
import { visaoModeloProduto } from "../../modelos/produto/visaoModeloProduto";
import { useEffect, useState } from "react";
import { InterfaceProdutos } from "../../interfaces/interfaceDeProdutos";

export const useVisaoControllerAperitivosCadastrados = () => {
    const [aperitivosCadastrados, setProdutosCadastrados] = useState<InterfaceProdutos[] | false>([]);
    const [jsxElement, setJsxElement] = useState<JSX.Element | null>(null);

    const { tokenJWT } = useAutenticacao();
    const estaNaTela = useEstaNaTela();
    const objVisaoModeloProdutos = new visaoModeloProduto();
    const navegacao = useNavigate();

    useEffect(() => {
        const buscaInformacoes = async () => {
            if (tokenJWT) {
                try {
                    const response = await objVisaoModeloProdutos.listarProdutos(tokenJWT, "APERITIVO");
                    console.log(response)
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

        buscaInformacoes();
    }, [estaNaTela, tokenJWT]);

    return {
        aperitivosCadastrados,
        jsxElement
    }
}