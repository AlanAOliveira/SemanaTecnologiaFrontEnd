import { ModeloUsuario } from "./modeloUsuario";
import { InterfaceDadosFormularioCadastro, InterfaceDadosFormularioLogin } from "../../interfaces/interfaceDeRegistros";
import { InterfaceTokenResponse, InterfaceInformacoesUsuario } from "../../interfaces/interfaceDeUsuario";

export class visaoModeloUsuario {
  private usuario: ModeloUsuario;

  constructor() {
    this.usuario = new ModeloUsuario();
  }

  async cadastrarNovoUsuario(dadosFormularioCadastro: InterfaceDadosFormularioCadastro): Promise<boolean> {
    return this.usuario.cadastrarNovoUsuario(dadosFormularioCadastro);
  }

  async realizaLogin(dadosFormularioLogin: InterfaceDadosFormularioLogin): Promise<InterfaceTokenResponse | null> {
    return this.usuario.realizaLogin(dadosFormularioLogin);
  }

  async pegarInformacoesUsuario(tokenJWT: InterfaceTokenResponse): Promise<InterfaceInformacoesUsuario | null> {
    return this.usuario.pegarInformacoesUsuario(tokenJWT);
  }
}
