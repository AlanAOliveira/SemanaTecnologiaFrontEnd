enum TipoProduto {
    Café = 'CAFE',
    Aperitivos = 'APERITIVOS',
}

export const opcoesDeTipoDeProduto = Object.keys(TipoProduto).map(key => ({
    label: key,
    value: TipoProduto[key as keyof typeof TipoProduto],
}));