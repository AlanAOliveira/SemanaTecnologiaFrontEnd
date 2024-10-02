enum TamanhoProduto {
    PEQUENO = 'PEQUENO',
    MEDIO = 'MEDIO',
    GRANDE = 'GRANDE',
}

export const opcoesDeTamanhoProduto = Object.keys(TamanhoProduto).map(key => ({
    label: key,
    value: TamanhoProduto[key as keyof typeof TamanhoProduto],
}));