const prompt = require('prompt-sync')()

console.log('Vamos calcular o seu índice de massa corporal!')
let weight = prompt('Digite o seu peso em quilos: ')
let height = prompt('Digite a sua altura em metros (exemplo: 1.80): ')

let imc = weight / (height * height)
imc = parseFloat(imc.toFixed(1))

if(imc < 18.5) {
    console.log(`Seu IMC é ${imc} e você está com baixo peso.`)
} else if(imc >= 18.5 && imc <= 24.9) {
    console.log(`Seu IMC é ${imc} e você está com um peso normal.`)
} else if(imc >= 25 && imc <= 29.9) {
    console.log(`Seu IMC é ${imc} e você está com sobrepeso`)
} else if(imc >= 30 && imc <= 39.9) {
    console.log(`Seu IMC é ${imc} e você está com obesidade.`)
} else if(imc >= 40) {
    console.log(`Seu IMC é ${imc} e você está com obesidade grave.`)
} else {
    console.error('ERRO: esse IMC não existe.')
}