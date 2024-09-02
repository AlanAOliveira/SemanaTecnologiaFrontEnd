import { api } from "../../services/api";
import { InterfaceDadosFormularioCadastro, InterfaceDadosFormularioLogin } from "../../interfaces/interfaceDeRegistros";
import { InterfaceInformacoesUsuario, InterfaceTokenResponse } from "../../interfaces/interfaceDeUsuario";

export class ModeloUsuario {
  async cadastrarNovoUsuario(dadosFormularioCadastro: InterfaceDadosFormularioCadastro): Promise<boolean> {
    try {
      await api.post("/nativeCoffe/usuario", dadosFormularioCadastro);
      return true;
    } catch (error) {
      console.error("Algo deu errado ao se cadastrar: ", JSON.stringify(error));
      return false;
    }
  }

  async realizaLogin(dadosFormularioLogin: InterfaceDadosFormularioLogin): Promise<InterfaceTokenResponse | null> {
    try {
      const token = await api.post<InterfaceTokenResponse>("/nativeCoffe/login", dadosFormularioLogin);

      if (!token) return null;

      return token.data;
    } catch (error) {
      console.error("Erro ao realizar login", JSON.stringify(error));
      return null;
    }
  }

  async pegarInformacoesUsuario(tokenJWT: InterfaceTokenResponse): Promise<InterfaceInformacoesUsuario | null> {
    try {
      const response = await api.get<InterfaceInformacoesUsuario>("/nativeCoffe/usuario", {
        headers: {
          Authorization: `Bearer ${tokenJWT}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error("Erro ao capturar informações do usuario", JSON.stringify(error));
      return null;
    }
  }
}
