const prompt = require('prompt-sync')()

console.log('Vamos descobrir a média aritmética de alguns números!\nQuando quiser parar de adicionar números digite 0.')
let num = Number(prompt('Insira um número: '))
let counter = 0
let sum = 0

while(num !== 0){
    sum += num
    counter++
    num = Number(prompt('Agora, digite outro número: '))
}

console.log('A média aritmética entre esses números é: ', sum/counter)