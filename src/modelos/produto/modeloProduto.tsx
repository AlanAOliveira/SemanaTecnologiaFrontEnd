
import { api } from "../../services/api";
import { InterfaceProdutos } from "../../interfaces/interfaceDeProdutos";
import { InterfaceTokenResponse } from "../../interfaces/interfaceDeUsuario";

export class Produto {
    async cadastrarNovoProduto(tokenJWT: InterfaceTokenResponse, dadosFormularioProduto: InterfaceProdutos): Promise<boolean> {
        try {
            await api.post("nativeCoffe/produto", dadosFormularioProduto, {
                headers: { Authorization: `Bearer ${tokenJWT}` },
            });
            return true;
        } catch (error) {
            console.log("Erro ao cadastrar produto: ", JSON.stringify(error));
            return false;
        }
    }

    async deletarProduto(tokenJWT: InterfaceTokenResponse, idProduto: number): Promise<boolean> {
        try {
            await api.delete(`/nativeCoffe/produto/${idProduto}`, {
                headers: { Authorization: `Bearer ${tokenJWT}` },
            });

            return true;
        } catch (error) {
            console.log("Erro ao deletar produto: ", JSON.stringify(error));
            return false;
        }
    }

    async editarProduto(tokenJWT: InterfaceTokenResponse, idProduto: number, informacoesProduto: InterfaceProdutos): Promise<boolean> {
        try {
            await api.put(`/nativeCoffe/produto/${idProduto}`, informacoesProduto, {
                headers: { Authorization: `Bearer ${tokenJWT}` },
            });

            return true;
        } catch (error) {
            console.log("Erro ao editar produto: ", JSON.stringify(error));
            return false;
        }
    }

    async listarProdutoPeloID(tokenJWT: InterfaceTokenResponse, idProduto: number): Promise<InterfaceProdutos | false> {
        try {
            const produtoSelecionado = await api.get<InterfaceProdutos>(`/nativeCoffe/produto/${idProduto}`, {
                headers: { Authorization: `Bearer ${tokenJWT}` },
            });

            return produtoSelecionado.data;
        } catch (error) {
            console.log("Erro ao listar produto pelo ID: ", JSON.stringify(error));
            return false;
        }
    }

    async listarProduto(tokenJWT: InterfaceTokenResponse, tipoProduto?: String): Promise<InterfaceProdutos[] | false> {
        try {
            let url = "/nativeCoffe/produto";
            if (tipoProduto) {
                url = `/nativeCoffe/produto?tipo=${tipoProduto}`
            }
            
            const produtos = await api.get<InterfaceProdutos[]>(url, {
                headers: { Authorization: `Bearer ${tokenJWT}` },
            });

            return produtos.data;
        } catch (error) {
            console.log("Erro ao listar produto: ", JSON.stringify(error));
            return false;
        }
    }
}
