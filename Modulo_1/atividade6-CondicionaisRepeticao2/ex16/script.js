/*
16. Escreva um algoritmo que armazene o ano atual e o ano de
nascimento de uma pessoa. Escrever uma mensagem no console
que diga se ela poderá ou não votar este ano (não é necessário
considerar o mês em que a pessoa nasceu).
*/

const dataAtual = new Date()
const anoAtual = dataAtual.getFullYear()
let anoNascimento = parseInt(prompt("Digite seu ano de nascimento"))
let idade = anoAtual - anoNascimento

if (idade >= 16) {
    console.log(`Parabéns! Você pode votar em ${anoAtual}, pois tem ${idade} anos.`)
} else {
    console.log(`Você não pode votar em ${anoAtual}, pois tem ${idade} anos.`)
}
