//4. Reescreva o exercício 3, utilizando apenas o SWITCH.

let diaSemana = parseInt(prompt("Digite um número de 1 a 7"))

switch (diaSemana) {
    case 1:
        console.log("Você escolheu Domingo!")
        break;
    case 2:
        console.log("Você escolheu Segunda!")
        break;
    case 3:
        console.log("Você escolheu Terça!")
        break;
    case 4:
        console.log("Você escolheu Quarta!")
        break;
    case 5:
        console.log("Você escolheu Quinta!")
        break;
    case 6:
        console.log("Você escolheu Sexta!")
        break;
    case 7:
        console.log("Você escolheu Sábado!")
        break;
    default:
        console.log("Dia não reconhecido")
        break;
   
}
