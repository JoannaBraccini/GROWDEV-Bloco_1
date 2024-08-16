/*
6. Escreva um algoritmo que solicite 2 números e uma operação
matemática. O algoritmo deve realizar o cálculo com os 2 números
digitados conforme a operação informada.
*/

let numero1 = parseFloat(prompt("Informe um número:"));
let numero2 = parseFloat(prompt("Informe outro número:"));
let operacao = prompt("Informe o símbolo da operação matemática que você quer realizar (+ - * / ...):");

switch (operacao) {
    case "+":
        document.write (`${numero1} + ${numero2} = ${numero1+numero2}`)
        break;
    case "-":
        document.write (`${numero1} - ${numero2} = ${numero1-numero2}`)
        break;
    case "*":
        document.write (`${numero1} * ${numero2} = ${numero1*numero2}`)
        break;
    case "/":
        document.write (`${numero1} / ${numero2} = ${numero1/numero2}`)
        break;
    case "**":
        document.write (`${numero1} ** ${numero2} = ${numero1**numero2}`)
        break;
    
    default:
        document.write ("Tente novamente!")
        break;
}