/*
6. Desenvolva um algoritmo que mostre uma contagem regressiva de
30 até 1, marcando os números que forem primos, exatamente
como mostrado abaixo:
30 [29] 28 27 26 25 24 [23] 22 21 20 [19] 18 [17] 16...
*/

// Primo = dividido por 1 e por si mesmo
// contagem regressiva => primo sim ou não => adicionar colchete e espaço com string

let contagem = "";

for (let i = 30; i >= 1; i--) { // decrementar para reduzir o valor
    let numeroPrimo = true;

    for (let p = 2; p < i; p++) {
        if (i % p === 0) {
            numeroPrimo = false;
            break; //encerra o loop interno
        }
    }

    if (numeroPrimo) {
        contagem += `[${i}] `;
    } else {
        contagem += `${i} `;
    }
}
document.write(contagem);