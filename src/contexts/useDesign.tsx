import React, { createContext,useContext, ReactNode } from "react";

interface PaletaCores {
    marromPrimario: string;
    marromSecundario: string;
    marromTerciario: string;
    corFontePrimaria: string;
    corLinkPadrao: string;
}

interface TamanhoFontes {
    tamanhoPequeno: number;
    tamanhoPadrao: number;
    tamanhoGrande: number;
    tamanhoTitulo: number;
    tamanhoSubtitulo: number;
    tituloHome: number;
}

interface MaterialDesignContextType {
    paletaCores: PaletaCores;
    tamanhoFontes: TamanhoFontes;
}

const MaterialDesignContext = createContext<MaterialDesignContextType | undefined>(undefined);

interface MaterialDesignProviderProps {
    children: ReactNode;
}

export const MaterialDesignProvider: React.FC<MaterialDesignProviderProps> = ({ children }) => {

    const paletaCores: PaletaCores = {
        marromPrimario: "#E5AB6F",
        marromSecundario: "#CB9459",
        marromTerciario: "#B27E43",
        corFontePrimaria: "#FFFFFF",
        corLinkPadrao: "#BAB8B8",
    };

    const tamanhoFontes: TamanhoFontes = {
        tamanhoPequeno: 16,
        tamanhoPadrao: 18,
        tamanhoGrande: 22,
        tamanhoTitulo: 35,
        tamanhoSubtitulo: 25,
        tituloHome: 50,
    };

    const contextoValores: MaterialDesignContextType = { paletaCores, tamanhoFontes };

    return (
        <MaterialDesignContext.Provider value={contextoValores}>
            {children}
        </MaterialDesignContext.Provider>
    );
};

export const useDesign = (): MaterialDesignContextType => {
    const context = useContext(MaterialDesignContext);

    if (!context) {
        throw new Error("useDesign must be used within a MaterialDesignProvider");
    }
    return context;
};
