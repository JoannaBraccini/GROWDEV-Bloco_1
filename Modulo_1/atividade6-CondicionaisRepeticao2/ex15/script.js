/*
15. Crie um algoritmo que armazene três valores, para cada um dos
lados de um triângulo: A, B e C. Verifique se os lados fornecidos
formam realmente um triângulo. Se formar, deve mostrar no console
o tipo de triângulo: isósceles, escaleno ou equilátero.
a. Para verificar se os lados fornecidos formam um triângulo: A <
B + C e B < A + C e C < A + B.
b. Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou
B=C);
c. Triângulo escaleno: possui todos os lados diferentes (A<>B e
B<>C e A<>C);
d. Triângulo equilátero: possui todos os lados iguais (A=B e
B=C);
*/

let ladoA = parseFloat(prompt("Digite o comprimento do lado A do triângulo"))
let ladoB = parseFloat(prompt("Digite o comprimento do lado B do triângulo"))
let ladoC = parseFloat(prompt("Digite o comprimento do lado C do triângulo"))

if (ladoA < ladoB + ladoC && ladoB < ladoA + ladoC && ladoC < ladoA + ladoB) {
    if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
        document.write(`${ladoA}, ${ladoB} e ${ladoC} formam um Triângulo Isósceles, onde apenas 2 lados são iguais.`)
    } else if (ladoA !== ladoB && ladoB !== ladoC && ladoA !== ladoC) {
        document.write(`${ladoA}, ${ladoB} e ${ladoC} formam um Triângulo Escaleno, onde todos os lados são diferentes.`)
    } else if (ladoA === ladoB && ladoB === ladoC) {
        document.write(`${ladoA}, ${ladoB} e ${ladoC} formam um Triângulo Equilátero, onde todos os lados são iguais.`)
    }
} else {
    alert(`${ladoA}, ${ladoB} e ${ladoC} não formam um Triângulo! Verifique se a soma de 2 lados é maior que o outro lado.`)
}
