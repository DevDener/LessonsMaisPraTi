const prompt = require('prompt-sync')()

let years = Number(prompt('Digite a sua idade: '))

if(years >= 0 && years <= 12) {
    console.log(`Você tem ${years} anos de idade e é uma criança.`)
} else if(years > 12 && years < 18) {
    console.log(`Você tem ${years} anos de idade e é um adolescente.`)
} else if(years >= 18 && years < 60) {
    console.log(`Você tem ${years} anos de idade e é um adulto.`)
} else if(years >= 60) {
    console.log(`Você tem ${years} anos de idade e é um idoso.`)
} else {
    console.error('ERRO: essa idade não existe!')
}
