/*
5. Faça um programa usando a estrutura “for” que leia um número
inteiro positivo e mostre na tela uma contagem de 0 até o valor
digitado:
Ex: Digite um valor: 9
Contagem: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, FIM!
*/

//receber valor => incrementar até atingir o valor => adicionar na string com vírgula => finalizar com string FIM!

let numero = parseInt(prompt("Digite um número inteiro positivo para iniciar a contagem:"));
let contagem = ""; //string vazia

if (numero >= 0) {
    for (let i = 0; i <= numero; i++) {
        contagem += i //a string é preenchida com o contador
        if (i < numero) {
            contagem += ", "; //0, 1,...
        }
    }
    if (numero > 0) {
        contagem += ", FIM!"; //terminada a contagem, adiciona a string
    }
} else {
        document.write("Digite um valor inteiro positivo.");
}
document.write(`Contagem: ${contagem}`); //por ser uma string, fica tudo na mesma linha