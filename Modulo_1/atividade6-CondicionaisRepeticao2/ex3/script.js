/*
3. Utilizando o IF, ELSE, ELSE IF crie uma estrutura para receber um
número de 1 a 7 e imprimir no console o dia da Semana. Para este
exercício assumimos que o dia 1 é Domingo, dia 2 é segunda e assim
por diante. Caso o número recebido não esteja neste intervalo
imprimir “Dia não reconhecido”.
*/

let diaSemana = parseInt(prompt("Digite um número de 1 a 7"))

if (diaSemana === 1) {
    console.log("Você escolheu Domingo!")
    } else if (diaSemana === 2) {
        console.log("Você escolheu Segunda!")
    } else if (diaSemana === 3) {
        console.log("Você escolheu Terça!")
    } else if (diaSemana === 4) {
        console.log("Você escolheu Quarta!")
    } else if (diaSemana === 5) {
        console.log("Você escolheu Quinta!")
    } else if (diaSemana === 6) {
        console.log("Você escolheu Sexta!")
    } else if (diaSemana === 7) {
        console.log("Você escolheu Sábado!")
    } else {
        console.log("Dia não reconhecido")
    }