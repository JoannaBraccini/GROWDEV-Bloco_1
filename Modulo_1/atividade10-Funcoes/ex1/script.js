/*
Crie uma função que recebe 3 notas de um aluno por parâmetro e
uma letra. Se a letra for A a função deve calcular a média aritmética,
se for P, a média ponderada (peso: 5, 3 e 2).
*/

let nota1 = parseInt(prompt("Digite a primeira nota"))
let nota2 = parseInt(prompt("Digite a segunda nota"))
let nota3 = parseInt(prompt("Digite a terceira nota"))
let letra = prompt("Digite A para calcular a média aritmética ou P para calcular a média ponderada").toUpperCase()

function calcularMedia(nota1, nota2, nota3, letra) {
    
    if (letra === "A") {
        let mediaAritmetica = (nota1 + nota2 + nota3) / 3
        document.write("A média aritmética é: ",mediaAritmetica)
    } else if (letra === "P") {
        let mediaPonderada = (nota1*5 + nota2*3 + nota3*2)/5+3+2
        document.write("A média ponderada é: ",mediaPonderada)
    }
}

calcularMedia(nota1, nota2, nota3, letra)