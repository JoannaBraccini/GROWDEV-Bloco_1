/*
2. Desenvolva um aplicativo que leia o salário e o sexo de vários
funcionários. No final, mostre o total de salários pagos aos homens e
o total pago às mulheres. O programa vai perguntar ao usuário se
ele quer continuar ou não sempre que ler os dados de um
funcionário.
*/

let salario = 0
let sexo = ""
let continua = ""
let totalMulher = 0
let totalHomem = 0

do {
    salario = parseFloat(prompt("Digite seu salário"))
    sexo = prompt("Escolha seu sexo: Masculino/Feminino").toLowerCase()
    continua = prompt("Deseja continuar? Sim/Não").toLowerCase()
    if (sexo === "feminino") {
        totalMulher += salario
    } else if (sexo === "masculino") {
        totalHomem += salario
    }
} while (continua === "sim");

document.write(`Total de salários pagos aos homens: R$ ${totalHomem}<br>Total de salários pagos às mulheres: R$ ${totalMulher}`)