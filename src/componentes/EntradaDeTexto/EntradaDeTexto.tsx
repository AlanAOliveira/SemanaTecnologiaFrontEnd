import React from 'react';

interface EntradaDeTextoProps {
    valor?: string;
    mudancaDeValor?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    tipoDeTexto: string;
    textoPlaceholder: string;
    estilos: string;
}

export const EntradaDeTexto: React.FC<EntradaDeTextoProps> = (props) => {
    return (
        <>
            <div>
                <input
                    type={props.tipoDeTexto}
                    placeholder={props.textoPlaceholder}
                    className={props.estilos}
                    value={props.valor}
                    onChange={props.mudancaDeValor}
                />
            </div>
        </>
    );
}