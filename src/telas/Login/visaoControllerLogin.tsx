import { useNavigate } from "react-router-dom";
import { useAutenticacao } from "../../contexts/useAutenticacao";
import { InterfaceDadosFormularioLogin } from "../../interfaces/interfaceDeRegistros";
import { useForm } from "react-hook-form";

export const useVisaoControllerLogin = () => {
    const { control, handleSubmit, formState: { errors } } = useForm<InterfaceDadosFormularioLogin>();

    const navegacao = useNavigate();
    const { loginRealizado } = useAutenticacao();

    const realizaLogin = async (credenciais: InterfaceDadosFormularioLogin) => {
        const loginBemSucessido = await loginRealizado(credenciais);

        if (loginBemSucessido) {
            navegacao('/telaInicio');
        } else {
            alert('Credenciais inválidas.');
        }
    };

    const vaiParaRegistro = () => {
        navegacao('/registro');
    }

    return {
        realizaLogin,
        vaiParaRegistro,
        control,
        handleSubmit,
        errors
    }
}