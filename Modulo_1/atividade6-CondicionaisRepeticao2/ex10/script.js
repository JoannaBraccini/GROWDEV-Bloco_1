/*
10. Tendo como entrada a altura e o sexo (codificado da seguinte
forma: 1 para sexo feminino e 2 para sexo masculino) de uma
pessoa, construa um programa que calcule e mostre seu peso ideal,
utilizando as seguintes fórmulas:
- para homens: (72.7 * Altura) – 58
- para mulheres: (62.1 * Altura) – 44.7
*/

let altura = parseFloat(prompt("Digite sua altura em metros"))
let sexo = parseInt(prompt("Sexo: Escolha 1 para sexo feminino e 2 para sexo masculino"))
let pesoMulher = (62.1 * altura) - 44.7
let pesoHomem = (72.7 * altura) - 58

if (sexo === 1) {
    document.write(`Seu peso ideal é ${pesoMulher.toFixed(2)} kg`)
} else if (sexo === 2) {
    document.write(`Seu peso ideal é ${pesoHomem.toFixed(2)} kg`)
} else {
    alert("Operação cancelada. Valor inválido.")
}
