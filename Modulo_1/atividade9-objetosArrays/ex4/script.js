/*
4. Crie um cadastro de pessoas onde o usuário informe o nome, idade
e se está trabalhando ou não, se a pessoa estiver trabalhando

pergunte para ele o salário que está ganhando. Para cada pessoa
cadastrada, pergunte ao usuário se ele deseja continuar
cadastrando ou não. No final, mostre as pessoas que estão
desempregadas, as pessoas que estão empregadas separadas
pelas que ganham mais que 2500 e menos que 2500.

Exemplo de resultado:
Pessoas desempregadas:
Nome: Alessandro, Idade: 28
Nome: Alessandro, Idade: 28

Pessoas empregadas com salários menores que 2500:
Nome: Alessandro, Idade: 28, Salário: 1500
Nome: Alessandro, Idade: 28, Salário: 2400

Pessoas empregadas com salários maiores que 2500:
Nome: Alessandro, Idade: 28, Salário: 2700
Nome: Alessandro, Idade: 28, Salário: 3000
*/
//receber as pessoas e seus dados
//trabalhando ou não => salário
//armazenar dados pessoas
//continuar ou não
//separar 3 grupos
//mostras as listas

let desempregados = []
let salarioMaior2500 = []
let salarioMenor2500 = []
let continuar = true

while (continuar) {
    
    let nome = prompt("Digite seu nome")
    let idade = parseInt(prompt("Digite sua idade"))
    let trabalha = confirm("Está trabalhando atualmente?")    
    
    let salario = 0
    if (trabalha) {
        salario = parseFloat(prompt("Digite seu salário"))        
    }
    
    let usuario = {
        nome : nome, idade : idade, salario : salario
    }

    if (trabalha && salario > 2500) {
        salarioMaior2500.push(usuario)
    } else if (trabalha && salario <= 2500) {
        salarioMenor2500.push(usuario)
    } else {
        desempregados.push(usuario)
    }
    continuar = confirm("Deseja cadastrar novo usuário?")
}

console.log("Pessoas desempregadas:");
for (let pessoa of desempregados) {
    console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}`);
}

console.log("\nPessoas empregadas com salários menores que 2500:");
for (let pessoa of salarioMenor2500) {
    console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Salário: ${pessoa.salario}`);
}

console.log("\nPessoas empregadas com salários maiores que 2500:");
for (let pessoa of salarioMaior2500) {
    console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Salário: ${pessoa.salario}`);
}

/*
let pessoas = []
let continuar = true

while (continuar) {
    let nome = prompt("Digite seu nome")
    let idade = parseInt(prompt("Digite sua idade"))
    let trabalhando = confirm("Está trabalhando atualmente?")
    let salario = 0

    if (trabalhando) {
        salario = parseFloat(prompt("Digite seu salário"))
    }

    pessoas.push({ nome, idade, trabalhando, salario })

    continuar = confirm("Deseja continuar cadastrando?")
}

let desempregadas = []
let empregadasMenor2500 = []
let empregadasMaior2500 = []

for (let pessoa of pessoas) {
    if (!pessoa.trabalhando) {
        desempregadas.push(pessoa)
    } else if (pessoa.salario < 2500) {
        empregadasMenor2500.push(pessoa)
    } else {
        empregadasMaior2500.push(pessoa)
    }
}

console.log("Pessoas desempregadas:")
for (let pessoa of desempregadas) {
    console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}`)
}

console.log("Pessoas empregadas com salários menores que 2500:")
for (let pessoa of empregadasMenor2500) {
    console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Salário: ${pessoa.salario}`)
}

console.log("Pessoas empregadas com salários maiores que 2500:")
for (let pessoa of empregadasMaior2500) {
    console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Salário: ${pessoa.salario}`)
}
*/