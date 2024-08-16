/*
3. Crie um algoritmo que leia o valor inicial da contagem, o valor final e
o incremento, mostrando em seguida todos os valores no intervalo:
Ex:
Digite o primeiro Valor: 3
Digite o último Valor: 10
Digite o incremento: 2
Contagem: 3 5 7 9 Acabou!
*/

let valorInicial = Number(prompt("Digite o valor inicial"))
let valorFinal = Number(prompt("Digite o valor final"))
let incremento = Number(prompt("Digite o valor a ser incrementado"))
let contagem = ""

if (valorInicial <= valorFinal) {
    for (valorInicial; valorInicial <= valorFinal; valorInicial += incremento) {
        contagem += valorInicial
        if (valorInicial < valorFinal) {
            contagem += " ";
        }
    }
    if (valorInicial >= valorFinal) {
        contagem += " Acabou!";
    }
}
document.write(`Contagem: ${contagem}`);