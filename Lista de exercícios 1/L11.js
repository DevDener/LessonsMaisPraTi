const prompt = require('prompt-sync')()

let totalSum = 0

console.log('Vamos calcular 5 números!')

for(i = 1; i <= 5; i++) {
    let num = Number(prompt(`Digite o ${i}º número: `))
    totalSum += num
}

console.log(`A soma total dos números é ${totalSum}`)