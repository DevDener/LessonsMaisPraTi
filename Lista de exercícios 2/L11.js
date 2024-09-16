let pedidos = [
    { cliente: "Ana", produto: "Televisão", quantidade: 1 },
    { cliente: "Carlos", produto: "Notebook", quantidade: 2 },
    { cliente: "Ana", produto: "Celular", quantidade: 3 },
    { cliente: "Carlos", produto: "Celular", quantidade: 1 }
];

let quantidadePorCliente = {};
pedidos.forEach(pedido => {
    if (!quantidadePorCliente[pedido.cliente]) {
        quantidadePorCliente[pedido.cliente] = 0;
    }
    quantidadePorCliente[pedido.cliente] += pedido.quantidade;
});

console.log(quantidadePorCliente);