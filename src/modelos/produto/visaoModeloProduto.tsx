import { Produto } from "./modeloProduto";
import { InterfaceProdutos } from "../../interfaces/interfaceDeProdutos";
import { InterfaceTokenResponse } from "../../interfaces/interfaceDeUsuario";
import { ListarProdutoResponse } from "../../interfaces/interfaceDeProdutos";
import imagemAperitivos from "../../assets/imagemAperitivos.png";
import imagemCafes from "../../assets/imagemCafes.png";
import imagemHome from "../../assets/imagemHome.png";

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

    async listarProdutos(tokenJWT: InterfaceTokenResponse, tipoProduto?: string): Promise<ListarProdutoResponse | false> {
        const produtos = await this.produto.listarProduto(tokenJWT, tipoProduto);

        if (produtos) {
            if (produtos.length === 0) {
                let jsx: JSX.Element | null = null;

                if (tipoProduto?.includes("CAFE")) {
                    jsx = (
                        <section className="d-flex flex-column">
                            <h2>Não existem cafés cadastrados.</h2>
                            <div style={{ alignItems: 'center' }} className="img-fluid">
                                <img
                                    src={imagemCafes}
                                    alt="Imagem de café"
                                    className="img-fluid"
                                />
                            </div>
                        </section>
                    );
                } else if (tipoProduto?.includes("APERITIVO")) {
                    jsx = (
                        <section className="d-flex flex-column">
                            <h2>Não existem aperitivos cadastrados.</h2>
                            <div style={{ alignItems: 'center' }} className="img-fluid">
                                <img
                                    src={imagemAperitivos}
                                    alt="Imagem de aperitivo"
                                    className="img-fluid"
                                />
                            </div>
                        </section>
                    );
                } else {
                    jsx = (
                        <section className="d-flex flex-column">
                            <h2>Cadastre novos produtos.</h2>
                            <div style={{ alignItems: 'center' }}>
                                <img
                                    src={imagemHome}
                                    alt="Imagem de hamburguer"
                                    className="img-fluid"
                                />
                            </div>
                        </section>
                    );
                }
                return {
                    jsx: jsx,
                    produtos: [],
                };
            } else {
                return {
                    jsx: null,
                    produtos: produtos,
                };
            }

        } else {
            return false;
        }
    }
}
