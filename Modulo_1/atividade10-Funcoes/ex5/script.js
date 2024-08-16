/*
5. Crie uma função que recebe um valor inteiro e retorne verdadeiro se
é um valor perfeito ou falso se não for. Um valor é dito perfeito
quando ele é igual a soma dos seus divisores excetuando ele
próprio.

Ex: 6 é perfeito, pois 6 = 1 + 2 + 3, que são seus divisores
*/

let valor = parseInt(prompt("Digite um valor inteiro positivo"))
let numeroPerfeito = false

function calcularPerfeito(valor) {
    let soma = 1

    for (let i = 2; i < valor; i++) {
        if (valor % i === 0) {
            soma += i
        }

        if (soma === valor) {
            numeroPerfeito = true
        }
    } document.write(valor," é um número perfeito? ",numeroPerfeito)
}

calcularPerfeito(valor)