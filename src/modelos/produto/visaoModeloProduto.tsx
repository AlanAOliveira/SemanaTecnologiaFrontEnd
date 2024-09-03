import { Produto } from "./modeloProduto";
import { InterfaceProdutos } from "../../interfaces/interfaceDeProdutos";
import { InterfaceTokenResponse } from "../../interfaces/interfaceDeUsuario";

export class visaoModeloProduto {
    private produto: Produto;

    constructor() {
        this.produto = new Produto();
    }

    async cadastrarNovoProduto(tokenJWT: InterfaceTokenResponse, dadosFormularioProduto: InterfaceProdutos): Promise<boolean> {
        return this.produto.cadastrarNovoProduto(tokenJWT, dadosFormularioProduto);
    }

    async deletarProduto(tokenJWT: InterfaceTokenResponse, idProduto: number): Promise<boolean> {
        return this.produto.deletarProduto(tokenJWT, idProduto);
    }

    async editarProduto(tokenJWT: InterfaceTokenResponse, idProduto: number, informacoesProduto: InterfaceProdutos): Promise<boolean> {
        return this.produto.editarProduto(tokenJWT, idProduto, informacoesProduto);
    }

    async listarProdutoPeloID(tokenJWT: InterfaceTokenResponse, idProduto: number): Promise<InterfaceProdutos | false> {
        return this.produto.listarProdutoPeloID(tokenJWT, idProduto);
    }

    async listarProdutos(tokenJWT: InterfaceTokenResponse, tipoProduto?: string): Promise<InterfaceProdutos[] | false> {
        return this.produto.listarProduto(tokenJWT, tipoProduto);
    }
}
