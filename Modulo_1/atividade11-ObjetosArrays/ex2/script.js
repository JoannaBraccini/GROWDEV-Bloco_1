/*
2. James estava criando uma array com as cores do arco-íris, e ele
esqueceu algumas cores. As cores padrão de um arco-íris são
normalmente listadas nesta ordem:
const rainbow = ["Vermelho", "Laranja", "Amarelo", "Verde", "Azul",
"Roxo"];

mas James tinha isto:
const rainbow = ["Vermelho", "Laranja", "Preto", "Azul"];

Usando somente o método splice insira as cores que faltam na array e
remova a cor "Preto", seguindo estes passos:

a. Remova "Preto"
b. Adicione "Amarelo" e "Verde"
c. Adicione "Roxo"
*/
//splice -> 3 parâmetros: (n1,n2,n3) -> n1 = posição indice, n2 = qtdd elementos deletados,
//n3 = elementos a serem adicionados(é o único que pode estar faltando)

let rainbow = ["Vermelho", "Laranja", "Preto", "Azul"]

//a
rainbow.splice(2, 1)
console.log(rainbow)

//b
rainbow.splice(3, 0, "Amarelo", "Verde")
console.log(rainbow)

//c
rainbow.splice(5, 0, "Roxo")
console.log(rainbow)