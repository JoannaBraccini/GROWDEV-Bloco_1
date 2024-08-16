// const btn = document.querySelector('button')
// btn.addEventListener('click',() => {
//     const name = prompt('Digite seu nome')
//     if(!name){
//         return alert('Não pode estar em branco!')
//     }
//     const paragrafo = document.querySelector('p')
//     paragrafo.innerHTML = `E aí ${name}! Você está deixando o seu site dinâmico.`
// })

const texto = document.getElementById('texto-paragrafo')
function alterarTexto() {
    const nome = prompt('Digite seu nome')
    if(!nome){
        return alert('Não pode estar em branco!')
    }
    texto.textContent = `E aí ${nome}! Você está deixando o seu site dinâmico.`//textContent e InnerText são praticamente iguais
}