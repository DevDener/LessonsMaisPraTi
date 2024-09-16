const prompt = require('prompt-sync')()

console.log('Vamos descobrir se um número inteiro é par ou ímpar!')
let num = prompt('Digite um número inteiro: ')

if(num % 2 == 0) {
    console.log('O número é par.')
} else {
    console.log('O número é ímpar.')
}