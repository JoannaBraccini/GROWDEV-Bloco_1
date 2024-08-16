/*
2. Pedro tem 1,50m de altura e cresce 2 centímetros por ano, enquanto
Lucas tem 1,10m de altura e cresce 3 centímetros por ano.
Construa um algoritmo que calcule e imprima quantos anos serão
necessários para que:
a. Lucas e Pedro tenham o mesmo tamanho;
b. Lucas seja maior que Pedro.
*/

//incrementar a altura de cada um até ficarem iguais => seguir incrementando até Lucas passar Pedro

const crescimentoPedro = 2;
const crescimentoLucas = 3;

let alturaPedro = 150;
let alturaLucas = 110;

let anos = 0;

while (alturaLucas < alturaPedro) {
    alturaPedro += crescimentoPedro
    alturaLucas += crescimentoLucas
    anos++
    //console.log(anos, alturaPedro, alturaLucas)
}
document.write (`a. Para que Lucas e Pedro tenham o mesmo tamanho, serão necessários ${anos} anos.<br>`);

anos = 0

while (alturaLucas <= alturaPedro) {
    alturaPedro += crescimentoPedro
    alturaLucas += crescimentoLucas
    anos++
}
document.write (`b. Para que Lucas seja maior que Pedro, levará mais ${anos} ano(s).`);