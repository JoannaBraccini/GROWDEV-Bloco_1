/*
Contextualização do desafio:
As Ilhas Growdev formam um reino independente nos mares do Pacífico.
Como é um reino recente, a sociedade é muito influenciada pela
informática. A moeda oficial é a GrowCoin; existem notas de GC$ 50,00,
GC$ 10,00, GC$ 5,00 e GC$ 1,00. Vocês foram contratados para ajudar na
programação dos caixas automáticos de um grande banco das Ilhas
Growdevs.

Tarefa:
Os caixas eletrônicos das Ilhas Growdev operam com todos os tipos de
notas disponíveis, mantendo um estoque de cédulas para cada valor. Os
clientes do banco utilizam os caixas eletrônicos para efetuar retiradas de
um certo número inteiro de GrowCoins.
Sua tarefa é escrever um algoritmo que, dado o valor de GrowCoins
desejado pelo cliente, determine o número de cada uma das notas
necessárias para totalizar esse valor. Por exemplo, se o Marcelo deseja
retirar GC$ 50,00 basta entregar uma única nota de cinquenta GrowCoins.
Se o Édson deseja retirar GC$ 72,00 será necessário entregar uma nota de
GC$ 50,00, duas de GC$ 10,00 e duas de GC$ 1,00

Exemplo de entrada:
72
Exemplo de saída:
GC$ 50,00 -> 1
GC$ 10,00 -> 2
GC$ 5,00 -> 0
GC$ 1,00 -> 2
*/

//banco tem 4 valores de notas: 50, 10, 5, 1, todo valor precisa ser dividido nessas notas

let saque = parseInt(prompt("Digite o valor a ser retirado"))
//estoque
let notas50 = 0
let notas10 = 0
let notas5 = 0
let notas1 = 0

//preciso pegar o valor do saque e dividir nas notas disponiveis
document.write(`Seu saque de GC$${saque} está sendo processado...<hr>`)
for (let i = 0; i < saque; i++) {
    if (saque % 50 === 0) {
        notas50++;
        saque -= 50;
    } else if (saque % 10 === 0) {
        notas10++;
        saque -= 10;
    } else if (saque % 5 === 0) {
        notas5++;
        saque -= 5;
    } else {
        notas1++;
        saque -= 1;
    }
}
document.write(`Seu saque será feito com as seguintes notas:<br>GC$ 50,00 => ${notas50} nota(s)<br>GC$ 10,00 => ${notas10} nota(s)<br>GC$ 5,00 => ${notas5} nota(s)<br>GC$ 1,00 => ${notas1} nota(s)<br>`)

/*
com math.floor:

let saque = parseInt(prompt("Digite o valor a ser retirado"));

let notas50 = Math.floor(saque / 50); //divide o saque por 50 e o resultado é o número de notas
saque %= 50; //o resto da divisão passa a ser o valor do saque

let notas10 = Math.floor(saque / 10); //divide o saque por 10 e o resultado é o número de notas
saque %= 10; //o resto da divisão passa a ser o valor do saque

let notas5 = Math.floor(saque / 5); //divide o saque por 5 e o resultado é o número de notas
saque %= 5; //o resto da divisão passa a ser o valor do saque

let notas1 = saque; //o valor que restou é o número de notas

document.write(`Seu saque de GC$${saque} está sendo processado...<hr>`);
document.write(`Seu saque será feito com as seguintes notas:<br>GC$ 50,00 => ${notas50} nota(s)<br>GC$ 10,00 => ${notas10} nota(s)<br>GC$ 5,00 => ${notas5} nota(s)<br>GC$ 1,00 => ${notas1} nota(s)<br>`);
*/