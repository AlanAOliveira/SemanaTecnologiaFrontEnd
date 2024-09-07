enum TamanhoProduto {
    Pequeno = 'PEQUENO',
    Médio = 'MEDIO',
    Grande = 'GRANDE',
}

export const opcoesDeTamanhoProduto = Object.keys(TamanhoProduto).map(key => ({
    label: key,
    value: TamanhoProduto[key as keyof typeof TamanhoProduto],
}));