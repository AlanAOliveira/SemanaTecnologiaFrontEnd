import { useEffect, useState } from "react";
import { InterfaceProdutos } from "../../interfaces/interfaceDeProdutos";
import { useAutenticacao } from "../../contexts/useAutenticacao";
import { useEstaNaTela } from "../../hook/useEstaNaTela";
import { visaoModeloProduto } from "../../modelos/produto/visaoModeloProduto";
import { useNavigate } from "react-router-dom";


export const useVisaoControllerCafesCadastrados = () => {
    const [cafesCadastrados, setCafesCadastrados] = useState<InterfaceProdutos[] | false>([]);
    const [componenteJSX, setComponenteJSX] = useState<JSX.Element | null>(null);

    const { tokenJWT } = useAutenticacao();
    const estaNaTela = useEstaNaTela();
    const objVisaoModeloProdutos = new visaoModeloProduto();
    const navegacao = useNavigate();

    useEffect(() => {
        const buscaInformacoes = async () => {
            if (tokenJWT) {
                try {
                    const cafesResponse = await objVisaoModeloProdutos.listarProdutos(tokenJWT, "CAFE");
                    if (cafesResponse !== false) {
                        setCafesCadastrados(cafesResponse.produtos);
                        setComponenteJSX(cafesResponse.jsx);
                    } else {
                        setCafesCadastrados([]);
                    }
                } catch (error) {
                    console.error('Erro ao buscar produtos:', error);
                }
            }
        };

        buscaInformacoes();
    }, [estaNaTela, tokenJWT]);

    return {
        cafesCadastrados,
        componenteJSX
    }
}