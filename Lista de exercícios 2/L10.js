let vendas = [
    { produto: "Televisão", quantidade: 10, valor: 1500 },
    { produto: "Notebook", quantidade: 5, valor: 3000 },
    { produto: "Celular", quantidade: 20, valor: 1200 }
];

let valorTotal = 0;
vendas.forEach(venda => {
    valorTotal += venda.quantidade * venda.valor;
});

console.log(`Valor total de vendas: R$${valorTotal.toFixed(2)}`);