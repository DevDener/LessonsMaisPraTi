const prompt = require('prompt-sync')()

console.log('Cardápio\n1. Pizza\n2. Hambúrguer\n3. Hot Dog')
let order = Number(prompt('Digite o número do que você quer pedir: '))

let foodQuantity = 0

switch(order) {
    case 1:
        quantity = prompt('Quantas pizzas você quer? ')
        console.log(`Você pediu ${quantity} pizzas.`)
        break
    case 2:
        quantity = prompt('Quantos hamúrgueres você quer? ')
        console.log(`Você pediu ${quantity} hambúrgueres.`) 
        break       
    case 3:
        quantity = prompt('Quantos hot dogs você quer? ')
        console.log(`Você pediu ${quantity} hot dogs.`)    
        break
    default:
        console.error('ERRO: opção inválida!')
}