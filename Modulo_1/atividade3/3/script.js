/*
3. Escreva um algoritmo que faça a tabuada de um número e
apresente o resultado de acordo com o modelo a seguir, sabendo
que o multiplicando deverá ser fornecido pelo usuário (n) e a
quantidade de iterações também (i).
1 * 2 = 2
2 * 2 = 4
3 * 2 = 6
...
*/

//receber multiplicando e iterações => incrementar até atingir a iteração escolhida

let multiplicando = parseInt(prompt("Digite o número a ser multiplicado:"));
let iteracoes = parseInt(prompt("Digite quantas vezes a operação será executada:"));

for (let i = 1; i <= iteracoes; i++) { //i é o contador
    resultado = i * multiplicando
    document.write(`${i} x ${multiplicando} = ${resultado}<br>`);
}