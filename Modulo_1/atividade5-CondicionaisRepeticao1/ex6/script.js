/*
6. Faça um programa que leia a largura e o comprimento de um
terreno retangular, calculando e mostrando a sua área em m2. O
programa também deve mostrar a classificação desse terreno, de
acordo com a lista abaixo:
Abaixo de 100m2 = TERRENO POPULAR
Entre 100m2 e 500m2 = TERRENO MASTER
Acima de 500m2 = TERRENO VIP
*/

let larguraTerreno = parseFloat(prompt("O terreno tem quantos metros de largura?"))
let comprimentoTerreno = parseFloat(prompt("O terreno tem quantos metros de comprimento?"))
let areaTotal = larguraTerreno*comprimentoTerreno

if (areaTotal < 100) {
    console.log(`Terreno popular: ${areaTotal}m².`)
} else if (areaTotal >= 100 && areaTotal <= 500) {
    console.log(`Terreno master: ${areaTotal}m².`)
} else {
    console.log(`Terreno vip: ${areaTotal}m².`)
}