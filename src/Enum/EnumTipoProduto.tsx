enum TipoProduto {
    Café = 'CAFE',
    Aperitivos = 'APERITIVO',
}

export const opcoesDeTipoDeProduto = Object.keys(TipoProduto).map(key => ({
    label: key,
    value: TipoProduto[key as keyof typeof TipoProduto],
}));