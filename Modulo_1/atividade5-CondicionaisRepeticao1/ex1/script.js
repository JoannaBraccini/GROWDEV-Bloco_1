/*
1. Faça um algoritmo que leia a idade de vários alunos de uma turma.
O programa vai parar quando for digitada a idade 999. No final,
mostre quantos alunos existem na turma e qual é a média de idade
do grupo.
*/

//receber idades enquanto idades forem diferentes de 999
//somar quantas vezes rodou o prompt
//calcular media aritmética das idades fornecidas
let idadeRecebida = 0
let idadeTotal = 0
let alunos = -1 //para descontar o prompt de encerramento '999'
let soma = 0

while (idadeRecebida !== 999) {
    idadeRecebida = parseInt(prompt("Digite sua idade:"))
    alunos++
    soma = idadeRecebida + idadeTotal
    idadeTotal = soma
}

let media = (idadeTotal-999)/(alunos)

document.write(`A turma tem ${alunos} alunos.<br>A média aritmética das idades fornecidas é ${media.toFixed(2)}`)