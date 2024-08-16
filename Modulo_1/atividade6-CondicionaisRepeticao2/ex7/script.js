/*
7. Utilizando do...while, imprima na tela a soma de todos os números
entre 10 e 100.
*/

//progressão aritmética: soma = n/2(a1+an) => n = 100-10+1 = 91, a1=10, an=100 => 91/2(10+100) = 5005

let numero = 10
let soma = 0

do {
    soma += numero
    numero++ //ao incrementar o numero passa de 10 para 11, 11 para 12 etc..

} while (numero <= 100)

console.log(`A soma de todos os números entre 10 e 100 é ${soma}`)
