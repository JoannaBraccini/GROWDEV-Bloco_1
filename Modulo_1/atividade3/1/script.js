/*
1. Desenvolva um algoritmo que leia a altura de 15 pessoas. Este
programa deverá calcular e mostrar:
a. A menor altura do grupo;
b. A maior altura do grupo;
*/

//receber 15 alturas => comparar as alturas recebidas => retornar a maior e a menor

let menorAltura = Infinity; //Infinity é para que qualquer que seja o valor digitado, será menor que esse valor, o negativo é o oposto
let maiorAltura = -Infinity;

for (let i = 1; i <= 15; i++) {
    let altura = parseFloat(prompt(`Digite a altura da ${i}ª pessoa em centímetros:`));

    if (altura < menorAltura) {
        menorAltura = altura; //transforma infinity no valor recebido no prompt
    }

    if (altura > maiorAltura) {
        maiorAltura = altura; //transforma -infinity no valor recebido no prompt
    }
}

//nesse caso, só armazena e mostra o menor e o maior. precisaria de array para mostrar todas alturas recebidas
document.write(`A menor altura do grupo é: ${menorAltura/100} metros.`);
document.write(`A maior altura do grupo é: ${maiorAltura/100} metros.`);