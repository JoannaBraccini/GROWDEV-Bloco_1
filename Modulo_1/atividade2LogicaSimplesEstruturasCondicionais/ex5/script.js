/*
5. Desenvolva um algoritmo que faça o cálculo do índice de massa
corporal de uma pessoa. Esse algoritmo deve solicitar ao usuário
que digite sua altura, em seguida solicitar que digite seu peso e que
lhe exiba o status. O status vai variar da seguinte forma:
a. Se o IMC for menor que 18,5 o status a ser mostrado deve ser
“Você está abaixo da faixa de peso ideal”;
b. Se o IMC estiver acima de 24,99 o status a ser mostrado será
“Você está acima da faixa de peso ideal”;

c. Se o IMC for igual ou maior que 18,5 e igual ou menor que
24,99, o status a ser mostrado será “Você está dentro da faixa
de peso ideal”.
*/

let altura = parseFloat(prompt("Informe a sua altura em centímetros:")) / 100;
let peso = parseFloat(prompt("Informe o seu peso em quilos:"));
let indiceMassaCorporal = (peso / (altura * altura)).toFixed(2);

if (indiceMassaCorporal < 18.5) {
    document.write (`IMC: ${indiceMassaCorporal}. Você está abaixo da faixa de peso ideal.`)
} else if (indiceMassaCorporal > 24.99) {
    document.write (`IMC: ${indiceMassaCorporal}. Você está acima da faixa de peso ideal.`)
} else {
    document.write (`IMC ${indiceMassaCorporal}. Você está dentro da faixa
    de peso ideal.`)
}