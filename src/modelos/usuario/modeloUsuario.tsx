import { api } from "../../services/api";

interface DadosFormularioCadastro {
  nome: string;
  sobrenome: string;
  email: string;
  senha: string;
}

interface DadosFormularioLogin {
  email: string;
  senha: string;
}

interface InformacoesUsuario {
  nome: string;
  sobrenome: string;
  email: string;
}

interface TokenResponse {
  token: string;
}

export class Cliente {
  async cadastrarNovoUsuario(dadosFormularioCadastro: DadosFormularioCadastro): Promise<boolean> {
    try {
      await api.post("/nativeCoffe/usuario", dadosFormularioCadastro);
      return true;
    } catch (error) {
      console.error("Algo deu errado ao se cadastrar: ", JSON.stringify(error));
      return false;
    }
  }

  async realizaLogin(dadosFormularioLogin: DadosFormularioLogin): Promise<TokenResponse | null> {
    try {
      const response = await api.post<TokenResponse>("/nativeCoffe/login", dadosFormularioLogin);
      if (!response || !response.data) return null;
      return response.data;
    } catch (error) {
      console.error("Erro ao realizar login", JSON.stringify(error));
      return null;
    }
  }

  async pegarInformacoesUsuario(tokenJWT: string): Promise<InformacoesUsuario | null> {
    try {
      const response = await api.get<InformacoesUsuario>("/nativeCoffe/usuario", {
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
