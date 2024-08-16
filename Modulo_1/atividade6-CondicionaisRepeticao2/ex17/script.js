/*
17. Escreva um algoritmo que armazene o número total de eleitores de
um município, o número de votos brancos, nulos e válidos. Calcular
e escrever o percentual que cada um representa em relação ao
total de eleitores. O algoritmo deve fazer uma validação para que as
porcentagens dos votos armazenados (brancos, nulos e válidos)
respeitem o limite do número total de eleitores, ou seja, garantir que
a soma dos votos brancos, nulos e válidos não seja maior que o
número total de eleitores.
*/

let totalEleitores = parseInt(prompt("Informe o total de eleitores de seu município"))
let votosBrancos = parseInt(prompt("Informe o total de votos em branco"))
let votosNulos = parseInt(prompt("Informe o total de votos anulados"))
let votosValidos = parseInt(prompt("Informe o total de votos válidos"))
let somaVotos = votosBrancos + votosNulos + votosValidos

if (totalEleitores >= somaVotos) {
    let percentualBrancos = votosBrancos * 100 / totalEleitores
    let percentualNulos = votosNulos * 100 / totalEleitores
    let percentualValidos = votosValidos * 100 / totalEleitores
    document.write
    (`Total de eleitores: ${totalEleitores} - Total de votos: ${somaVotos}<br>
        Votos em branco representam ${percentualBrancos}%<br>
        Votos anulados representam ${percentualNulos}%<br>
        Votos válidos representam ${percentualValidos}%`)

} else {
    document.write(`Eleição anulada! Número de votos (${somaVotos}) é maior que número de eleitores (${totalEleitores}).`)
}