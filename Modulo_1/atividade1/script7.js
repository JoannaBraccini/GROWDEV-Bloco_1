let eleitores = prompt(parseInt("Número de eleitores:"));
let brancos = prompt(parseInt("Número de votos brancos:"));
let nulos = prompt(parseInt("Número de votos nulos:"));
let validos = prompt(parseInt("Número de votos validos:"));
let percentualBrancos = brancos / eleitores * 100 
let percentualNulos = nulos / eleitores * 100 
let percentualValidos = validos / eleitores * 100

document.write(`O percentual de votos brancos é ${percentualBrancos.toFixed(2)}%.<br> O percentual de votos nulos é ${percentualNulos.toFixed(2)}%.<br> O percentual de votos nulos é ${percentualValidos.toFixed(2)}%.`)