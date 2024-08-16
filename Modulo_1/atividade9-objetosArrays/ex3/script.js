/*
3. Crie um objeto para colocar nome e duas notas. Atribua nome e
duas notas para o primeiro objeto, que será nosso primeiro aluno.
Agora crie mais um objeto para colocar informações do nosso
segundo aluno. Mostre as informações de cada aluno no console.
Mostre também a média do primeiro aluno e a média do segundo
aluno. Por fim mostre a média desta turma de 2 alunos.
*/

let aluno1 = {
    nome: 'Fulano',
    nota1: 10,
    nota2: 7
}

let aluno2 = {
    nome: 'Beltrano',
    nota1: 8,
    nota2: 10
}

let media1 = (aluno1.nota1 + aluno1.nota2)/2
let media2 = (aluno2.nota1 + aluno2.nota2)/2
let mediaTurma = (media1 + media2)/2

console.log("Dados do Aluno: ", aluno1, "A média deste aluno é: ", media1)
console.log("Dados do Aluno: ", aluno2, "A média deste aluno é: ", media2)
console.log("A média da turma é: ", mediaTurma)