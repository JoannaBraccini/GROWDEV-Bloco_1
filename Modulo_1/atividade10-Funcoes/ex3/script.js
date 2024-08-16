/*
3. Crie uma função que recebe por parâmetro um valor inteiro e
positivo e retorne verdadeiro se o número for primo ou falso se não
for.
*/

let valor = parseInt(prompt("Digite um número inteiro positivo"))
let numeroPrimo = true

function calcularNumeroPrimo(valor) {
    if (valor <= 1) {
        numeroPrimo = false
    } else {
        for(let i = 2; i < valor; i++) {
            if (valor % i === 0) {
                numeroPrimo = false
            }
        }
    }alert(`${valor} é primo? ${numeroPrimo}`)
}

calcularNumeroPrimo(valor)