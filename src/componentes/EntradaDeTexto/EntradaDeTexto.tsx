import React, { forwardRef } from 'react';
import { useDesign } from '../../contexts/useDesign';

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
        const {paletaCores} = useDesign();
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
                    style={{ border: `2px solid ${paletaCores.marromTerciario}`, borderRadius: 5, padding: 5 }}
                />
            </>
        );
    }
);