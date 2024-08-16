const contador = document.getElementById('btnConfirmarPresenca')
const alunoPresente = document.getElementById('alunos')
const mensagem = document.getElementById('texto')
let contagem = 0
contador.addEventListener('click', () => {
    
    contagem++
    alunoPresente.innerHTML = `<b>${contagem} alunos</b>`
    mensagem.innerHTML = `<b>Confirme no mínimo 10 alunos para liberar a aula!</b>`
    mensagem.style.color = '#FF070E'

    if (contagem >= 10) {
        contador.disabled = true
        mensagem.innerHTML = `<b>Aula liberada com sucesso! Gerando link...</b>`
        mensagem.style.color = '#168000'
        contador.style.backgroundColor = 'gray'

        setTimeout(() => {
            const link = document.createElement('a')
            link.href = 'https://www.youtube.com/@growdevoficial/videos'
            link.target = '_blank'
            link.innerHTML = 'Acessar aula'
            link.style.textDecoration = 'none'
            mensagem.innerHTML = ''
            mensagem.appendChild(link)            
        }, 3000)
    }
})