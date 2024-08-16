/*
5. Escreva um algoritmo que solicite ao usuário a entrada de 5 nomes,
e que exiba a lista desses nomes na tela. Após exibir essa lista, o
programa deve mostrar também os nomes na ordem inversa em
que o usuário os digitou.

Ex:
Entrada: Édson, Marcelo, Letícia, Ju, Thobias
Saída: Thobias, Ju, Letícia, Marcelo, Édson
*/

let listaNomes = []

for (let i = 0; i < 5; i++) {
    let nome = prompt(`Digite o ${i+1}º nome`)//+1 pq o indice começa em 0
    listaNomes.push(nome)
    
}
document.write("Nomes escolhidos: <br>",listaNomes.join('<br>'),'<br>')// join junta os elementos e retorna string, <br> para exibir em lista, quebrando após cada item
document.write("Nomes na ordem inversa: <br>",listaNomes.reverse().join('<br>'))// reverse para inverter