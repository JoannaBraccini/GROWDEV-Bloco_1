/*
7. Desenvolva um algoritmo que leia 10 números, calcule e escreva a
média aritmética dos valores lidos, a quantidade de valores
positivos, a quantidade de valores negativos e o percentual de
valores negativos e positivos.
*/

//receba 10 numeros incrementando => média simples (soma/10) => somar quantos positivos e quantos negativos => quantos por cento do total

let soma = 0;
let positivos = 0;
let negativos = 0;

for (let i = 1; i <= 10; i++) {
    let numero = parseFloat(prompt(`Digite o ${i}º número:`));
    
    soma += numero
    document.write(`${numero}, `)

    if (numero > 0) {
        positivos++ //incrementar aos positivos
    } else if (numero < 0) (
        negativos++ //incrementar aos negativos
    )
}

let media = soma / 10;
//console.log(soma)
let percentualPositivos = (positivos / 10) * 100;
let percentualNegativos = (negativos / 10) * 100;

document.write(`<hr>Média aritmética: ${media.toFixed(2)}<br>`);
document.write(`Quantidade de valores positivos: ${positivos}<br>`);
document.write(`Quantidade de valores negativos: ${negativos}<br>`);
document.write(`Percentual de valores positivos: ${percentualPositivos.toFixed(2)}%<br>`);
document.write(`Percentual de valores negativos: ${percentualNegativos.toFixed(2)}%`);