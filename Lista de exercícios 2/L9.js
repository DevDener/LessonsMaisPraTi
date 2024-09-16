let clientes = [
    { nome: "Ana", idade: 28, cidade: "São Paulo" },
    { nome: "Carlos", idade: 35, cidade: "Rio de Janeiro" },
    { nome: "Mariana", idade: 32, cidade: "Belo Horizonte" },
    { nome: "João", idade: 40, cidade: "Curitiba" }
];

let count = 0;

clientes.forEach(cliente => {
    if (cliente.idade > 30) {
        count++;
    }
});

console.log(`Número de clientes com mais de 30 anos: ${count}`);
