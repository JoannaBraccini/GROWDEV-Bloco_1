/*
18. Uma loja de eletrodomésticos estabeleceu as seguintes
modalidades de pagamento para a venda de suas mercadorias:

à vista - desconto de 2,5% sobre o preço de tabela
2 a 5 vezes - preço de tabela, sem desconto ou acréscimo
6 a 10 vezes - juros de 6% sobre o preço de tabela
11 a 15 vezes - juros de 13% sobre o preço de tabela

Escreva um algoritmo que armazene o preço de tabela e o número
de vezes em que o pagamento será feito. Calcule o valor de cada
parcela e o preço total da compra e imprima no console.
*/

let precoTabela = parseFloat(prompt("Digite o valor do produto"))
let parcelas = parseInt(prompt("Digite o número de parcelas (1 a 15)"))
let percentual = 0
let valorFinal = 0
let valorParcela = 0

if (parcelas === 1) {
    percentual = precoTabela * 0.025
    valorFinal = precoTabela - percentual
    valorParcela = valorFinal / parcelas
} else if (parcelas > 1 && parcelas <= 5) {
    valorFinal = precoTabela
    valorParcela = valorFinal / parcelas
} else if (parcelas > 5 && parcelas <= 10) {
    percentual = precoTabela * 0.06
    valorFinal = precoTabela + percentual
    valorParcela = valorFinal / parcelas
} else if (parcelas > 10 && parcelas <= 15) {
    percentual = precoTabela * 0.13
    valorFinal = precoTabela + percentual
    valorParcela = valorFinal / parcelas
} else {
    console.log(`Número de parcelas não aceito.`)
}

console.log(`Valor da compra: R$ ${valorFinal.toFixed(2)}. Pago em ${parcelas} parcela(s) de R$ ${valorParcela.toFixed(2)}.`)