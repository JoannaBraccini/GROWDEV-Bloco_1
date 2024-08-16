/*
1. Escreva um algoritmo para ler uma temperatura em graus Celsius,
calcular e escrever o valor correspondente em graus Fahrenheit.
*/


let tempCelsius = parseFloat(prompt("Digite a temperatura em graus Celsius:"));
let tempFahrenheit = tempCelsius * 1.8 + 32;

document.write (`A temperatura convertida para Fahrenheit é ${tempFahrenheit}ºF`);