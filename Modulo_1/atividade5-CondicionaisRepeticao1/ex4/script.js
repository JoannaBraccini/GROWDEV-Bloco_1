/*
4. Numa promoção exclusiva para o Dia da Mulher, uma loja quer dar
descontos para todos, mas especialmente para mulheres. Faça um
programa que leia nome, sexo e o valor das compras do cliente e
calcule o preço com desconto. Sabendo que:
a. Homens ganham 5% de desconto

b. Mulheres ganham 13% de desconto
*/

let nome = prompt("Digite seu nome")
let sexo = prompt("Escolha M para sexo masculino ou F para sexo feminino").toUpperCase()
let valorCompra = parseFloat(prompt("Digite o valor das suas compras"))
const descontoFeminino = 0.13
const descontoMasculino = 0.05
let desconto = 0
let valorFinal = 0

if (sexo === "F") {
    desconto = valorCompra * descontoFeminino
    valorFinal = valorCompra - desconto
    console.log(`Sua compra recebeu R$ ${desconto} de desconto. Total da compra: R$ ${valorFinal}`)
} else if (sexo === "M") {
    desconto = valorCompra * descontoMasculino
    valorFinal = valorCompra - desconto
    console.log(`${nome}, sua compra recebeu R$ ${desconto} de desconto. Total da compra: R$ ${valorFinal}`)
} else {
    console.log("Escolha F ou M")
}
