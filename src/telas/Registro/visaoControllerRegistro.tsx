import { useNavigate } from "react-router-dom";
import { InterfaceDadosFormularioCadastro } from "../../interfaces/interfaceDeRegistros";
import { visaoModeloUsuario } from "../../modelos/usuario/visaoModeloUsuario";
import { useForm } from "react-hook-form";
import { useDesign } from "../../contexts/useDesign";

export const useVisaoControllerRegistro = () => {
    const { control, handleSubmit, formState: { errors } } = useForm<InterfaceDadosFormularioCadastro>();
    const { paletaCores } = useDesign();
    const objVisaoModeloUsuario = new visaoModeloUsuario();

    const navegacao = useNavigate();

    const realizaCadastro = async (valoresDoFormulario: InterfaceDadosFormularioCadastro) => {
        const cadastroRealizado = await objVisaoModeloUsuario.cadastrarNovoUsuario(valoresDoFormulario);
        if (cadastroRealizado) {
            return navegacao('/');
        } else {
            alert('Dados inválidos. O e-mail já esta em uso.');
        }
    };

    return {
        realizaCadastro,
        control, handleSubmit, errors, 
        paletaCores
    }
}