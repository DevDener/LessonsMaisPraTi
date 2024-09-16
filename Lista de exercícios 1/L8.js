const prompt = require('prompt-sync')()

console.log('Digite dois números e irei organizá-los em ordem crescente.')
let num1 = Number(prompt('Digite o primeiro número: '))
let num2 = Number(prompt('Agora, digite o segundo número: '))

if(num1 < num2) {
    console.log(`A ordem crescente desses números é: [${num1} , ${num2}]`)
} else if (num1 > num2) {
    console.log(`A ordem crescente desses números é: [${num2} , ${num1}]`)
} else if (num1 === num2) {
    console.error('Os números são iguais.')
} else {
    console.error('Por favor, digite um número.')
}