let transacoes = [
    { tipo: "entrada", valor: 1000 },
    { tipo: "saída", valor: 200 },
    { tipo: "entrada", valor: 500 },
    { tipo: "saída", valor: 150 }
];

let saldoFinal = 0;
transacoes.forEach(transacao => {
    if (transacao.tipo === "entrada") {
        saldoFinal += transacao.valor;
    } else if (transacao.tipo === "saída") {
        saldoFinal -= transacao.valor;
    }
});

console.log(`Saldo final: R$${saldoFinal.toFixed(2)}`);