function validarUsuario(){

    const data = request.body

    const email = data.email
    const senha = data.senhaDigitada

    if(!email){
        response.status(400).send(JSON.stringify({Mensagem: "Favor inserir um email válido"}))
    }
    if(!senha){
        response.status(400).send(JSON.stringify({Mensagem: "Favor inserir uma senha válida"}))
    }
    return next()
}

export default validarUsuario