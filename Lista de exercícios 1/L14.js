const prompt = require('prompt-sync')()

console.log('Vamos calcular o fatorial de um número!')

let num = Number(prompt('Digite um número para que seja calculado o seu fatorial: '))
let numFactorial = 1

while(num > 1) {
    numFactorial *= num
    num--
}

console.log(numFactorial)