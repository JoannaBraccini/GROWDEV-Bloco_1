/*
3. Desenvolva um algoritmo que preenche um vetor com os 4
primeiros números perfeitos.
*/
// 6 -- 28 -- 496 -- 8128 -> divisores somados === valor do número perfeito -> 6 = 1+2+3
//array vazio / percorrer indice até preencher 4 itens / calcular perfeitos / inserir (push) no array

/*
let arrayNumeros = []
let numerosPerfeitos = 2

for (let i = 0; i < 4; numerosPerfeitos++){
    let somaDivisores = 1

    for (let j = 2; j < numerosPerfeitos; j++){
        if (numerosPerfeitos % j === 0){
            somaDivisores += j
        }
    }
    if (somaDivisores === numerosPerfeitos){
        arrayNumeros.push(numerosPerfeitos)
        i++
    }

}
console.log(arrayNumeros)
*/

let numerosPerfeitos = []
let somaDivisores

for (let numeroAtual = 2; numerosPerfeitos.length < 4; numeroAtual++) { //numeroAtual começa em 2 pq 1 não é considerado perfeito
    somaDivisores = 1 // Inicia com 1 porque todo número é divisível por 1
    
    for (let i = 2; i <= numeroAtual / 2; i++) { //não precisa verificar divisores > que a metade do numeroAtual, por isso divide por 2
        //sendo i = 2, se i for <= n/2, incremente i
        if (numeroAtual % i === 0) { //se i for divisor de numeroAtual, adiciona na somaDivisores
            somaDivisores += i
        }
    }
    
    if (somaDivisores === numeroAtual) {// Se a somaDivisores for igual ao número, ele é perfeito
        numerosPerfeitos.push(numeroAtual)
    }
}
console.log(numerosPerfeitos)