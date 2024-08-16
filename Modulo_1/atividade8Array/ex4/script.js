/*
4. Desenvolva um algoritmo que declare uma lista de 10 números e
solicite um número para o usuário e no final informe se o número
que o usuário digitou está dentro da lista ou não.
*/

let lista = [10, 20, 30, 40, 50, 60, 70, 80, 90, 105]
let numeroUsuario = parseInt(prompt("Digite um número inteiro para verificar se está na lista:"))
let encontrado = false //assume que o numero não está na lista por padrão

for (let numero of lista) {
  if (numero === numeroUsuario) {
    encontrado = true
    break
  }
}

if (encontrado) {
  console.log(`O número ${numeroUsuario} está na lista.`)
} else {
  console.log(`O número ${numeroUsuario} não está na lista.`)
}

/*
let numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

let numeroUsuario = Number(prompt("Digite um número:"));

let encontrado = 0;
for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] === numeroUsuario) {
        encontrado++;
    }
}

if (encontrado > 0) {
    console.log("O número está na lista.");
} else {
    console.log("O número não está na lista.");
}
*/