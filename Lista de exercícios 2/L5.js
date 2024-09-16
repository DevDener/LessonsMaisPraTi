let alunos = [
    { nome: "Maria", nota1: 8, nota2: 7 },
    { nome: "João", nota1: 6, nota2: 5 },
    { nome: "Ana", nota1: 9, nota2: 8 },
    { nome: "Pedro", nota1: 4, nota2: 6 }
];

for (let aluno of alunos) {
    let media = (aluno.nota1 + aluno.nota2) / 2;
    
    console.log(`Aluno: ${aluno.nome}, Média: ${media}`);
}
