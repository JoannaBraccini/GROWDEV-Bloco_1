/*
Crie uma função que recebe um valor inteiro e retorne verdadeiro se
for ímpar ou falso se for par.
*/

let valor = parseInt(prompt("Digite um número inteiro"))

function calcularValorPositivoNegativo(valor) {
    if (valor % 2 === 0) {
        valor = true
        document.write("É positivo? ",valor)
    } else {
        valor = false
        document.write("É positivo? ",valor)
    }
}

calcularValorPositivoNegativo(valor)