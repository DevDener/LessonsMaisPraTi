let carrinho = {
    itens: [
        { nome: "Televisão", quantidade: 1, precoUnitario: 1500 },
        { nome: "Notebook", quantidade: 2, precoUnitario: 3000 },
        { nome: "Celular", quantidade: 3, precoUnitario: 1200 }
    ]
};

let valorTotalCarrinho = 0;
carrinho.itens.forEach(item => {
    valorTotalCarrinho += item.quantidade * item.precoUnitario;
});

console.log(`Valor total do carrinho: R$${valorTotalCarrinho.toFixed(2)}`);