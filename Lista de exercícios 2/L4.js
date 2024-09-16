let pessoas = [
    { nome: "Ana", idade: 25, cidade: "São Paulo" },
    { nome: "Carlos", idade: 32, cidade: "Rio de Janeiro" },
    { nome: "Beatriz", idade: 19, cidade: "Belo Horizonte" },
    { nome: "Dener", idade: 18, cidade: "Pelotas" },
    { nome: "João", idade: 45, cidade: "Curitiba" }
];

for (let pessoa of pessoas) {
    console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Cidade: ${pessoa.cidade}`);
}
