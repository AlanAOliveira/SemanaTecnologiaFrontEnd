import { useState, useEffect } from "react";
import { useAutenticacao } from "../../contexts/useAutenticacao";
import { InterfaceProdutos } from "../../interfaces/interfaceDeProdutos";
import { InterfaceTokenResponse } from "../../interfaces/interfaceDeUsuario";
import { visaoModeloProduto } from "../../modelos/produto/visaoModeloProduto";
import { useEstaNaTela } from "../../hook/useEstaNaTela";

export const useVisaoControllerInicio = () => {
    const [produtosCadastrados, setProdutosCadastrados] = useState<InterfaceProdutos[] | false>([]);
    const { tokenJWT } = useAutenticacao();
    const estaNaTela = useEstaNaTela();
    const objVisaoModeloProdutos = new visaoModeloProduto();

    useEffect(() => {
        const buscaProdutosCadastrados = async (token: InterfaceTokenResponse) => {
            if (token) {
                const produtos = await objVisaoModeloProdutos.listarProdutos(token, "CAFE");
                setProdutosCadastrados(produtos);
            }
        };

        if (tokenJWT) {
            buscaProdutosCadastrados(tokenJWT);
        }
    }, [produtosCadastrados, estaNaTela]);

    const deletarProduto = async (id: number) => {
        if (tokenJWT) {
            await objVisaoModeloProdutos.deletarProduto(tokenJWT, id);

        };
    }

    return {
        produtosCadastrados,
        deletarProduto
    };
};
