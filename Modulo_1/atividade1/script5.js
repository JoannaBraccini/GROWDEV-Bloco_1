let nomeAluno = prompt("Nome do aluno:");
let nota1 = prompt(parseFloat("Nota 1:"));
let nota2 = prompt(parseFloat("Nota 2:"));
let nota3 = prompt(parseFloat("Nota 3:"));
let media = (nota1 + nota2 + nota3) / 3;

document.write(`O aluno ${nomeAluno} ficou com média ${media.toFixed(2)}.`);