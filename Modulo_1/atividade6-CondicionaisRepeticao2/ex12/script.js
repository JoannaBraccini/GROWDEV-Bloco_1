/*
12. Para doar sangue é necessário ter entre 18 e 67 anos. Faça um
programa que armazene a idade de uma pessoa e diga se ela pode
doar sangue ou não. Use alguns dos operadores lógicos OU (||) e E
(&&).
*/

let idadeDoador = parseInt(prompt("Digite sua idade"))

if (idadeDoador >= 18 && idadeDoador <= 67) {
    document.write("Obrigado! Doar sangue salva vidas!")
} else if (idadeDoador < 18 || idadeDoador > 67) {
    document.write("Infelizmente você não pode doar sangue. Mas convide seus familiares e amigos!")
}