const cards = document.querySelectorAll('.card')
cards.forEach(card => {
    card.setAttribute('style', 'background-color:#E16E0A')

    const title = card.querySelector('h2.titulo-card')
    title.innerText = 'Meu Card'
    title.style.color = '#28375A'
    title.style.marginTop = '15px'

    const description = card.querySelector('p.descricao-card')
    description.innerText = 'Descrição modificada pelo JavaScript.'
    description.style.color = '#FFFFFF'
    description.style.marginTop = '20%'
    description.style.fontSize = '15px'

    const btnEdit = card.querySelector('.botao-editar')
    btnEdit.className += ' btnEdit'
    btnEdit.addEventListener('click', editarCard)
    
    const btnDelete = card.querySelector('.botao-apagar')
    btnDelete.className += ' btnDelete'
    btnDelete.addEventListener('click', apagarCard)
})

function editarCard() {
    alert('Clicou em Editar!')
}

function apagarCard() {
    let confirmDelete = confirm('Confirmar exclusão do card?')

    if (confirmDelete === true) {
        alert('Confirmado!')        
    } else {
        return alert('Cancelou!')
    }
}