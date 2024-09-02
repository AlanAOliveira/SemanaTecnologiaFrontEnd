import React, { createContext, useContext, ReactNode, useState } from "react";
import { visaoModeloUsuario } from "../modelos/usuario/visaoModeloUsuario";
import { InterfaceInformacoesUsuario, InterfaceTokenResponse } from "../interfaces/interfaceDeUsuario";
import { InterfaceDadosFormularioLogin } from "../interfaces/interfaceDeRegistros";

interface AutenticacaoContextType {
    tokenJWT: InterfaceTokenResponse | null;
    informacoesUsuario: InterfaceInformacoesUsuario | null;
    loginRealizado: (credenciais: InterfaceDadosFormularioLogin) => Promise<boolean>;
}

const autenticacaoContext = createContext<AutenticacaoContextType | undefined>(undefined);

interface AutenticacaoProviderProps {
    children: ReactNode;
}

export const AutenticacaoProvider: React.FC<AutenticacaoProviderProps> = ({ children }) => {
    const [tokenJWT, setTokenJWT] = useState<InterfaceTokenResponse | null>(null);
    const [informacoesUsuario, setInformacoesUsuario] = useState<InterfaceInformacoesUsuario | null>(null);
    const visaoModeloDeUsuario = new visaoModeloUsuario();

    const loginRealizado = async (credenciais: InterfaceDadosFormularioLogin): Promise<boolean> => {
        try {
            const hashToken = await visaoModeloDeUsuario.realizaLogin(credenciais);

            if (hashToken) {
                setTokenJWT(hashToken);
                const informacoes = await visaoModeloDeUsuario.pegarInformacoesUsuario(hashToken);
                
                setInformacoesUsuario(informacoes);
                return true;
            } else {
                return false;
            }
        } catch (error) {
            console.error("Erro ao fazer login", error);
            return false;
        }
    }

    return (
        <autenticacaoContext.Provider value={{ tokenJWT, informacoesUsuario, loginRealizado }}>
            {children}
        </autenticacaoContext.Provider>
    );
};

export const useAutenticacao = (): AutenticacaoContextType => {
    const context = useContext(autenticacaoContext);

    if (!context) {
        throw new Error("useAutenticacao must be used within an AutenticacaoProvider");
    }
    return context;
};
