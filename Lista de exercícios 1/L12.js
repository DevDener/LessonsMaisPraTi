const prompt = require('prompt-sync')()

console.log('TABUADA')
let num = Number(prompt('Digite um número e descubra a tabuada dele: '))

for(i = 1; i <= 10; i++) {
    console.log(`${i} x ${num} = `, i * num)
}