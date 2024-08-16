function validarViagem(request, response, next){

    const data = request.body
    const {nomeViagem, precoViagem, qtdPromocao} = data
    
    if(!nomeViagem){
        response.status(400).send(JSON.stringify({Mensagem: "Passe um nome de viagem válido"}))
    }

    if(!precoViagem){
        response.status(400).send(JSON.stringify({Mensagem: "Passe um preço da viagem válido"}))
    }
    
    if(!qtdPromocao){
        response.status(400).send(JSON.stringify({Mensagem: "Passe uma quantidade da promoção válida"}))
    }

    return next()
}

export default validarViagem