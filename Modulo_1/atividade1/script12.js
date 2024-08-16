let nascimento = prompt("Digite seu ano de nascimento:");
let ano = new Date().getFullYear();
let idade = ano-nascimento;

if(idade >= 16) {
    console.log("Parabéns, você pode votar!")
} else {
    console.log("Lamento, você não pode votar ainda.")
}