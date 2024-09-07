export interface InterfaceDadosFormularioCadastro {
    nomeUsuario: string;
    sobrenomeUsuario: string;
    emailUsuario: string;
    senhaUsuario: string;
}

export interface InterfaceDadosFormularioLogin {
    emailUsuario: string;
    senhaUsuario: string;
}

export interface InterfaceFormularioDeCadastroDeProdutos {
    nomeProduto: string;
    precoProduto: string;
    quantidadeProduto: string;
    urlImagemProduto: string;
    tipoProduto: string;
    tamanhoProduto: string;
    descricaoProduto: string;
}