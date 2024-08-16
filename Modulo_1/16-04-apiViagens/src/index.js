//------CONFIG BÁSICAS------------
import express from 'express'
import cors from 'cors'
import bcrypt from 'bcrypt'
import validarViagem from './middleware/validarViagem'
import validarUsuario from './middleware/validarUsuario'

const app = express()

app.use(cors())
app.use(express.json())

let viagens = []
let proximaViagem = 1
let admins = []
let proximaAdmin = 1

//http://localhost:3333/viagens/:idBusca
//---------- POST ------------
app.post('/viagens',validarViagem,(request, response)=>{

    const data = request.body    
    let novaViagem = {idViagem:data.proximaViagem, nomeViagem:data.nomeViagem, precoViagem:data.precoViagem, qtdPromocao:data.qtdPromocao}

    viagens.push(novaViagem)
    proximaViagem++

    response.status(201).send(JSON.stringify({Mensagem: `Viagem ${novaViagem.nomeViagem} criada com sucesso!
    Seu identificador é: ${novaViagem.idViagem} | Preço: R$${novaViagem.precoViagem} | Temos ${novaViagem.qtdPromocao} viagens em Promoção.`}))
})

//--------- GET ------------
app.get('/viagens',(request, response)=>{

    if(viagens.length === 0){
        response.status(400).send(JSON.stringify({Mensagem: 'Nenhuma viagem cadastrada. Crie uma nova viagem.'}))
    }

    const dadosMapeados = viagens.map((viagem)=> 
    `As viagens são: ID: ${viagem.idViagem} | ${viagem.nomeViagem} | Preço R$${viagem.precoViagem} | Quantidade em Promoção: ${viagem.qtdPromocao}`)

    response.status(200).send(dadosMapeados)
})

//-------- PUT ----------
app.put('/viagens/:idBusca',validarViagem,(request, response)=>{

    const data = req.body
    const idBusca = Number(request.params.idBusca)

    if(!idBusca){
        response.status(400).send(JSON.stringify({Mensagem: "Favor enviar um ID válido"}))
    }

    const posicaoId = viagens.findIndex(viagem => viagem.idViagem === idBusca)

    if(posicaoId === -1){
        response.status(400).send(JSON.stringify({Mensagem: "ID de viagem não encontrado"}))
    }

    if(posicaoId !== -1){
        const viagem = viagens[posicaoId]
        viagem.nomeViagem = data.nomeViagem
        viagem.precoViagem = data.precoViagem
        viagem.qtdPromocao = data.qtdPromocao

        response.status(200).send(JSON.stringify({Mensagem: `Viagem ${viagem.nomeViagem} atualizada com sucesso!`,
        data: viagem}))
    }
})

//-------- DELETE -------
app.delete('/viagens/:idBusca', (request, response)=>{

    const idBusca = Number(request.params.idBusca)

    if(!idBusca){
        response.status(400).send(JSON.stringify({Mensagem: "Passe um ID válido"}))
    }

    const posicaoId = viagens.findIndex(viagem => viagem.idViagem === idBusca)

    if(posicaoId === -1){
        response.status(400).send(JSON.stringify({Mensagem: "ID de viagem não encontrado"}))
    }else{
        viagens.splice(posicaoId, 1)
        response.status(200).send(JSON.stringify({Mensagem: "Viagem deletada com sucesso"}))
    }

})

//---------SIGN-UP ------
app.post('/signup',validarUsuario, async(request,response)=>{

    const data = request.body
    const verificarEmail = admins.find((admin)=> admin.email === data.email)

    if(verificarEmail){
        response.status(400).send(JSON.stringify({Mensagem: "Email já cadastrado no sistema"}))
    }
//async para avisar que vai ser assíncrono e await para mostrar o que pode demorar
    const senhaCriptografada = await bcrypt.hash(data.senha,10)

    let novaAdmin = {id:proximaAdmin, email:data.email, senha:senhaCriptografada}

    admins.push(novaAdmin)
    proximaAdmin++

    response.status(201).send(JSON.stringify({Mensagem: `Pessoa administradora de email ${novaAdmin.email} cadastrada com sucesso.`}))

})

//-------LOG-IN ---------
app.post('/login',validarUsuario, async(request, response)=>{

    const data = request.body    
    const admin = admins.find(admin => admin.email === data.email)

    const senhaMatch = await bcrypt.compare(data.senha, admin.senha)
    if(!senhaMatch){
        response.status(400).send(JSON.stringify({Mensagem: "Credencial inválida. Confira sua senha."}))
    }

    response.status(200).send(JSON.stringify({Mensagem: `Pessoa administradora de email ${data.email} logada com sucesso.`}))
})

//---------------VERIFICAR PORTA---------------------
app.listen(3333, () => console.log("Servidor rodando na porta 3333"))