function obterComparacao() {
    const ofertas = [
        { loja: 'Mercadinho São José', preco: 24.90 },
        { loja: 'Mercadinho Bom Preço', preco: 26.49 },
        { loja: 'Comercial Santa Rita', preco: null }
    ];

    const menorPreco = Math.min(
        ...ofertas
            .filter(oferta => oferta.preco !== null)
            .map(oferta => oferta.preco)
    );

    return {
        nome: 'Arroz branco Tipo 1',
        embalagem: 'Pacote de 5 kg',
        ofertas,
        menorPreco
    };
}

module.exports = { obterComparacao };