import React from "react";

interface areaDeTextoProps {
    valor: string;
    mudancaDeValor: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
    tipoDeTexto: string;
    textoPlaceholder: string;
    estilos: string;
    label: string;
    id: string;
}

export const AreaDeTexto: React.FC<areaDeTextoProps> = (props) => {
    return (
        <>
            <label htmlFor={props.id}>{props.label}</label>
            <textarea
                value={props.valor}
                onChange={props.mudancaDeValor}
                style={{ resize: 'none' }}
                itemType={props.tipoDeTexto}
                placeholder={props.textoPlaceholder}
                className={props.estilos}
                rows={3}
            />
        </>
    );
}