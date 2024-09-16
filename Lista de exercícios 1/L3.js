const prompt = require('prompt-sync')()

let grade = Number(prompt('Digite sua nota de 0 à 10, e saiba se foi aprovado, reprovado ou se irá para a recuperação: '))

if(grade >= 0 && grade <= 3) {
    console.log('Você foi reprovado.')
} else if(grade > 3 && grade <= 6) {
    console.log('Você irá para a recuperação.')
} else if(grade > 6 && grade <= 10) {
    console.log('Parabéns, você foi aprovado!')
} else {
    console.error('ERRO: essa nota não existe!')
}