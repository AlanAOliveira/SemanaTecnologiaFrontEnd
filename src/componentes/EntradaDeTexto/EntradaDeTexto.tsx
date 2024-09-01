import React from 'react';

interface EntradaDeTextoProps {
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
                />
            </div>
        </>
    );
}