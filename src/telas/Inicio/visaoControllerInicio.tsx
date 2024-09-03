import { useState, useEffect } from "react";
import { useAutenticacao } from "../../contexts/useAutenticacao";
import { InterfaceProdutos } from "../../interfaces/interfaceDeProdutos";
import { InterfaceTokenResponse } from "../../interfaces/interfaceDeUsuario";
import { visaoModeloProduto } from "../../modelos/produto/visaoModeloProduto";

export const useVisaoControllerInicio = () => {
    const [produtosCadastrados, setProdutosCadastrados] = useState<InterfaceProdutos[] | false>([]);
    const [isFocused, setIsFocused] = useState(true);
    const { tokenJWT } = useAutenticacao();
    const objVisaoModeloProdutos = new visaoModeloProduto();

    useEffect(() => {
        const handleFocus = () => setIsFocused(true);
        const handleBlur = () => setIsFocused(false);

        window.addEventListener("focus", handleFocus);
        window.addEventListener("blur", handleBlur);

        return () => {
            window.removeEventListener("focus", handleFocus);
            window.removeEventListener("blur", handleBlur);
        };
    }, []);

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
    }, [isFocused]);

    return {
        produtosCadastrados
    };
};
