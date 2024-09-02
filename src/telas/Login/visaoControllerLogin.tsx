import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAutenticacao } from "../../contexts/useAutenticacao";
import { InterfaceDadosFormularioLogin } from "../../interfaces/interfaceDeRegistros";

export const useVisaoControllerLogin = () => {
    const [emailUsuario, setEmailUsuario] = useState<string>('');
    const [senhaUsuario, setSenhaUsuario] = useState<string>('');

    const navegacao = useNavigate();
    const { loginRealizado } = useAutenticacao();

    const realizaLogin = async (credenciais: InterfaceDadosFormularioLogin) => {
        const loginBemSucessido = await loginRealizado(credenciais);

        if (loginBemSucessido) {
            navegacao('/registro');
        } else {
            console.error("Login falhou");
        }
    };

    return {
        realizaLogin,
        emailUsuario,
        setEmailUsuario,
        senhaUsuario,
        setSenhaUsuario,
    }
}