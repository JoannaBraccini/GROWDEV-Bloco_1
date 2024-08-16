/*
9. Escreva um programa que pergunte a velocidade de um carro. Caso
ultrapasse 80Km/h, exiba uma mensagem dizendo que o usuário foi
multado. Nesse caso, exiba o valor da multa, cobrando R$5 por cada
km acima da velocidade permitida.
*/

let velocidade = parseInt(prompt("Digite a velocidade do carro:"))
const multa = 5
const limite = 80

if (velocidade <= 80) {
    document.write ("Você não foi multado.")
} else {
    document.write (`Você foi multado em R$${(velocidade-limite)*multa}.`)
}