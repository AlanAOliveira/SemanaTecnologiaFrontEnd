import React from "react";

interface areaDeTextoProps {
    valor?: string;
    mudancaDeValor?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    tipoDeTexto: string;
    textoPlaceholder: string;
    estilos: string;
}

export const AreaDeTexto: React.FC<areaDeTextoProps> = (props) => {
    return (
        <textarea
            style={{ resize: 'none' }}
            itemType={props.tipoDeTexto}
            placeholder={props.textoPlaceholder}
            className={props.estilos}
            rows={3}
        />
    );
}