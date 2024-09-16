let produtos = [
    { nome: "Televisão", preco: 2000, desconto: 0 },
    { nome: "Notebook", preco: 3000, desconto: 0 },
    { nome: "Smartphone", preco: 1500, desconto: 0 },
    { nome: "Tablet", preco: 1000, desconto: 0 }
];

produtos.forEach(produto => {
    produto.desconto = produto.preco * 0.10;
    
    let novoPreco = produto.preco - produto.desconto;

    console.log(`Produto: ${produto.nome}, Novo Preço: R$${novoPreco.toFixed(2)}`);
});
