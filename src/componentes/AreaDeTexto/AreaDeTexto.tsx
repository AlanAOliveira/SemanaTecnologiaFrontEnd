import React from "react";
import { useDesign } from "../../contexts/useDesign";

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
    const { paletaCores } = useDesign();
    return (
        <>
            <label htmlFor={props.id}>{props.label}</label>
            <textarea
                value={props.valor}
                onChange={props.mudancaDeValor}
                style={{ resize: 'none', border: `2px solid ${paletaCores.marromTerciario}`, borderRadius: 5, padding: 5  }}
                itemType={props.tipoDeTexto}
                placeholder={props.textoPlaceholder}
                className={props.estilos}
                rows={3}
            />
        </>
    );
}