let empresa = {
    departamentos: [
        {
            nome: "TI",
            funcionarios: [
                { nome: "Dener" },
                { nome: "João Lucas" }
            ]
        },
        {
            nome: "RH",
            funcionarios: [
                { nome: "Jéssica" },
                { nome: "Luiza" }
            ]
        }
    ]
};

for (let departamento of empresa.departamentos) {
    for (let funcionario of departamento.funcionarios) {
        console.log(`Funcionário: ${funcionario.nome}, Departamento: ${departamento.nome}`);
    }
}