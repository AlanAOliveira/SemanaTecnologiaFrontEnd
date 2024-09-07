export interface InterfaceProdutos {
    chavePrimaria_idProduto?: number;
    nomeProduto: string;
    precoProduto: number;
    descricaoProduto: string;
    tamanhoProduto: string;
    quantidadeProduto: number;
    tipoProduto: string;
    urlImagemProduto: string;
}

export interface ListarProdutoResponse {
    jsx: JSX.Element | null;
    produtos: InterfaceProdutos[];
}