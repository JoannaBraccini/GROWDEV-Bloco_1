let A = 10;
let B = 20;
document.write(`Variável A: ${A} e Variável B: ${B}`);
let temp = A;
A = B;
B = temp;
document.write(`Variável A: ${A} e Variável B: ${temp}`);