import React from "react";
import { Controller } from "react-hook-form";
import { CaixaDeCombinacao } from "../CaixaDeCombinacao/CaixaDeCombinacao";
import { AreaDeTexto } from "../AreaDeTexto/AreaDeTexto";
import { EntradaDeTexto } from "../EntradaDeTexto/EntradaDeTexto";
import { tipoSelecaoComboBox } from "../../type/tipoSelecaoComboBox";
import { InterfaceFormularioDeCadastroDeProdutos } from "../../interfaces/interfaceDeRegistros";
import { useDesign } from "../../contexts/useDesign";

interface FormularioCadastroProdutoProps {
    onSubmit: (dados: any) => void;
    opcoesDeTamanhoProduto: tipoSelecaoComboBox;
    opcoesDeTipoProduto: tipoSelecaoComboBox;
    control: any;
    errors: any;
    ehEdicao: boolean;
    valoresDosInputsIniciais: InterfaceFormularioDeCadastroDeProdutos
}

export const FormularioCadastroProduto: React.FC<FormularioCadastroProdutoProps> = ({
    onSubmit,
    opcoesDeTamanhoProduto,
    opcoesDeTipoProduto,
    control,
    errors,
    ehEdicao,
    valoresDosInputsIniciais
}) => {
    const { paletaCores } = useDesign();

    return (
        <div className="container vh-80 d-flex justify-content-center align-items-center mt-3">
            <div className="row justify-content-center w-100 mb-5">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <h2 className="card-title text-center" style={{ color: paletaCores.marromTerciario }}>
                                {ehEdicao ? 'Edite o produto' : 'Registre novos produtos.'}
                            </h2>
                            <form id="formularioCadastro" onSubmit={onSubmit}>
                                <Controller
                                    name="nomeProduto"
                                    control={control}
                                    defaultValue={ehEdicao ? valoresDosInputsIniciais.nomeProduto : ""}
                                    render={({ field: { value, onChange } }) => (
                                        <EntradaDeTexto
                                            label="Nome produto"
                                            id="nomeProduto"
                                            valor={value}
                                            tipoDeTexto="text"
                                            textoPlaceholder="Nome do produto:"
                                            estilos="w-100 my-2 py-2 g-4"
                                            mudancaDeValor={(e) => onChange(e.target.value)}
                                        />
                                    )}
                                />
                                {errors.nomeProduto && <p>{errors.nomeProduto.message}</p>}

                                <Controller
                                    name="precoProduto"
                                    control={control}
                                    defaultValue={ehEdicao ? parseFloat(valoresDosInputsIniciais.precoProduto).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) : ""}
                                    render={({ field: { value, onChange } }) => (
                                        <EntradaDeTexto
                                            label="Preço do produto"
                                            id="precoProduto"
                                            valor={value}
                                            tipoDeTexto="text"
                                            textoPlaceholder="Preço do produto:"
                                            estilos="w-100 my-2 py-2 g-4"
                                            mudancaDeValor={(e) => {
                                                let valor = e.target.value;
                                                valor = valor.replace(/[^0-9,.]/g, "");
                                                const valorNumerico = parseFloat(valor.replace(",", "."));
                                                const valorFormatado = isNaN(valorNumerico)
                                                    ? ""
                                                    : new Intl.NumberFormat("pt-BR", {
                                                        style: "currency",
                                                        currency: "BRL",
                                                    }).format(valorNumerico);
                                                onChange(valorFormatado);
                                            }}
                                        />
                                    )}
                                />
                                {errors.precoProduto && <p>{errors.precoProduto.message}</p>}

                                <Controller
                                    name="quantidadeProduto"
                                    control={control}
                                    defaultValue={ehEdicao ? valoresDosInputsIniciais.quantidadeProduto : ""}
                                    render={({ field: { value, onChange } }) => (
                                        <EntradaDeTexto
                                            label="Quantidade de produto"
                                            id="qtdeProduto"
                                            valor={value}
                                            tipoDeTexto="number"
                                            textoPlaceholder="Quantidade solicitada:"
                                            estilos="w-100 my-2 py-2 g-4"
                                            mudancaDeValor={(e) => {
                                                const valor = Number(e.target.value);
                                                if (!isNaN(valor) && Number.isInteger(valor) && valor >= 0) {
                                                    onChange(valor);
                                                }
                                            }}

                                        />
                                    )}
                                />
                                {errors.quantidadeProduto && <p>{errors.quantidadeProduto.message}</p>}

                                <Controller
                                    name="urlImagemProduto"
                                    control={control}
                                    defaultValue={ehEdicao ? valoresDosInputsIniciais.urlImagemProduto : ""}
                                    render={({ field: { value, onChange } }) => (
                                        <EntradaDeTexto
                                            label="URL da imagem"
                                            id="url"
                                            valor={value}
                                            tipoDeTexto="text"
                                            textoPlaceholder="URL da imagem:"
                                            estilos="w-100 my-2 py-2 g-4"
                                            mudancaDeValor={(e) => onChange(e.target.value)}
                                        />
                                    )}
                                />
                                {errors.urlImagemProduto && <p>{errors.urlImagemProduto.message}</p>}

                                <Controller
                                    name="tipoProduto"
                                    control={control}
                                    defaultValue={ehEdicao ? valoresDosInputsIniciais.tipoProduto || "" : ""}
                                    render={({ field: { value, onChange } }) => (
                                        <CaixaDeCombinacao
                                            valorSelecionado={value}
                                            aoMudar={(e) => onChange(e.target.value)}
                                            placeholder="Selecione o tipo de produto"
                                            label="Tipo de produto:"
                                            opcoes={opcoesDeTipoProduto}
                                            id="tipoProduto"
                                            estilos="w-100 my-2 py-2 g-4"
                                        />
                                    )}
                                />
                                {errors.tipoProduto && <p>{errors.tipoProduto.message}</p>}

                                <Controller
                                    name="tamanhoProduto"
                                    control={control}
                                    defaultValue={ehEdicao ? valoresDosInputsIniciais.tamanhoProduto || "" : ""}
                                    render={({ field: { value, onChange } }) => (
                                        <CaixaDeCombinacao
                                            valorSelecionado={value}
                                            aoMudar={(e) => onChange(e.target.value)}
                                            placeholder="Selecione o tamanho do produto"
                                            label="Tamanho:"
                                            opcoes={opcoesDeTamanhoProduto}
                                            id="tamanhoProduto"
                                            estilos="w-100 my-2 py-2 g-4"
                                        />
                                    )}
                                />
                                {errors.tamanhoProduto && <p>{errors.tamanhoProduto.message}</p>}

                                <Controller
                                    name="descricaoProduto"
                                    control={control}
                                    defaultValue={ehEdicao ? valoresDosInputsIniciais.descricaoProduto : ""}
                                    render={({ field: { value, onChange } }) => (
                                        <AreaDeTexto
                                            label="Descrição do produto"
                                            id="descricaoProduto"
                                            valor={value}
                                            textoPlaceholder="Descrição do produto"
                                            tipoDeTexto="text"
                                            estilos="w-100 my-2 py-2 g-4"
                                            mudancaDeValor={(e) => onChange(e.target.value)}
                                        />
                                    )}
                                />
                                {errors.descricaoProduto && <p>{errors.descricaoProduto.message}</p>}

                                <button type="submit" className="btn w-100 mt-3" style={{ backgroundColor: paletaCores.marromTerciario, color: paletaCores.corFontePrimaria }}>
                                    {ehEdicao ? 'Atualizar produto' : 'Cadastrar produto'}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
