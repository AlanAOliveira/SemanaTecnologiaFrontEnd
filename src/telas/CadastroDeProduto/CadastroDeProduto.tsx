import React from 'react';
import { useVisaoControllerCadastradoDeProdutos } from './visaoControllerCadastroDeProdutos';
import { FormularioCadastroProduto } from '../../componentes/FormularioDeCadastroDeProdutos/FormularioDeCadastroDeProdutos';
import { useLocation } from 'react-router-dom';
import { InterfaceFormularioDeCadastroDeProdutos } from '../../interfaces/interfaceDeRegistros';

export const TelaCadastroDeProduto: React.FC = () => {
    const location = useLocation();
    const { state } = location;

    const {
        opcoesDeTamanhoDeProduto,
        opcoesDeTipoProduto,
        control,
        errors,
        handleSubmit, cadastrarNovoProduto, editarProdutoCadastrado
    } = useVisaoControllerCadastradoDeProdutos();

    const handleFormSubmit = (data: InterfaceFormularioDeCadastroDeProdutos) => {
        if (state?.ehEdicao) {
            editarProdutoCadastrado(data, state?.editarObjeto.chavePrimaria_idProduto);
        } else {
            cadastrarNovoProduto(data);
        }
    };

    return (
        <section>
            <FormularioCadastroProduto
                onSubmit={handleSubmit(handleFormSubmit)}
                valoresDosInputsIniciais={state?.ehEdicao ? state?.editarObjeto : null}
                opcoesDeTamanhoProduto={opcoesDeTamanhoDeProduto}
                opcoesDeTipoProduto={opcoesDeTipoProduto}
                control={control}
                errors={errors}
                ehEdicao={state?.ehEdicao}
            />
        </section>
    );
}
