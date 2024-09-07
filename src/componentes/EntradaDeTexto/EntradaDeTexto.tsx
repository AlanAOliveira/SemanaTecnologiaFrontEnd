import React, { forwardRef } from 'react';

interface entradaDeTextoProps {
    valor?: string;
    mudancaDeValor?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    tipoDeTexto: string;
    textoPlaceholder: string;
    estilos: string;
    label: string;
    id: string;
    onBlur?: () => void;
}

export const EntradaDeTexto = forwardRef<HTMLInputElement, entradaDeTextoProps>(
    ({ tipoDeTexto, textoPlaceholder, estilos, valor, mudancaDeValor, onBlur, label, id }, ref) => {
        return (
            <>
                <label htmlFor={id}>{label}</label>
                <input
                    type={tipoDeTexto}
                    placeholder={textoPlaceholder}
                    className={estilos}
                    value={valor}
                    onChange={mudancaDeValor}
                    onBlur={onBlur}
                    ref={ref}
                />
            </>
        );
    }
);