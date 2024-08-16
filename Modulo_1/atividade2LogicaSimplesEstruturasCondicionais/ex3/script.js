/*
3. Crie um programa que peça um número e verifique se ele é positivo,
negativo ou zero.
*/

let numeroFornecido = parseFloat(prompt("Digite um número:"));

if (numeroFornecido % 2 == 0) {
    document.write (`${numeroFornecido} é par!`)
} else {
    document.write (`${numeroFornecido} é ímpar!`)
}