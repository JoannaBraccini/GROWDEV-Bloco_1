function calcular() {
    //Receitas
    const valorBase = parseFloat(document.getElementById('valor_base').value)
    const valorTransporte = parseFloat(document.getElementById('valor_transporte').value)
    const valorAlimentacao = parseFloat(document.getElementById('valor_alimentacao').value)
    const totalReceita = document.getElementById('valor_receita')

    //Descontos
    const automovel = parseFloat(document.getElementById('valor_automovel').value)
    const faltas = parseFloat(document.getElementById('faltas').value)
    const valorDescontos = document.getElementById('valor_descontos')

    //Total
    const valorTotal = document.getElementById('valor_total')

    let receita = valorBase + valorTransporte + valorAlimentacao
    totalReceita.value = receita

    let desconto = automovel + faltas
    valorDescontos.value = desconto

    valorTotal.value = receita - desconto
}

document.querySelectorAll('input[type=number]').forEach(input => {
    input.addEventListener('change', calcular)//input muda na hora, change espera sair do foco
})

//Calcular
const btnCalcular = document.getElementById('btn_calcular')
btnCalcular.addEventListener('click', calcular)