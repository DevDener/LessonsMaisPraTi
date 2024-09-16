const prompt = require('prompt-sync')()

console.log('Vamos descobrir se 3 valores formam um triângulo ou não e, caso forme, que tipo de triângulo é esse!')
let sideA = Number(prompt('Digite um valor para o lado A do triângulo: '))
let sideB = Number(prompt('Digite um valor para o lado B do triângulo: '))
let sideC = Number(prompt('Digite um valor para o lado C do triângulo: '))

if(sideA < sideB + sideC && sideB < sideA + sideC && sideC < sideA + sideB) {
    if(sideA !== sideB && sideB !== sideC){
        console.log('Esses valores formam um triângulo escaleno.')
    } else if(sideA === sideB && sideB === sideC) {
        console.log('Esses valores formam um triângulo equilátero.')
    } else if(sideA === sideB || sideA === sideC || sideB === sideC) {
        console.log('Esses valores formam um triângulo isósceles.')
    }
} else {
    console.log('Esses valores não formam um triângulo.')
}