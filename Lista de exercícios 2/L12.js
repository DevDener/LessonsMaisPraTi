let estoque = [
    { produto: "Televisão", quantidade: 5, minimo: 10 },
    { produto: "Notebook", quantidade: 12, minimo: 10 },
    { produto: "Celular", quantidade: 8, minimo: 10 }
];

estoque.forEach(item => {
    if (item.quantidade < item.minimo) {
        item.quantidade *= 2;
    }
});

console.log(estoque);