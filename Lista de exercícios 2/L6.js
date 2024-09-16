let funcionarios = [
    { nome: "Maria", cargo: "Gerente", salario: 8000 },
    { nome: "João", cargo: "Segurança", salario: 3000 },
    { nome: "Ana", cargo: "Caixa", salario: 2500 },
    { nome: "Pedro", cargo: "Empacotador", salario: 2200 }
];

function filtrarFuncionariosPorSalario(funcionarios, valorMinimo) {
    for (let funcionario of funcionarios) {
        if (funcionario.salario > valorMinimo) {
            console.log(`Nome: ${funcionario.nome}, Cargo: ${funcionario.cargo}, Salário: R$${funcionario.salario}`);
        }
    }
}

filtrarFuncionariosPorSalario(funcionarios, 2800);