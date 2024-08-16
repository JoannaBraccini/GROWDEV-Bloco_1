/*
5. Faça um algoritmo que pergunte a distância que um passageiro
deseja percorrer em Km. Calcule o preço da passagem, cobrando
R$0.50 por Km para viagens até 200Km e R$0.45 para viagens mais
longas.
*/

let distancia = parseFloat(prompt("Quantos quilômetros você deseja percorrer?"))
const passagemPerto = 0.50
const passagemLonge = 0.45
let precoFinal = 0

if (distancia <= 200) {
    precoFinal = distancia*passagemPerto
} else {
    precoFinal = distancia*passagemLonge
}
console.log("Valor da passagem: R$",precoFinal)