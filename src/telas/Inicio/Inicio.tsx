import React from 'react';
import { MenuSuperior } from '../../componentes/MenuSuperior/MenuSuperior';
import { useVisaoControllerInicio } from "./visaoControllerInicio";
import { GridExibicaoProduto } from '../../componentes/GridExibicaoProduto/GridExibicaoProduto';

export const TelaInicio: React.FC = () => {
    const { produtosCadastrados } = useVisaoControllerInicio();

    return (
        <main>
            <MenuSuperior />
            <GridExibicaoProduto
                arrayObjetosProdutos={produtosCadastrados!}
            />
        </main>
    );
}