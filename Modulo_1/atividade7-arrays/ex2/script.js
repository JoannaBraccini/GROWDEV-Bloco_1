/*
2. Criar um array e percorrê-lo utilizando o loop for of
a. Crie um array com o nome "numeros" e adicione 5 números de
sua escolha
b. Utilize o loop for of para percorrer o array e exibir a soma dos
números na tela
*/

let numeros = [10, 5, 76, 52, 13]
let soma = 0

for (let i of numeros) {
    soma += i
}
document.write("Soma: ",soma)