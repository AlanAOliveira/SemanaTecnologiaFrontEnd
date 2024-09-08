import React from 'react';
import { tipoSelecaoComboBox } from '../../type/tipoSelecaoComboBox';
import { useDesign } from '../../contexts/useDesign';

interface caixaDeCombinacaoProps {
    id: string;
    label: string;
    placeholder: string;
    opcoes: tipoSelecaoComboBox;
    estilos: string;
    valorSelecionado?: string;
    aoMudar?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const CaixaDeCombinacao: React.FC<caixaDeCombinacaoProps> = (props) => {
    const {paletaCores} = useDesign();
    
    return (
        <div className='d-flex flex-column'>
            <label htmlFor={props.id}>{props.label}</label>
            <select
                id={props.id + "Escolhido"}
                name={props.id + "Escolhido"}
                value={props.valorSelecionado}
                onChange={props.aoMudar}
                className={props.estilos}
                style={{border: `2px solid ${paletaCores.marromTerciario}`, borderRadius: 5, padding: 5 }}
            >
                <option value="" disabled>{props.placeholder}</option>
                {props.opcoes.map((opcao, index) => (
                    <option key={index} value={opcao.value}>
                        {opcao.label}
                    </option>
                ))}
            </select>
        </div>
    );
};
