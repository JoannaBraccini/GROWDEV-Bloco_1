/*
9. Informe um valor a uma variável e imprima no console se o número
é primo.
*/

let numero = 11
let primo = true

if (numero <= 1) { //1 não é considerado primo
    primo = false
} else {
    for (let i = 2; i <= Math.sqrt(numero); i++) { //math.sqrt = raiz quadrada. pode ser substituído por 'i <= numero / 2'
        if (numero % i === 0) {
            primo = false
            break;
        }
    }
}

if (primo) {
    console.log(`${numero} é um número primo`);
} else {
    console.log(`${numero} não é um número primo`);
}