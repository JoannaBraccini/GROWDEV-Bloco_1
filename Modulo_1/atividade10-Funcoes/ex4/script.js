/*
4. Crie uma função que recebe por parâmetro o tempo de duração de
uma fábrica expressa em segundos e retorna esse tempo em horas,
minutos e segundos.

Ex:
Entrada: 3672
Saída: 1:1:12
*/
// seg->hr = /3600
let tempoEmSegundos = parseInt(prompt("Digite o tempo de duração da Fábrica em segundos"))

function converterTempo(tempoEmSegundos) {
    if (!isNaN(tempoEmSegundos) && tempoEmSegundos > 0) {       //avaliar se o prompt recebido é um número válido antes de executar o código
        let horas = Math.floor(tempoEmSegundos / 3600)          //Math.floor arredonda para baixo para dar valor inteiro
        let minutos = Math.floor((tempoEmSegundos / 60) % 60)   //seg/60 = min, min % 60 para restar nº de 0 a 59 (< 1 minuto)
        let segundos = tempoEmSegundos % 60
        
        document.write(horas,":",minutos,":",segundos)
    } else {
        alert("Digite um valor válido!")
    }
}

converterTempo(tempoEmSegundos)