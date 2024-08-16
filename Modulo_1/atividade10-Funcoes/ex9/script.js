/*
9. Crie uma função chamada calcularMedia(nota1, nota2, nota3,
nome), que recebe 4 parâmetros sendo três inteiros e um texto
(String). Esta função será chamada ao abrir a página e mostrará um
alerta com a média. Exemplo: “João, sua média é 70.” A função
também deve mostrar no console.log() as notas recebidas. Exemplo
“Nota 1: 60,Nota 2: 70,Nota 3: 80”.
*/
let nome = prompt("Digite seu nome")

let notas = [
nota1 = parseInt(prompt("Digite a primeira nota")),
nota2 = parseInt(prompt("Digite a segunda nota")),
nota3 = parseInt(prompt("Digite a terceira nota"))]


function calcularMedia(nota1, nota2, nota3, nome) {
    let media = (nota1+nota2+nota3) / 3
    alert(`${nome}, sua média é ${media.toFixed(2)}.`)
    console.log(`Nota 1: ${notas[0]}, Nota 2: ${notas[1]}, Nota 3: ${notas[2]}`)
}

calcularMedia(nota1, nota2, nota3, nome)