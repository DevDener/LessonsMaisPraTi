const prompt = require('prompt-sync')()

console.log('Vende-se maçãs!\nComprando 11 maçãs ou menos, cada uma sai por: R$0,30\nComprando 12 maçãs ou mais, cada uma sai por R$0,25')
let appleQuantity = parseInt(prompt('Digite o número de maçãs que você quer: '))

let totalValue = 0

if(appleQuantity >= 1 && appleQuantity <= 11) {
    totalValue = appleQuantity * 0.3
    console.log(`Você comprou ${appleQuantity} maçãs e o valor total é R$${totalValue.toFixed(2)}`)
} else if(appleQuantity >= 12) {
    totalValue = appleQuantity * 0.25
    console.log(`Você comprou ${appleQuantity} maçãs e o valor total é R$${totalValue.toFixed(2)}`)
} else {
    console.error('Digite um valor válido!')
}