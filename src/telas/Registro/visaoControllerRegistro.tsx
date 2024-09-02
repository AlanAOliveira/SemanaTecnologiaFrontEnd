import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { InterfaceDadosFormularioCadastro } from "../../interfaces/interfaceDeRegistros";
import { visaoModeloUsuario } from "../../modelos/usuario/visaoModeloUsuario";

export const useVisaoControllerRegistro = () => {
    const [nomeUsuario, setNomeUsuario] = useState<string>('');
    const [sobrenomeUsuario, setSobrenomeUsuario] = useState<string>('');
    const [emailUsuario, setEmailUsuario] = useState<string>('');
    const [senhaUsuario, setSenhaUsuario] = useState<string>('');
    const objVisaoModeloUsuario = new visaoModeloUsuario();

    const navegacao = useNavigate();

    const realizaCadastro = async (valoresDoFormulario: InterfaceDadosFormularioCadastro) => {
        const cadastroRealizado = await objVisaoModeloUsuario.cadastrarNovoUsuario(valoresDoFormulario);
        if (cadastroRealizado) {
            return navegacao('/');
        } else {
            console.log("Deu erro no registro.");
        }
    };

    return {
        realizaCadastro,
        nomeUsuario,
        sobrenomeUsuario,
        emailUsuario,
        senhaUsuario,
        setNomeUsuario,
        setSobrenomeUsuario,
        setEmailUsuario,
        setSenhaUsuario
    }
}