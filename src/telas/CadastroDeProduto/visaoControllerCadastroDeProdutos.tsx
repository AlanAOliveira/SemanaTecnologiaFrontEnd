import { useState } from "react"
import { opcoesDeTamanhoProduto } from "../../Enum/EnumTamanhoProduto";
import { opcoesDeTipoDeProduto } from "../../Enum/EnumTipoProduto";
import { tipoSelecaoComboBox } from '../../Type/tipoSelecaoComboBox';
import { useForm } from "react-hook-form";
import { visaoModeloProduto } from "../../modelos/produto/visaoModeloProduto";
import { useAutenticacao } from "../../contexts/useAutenticacao";
import { InterfaceFormularioDeCadastroDeProdutos } from "../../interfaces/interfaceDeRegistros";
import { useNavigate } from "react-router-dom";

export const useVisaoControllerCadastradoDeProdutos = () => {
    const [opcoesDeTamanhoDeProduto, setOpcoesDeTamanhoDeProduto] = useState<tipoSelecaoComboBox>(opcoesDeTamanhoProduto);
    const [opcoesDeTipoProduto, setOpcoesDeTipoDeProduto] = useState<tipoSelecaoComboBox>(opcoesDeTipoDeProduto);
    const { control, handleSubmit, formState: { errors } } = useForm<InterfaceFormularioDeCadastroDeProdutos>();
    const { tokenJWT } = useAutenticacao();
    const navegacao = useNavigate();

    const limparFormulario = () => {
        const formulario = document.getElementById("formularioCadastro") as HTMLFormElement | null;
        formulario?.reset();
    };

    const cadastrarNovoProduto = async (dadosFormulario: InterfaceFormularioDeCadastroDeProdutos) => {
        const objVisaoModeloProduto = new visaoModeloProduto();
        const validacaoDeDados = {
            nomeProduto: dadosFormulario.nomeProduto || '',
            precoProduto: dadosFormulario.precoProduto ? parseFloat(dadosFormulario.precoProduto) : 0,
            quantidadeProduto: dadosFormulario.quantidadeProduto ? parseInt(dadosFormulario.quantidadeProduto, 10) : 0,
            urlImagemProduto: dadosFormulario.urlImagemProduto || '',
            tipoProduto: dadosFormulario.tipoProduto || (opcoesDeTipoProduto.length > 0 ? opcoesDeTipoProduto[0].value : ''),
            tamanhoProduto: dadosFormulario.tamanhoProduto || (opcoesDeTamanhoDeProduto.length > 0 ? opcoesDeTamanhoDeProduto[0].value : ''),
            descricaoProduto: dadosFormulario.descricaoProduto || ''
        };

        if (tokenJWT) {
            const sucessoAoCadastrar = await objVisaoModeloProduto.cadastrarNovoProduto(tokenJWT, validacaoDeDados);

            if (sucessoAoCadastrar) {
                limparFormulario();
                navegacao('/telaInicio');
            }
        }
    };

    const editarProdutoCadastrado = async (dadosFormulario: InterfaceFormularioDeCadastroDeProdutos, idProduto: number) => {
        const objVisaoModeloProduto = new visaoModeloProduto();
        const validacaoDeDados = {
            nomeProduto: dadosFormulario.nomeProduto || '',
            precoProduto: dadosFormulario.precoProduto ? parseFloat(dadosFormulario.precoProduto) : 0,
            quantidadeProduto: dadosFormulario.quantidadeProduto ? parseInt(dadosFormulario.quantidadeProduto, 10) : 0,
            urlImagemProduto: dadosFormulario.urlImagemProduto || '',
            tipoProduto: dadosFormulario.tipoProduto || (opcoesDeTipoProduto.length > 0 ? opcoesDeTipoProduto[0].value : ''),
            tamanhoProduto: dadosFormulario.tamanhoProduto || (opcoesDeTamanhoDeProduto.length > 0 ? opcoesDeTamanhoDeProduto[0].value : ''),
            descricaoProduto: dadosFormulario.descricaoProduto || ''
        };

        if (tokenJWT) {
            if (idProduto) {
                const sucessoAoEditar = await objVisaoModeloProduto.editarProduto(tokenJWT, idProduto, validacaoDeDados);
                if (sucessoAoEditar) {
                    limparFormulario();
                    navegacao('/telaInicio');
                }
            }
        }
    };

    return {
        opcoesDeTamanhoDeProduto,
        opcoesDeTipoProduto,
        control, handleSubmit, errors,
        cadastrarNovoProduto, editarProdutoCadastrado
    }
}