import userModel from "../models/User.js";
import bcryptjs from "bcryptjs"
import jsonwebtoken from "jsonwebtoken"

async function cadastro(req, res, next) {
    try{
        if (req.body.senha.length < 5) {
            throw new Error("A senha precisa ter pelo menos 5 caracteres")
        }
        const senhaHash = await bcryptjs.hash(req.body.senha, 10);
        const userCompleto = {...req.body, senha: senhaHash}
        await userModel.create(userCompleto)
        res.json({
            message: "Usuário criado com sucesso"
        })
    }catch(err){
        next(err)
    }
}

async function logar(req, res, next) {
    const {email, senha} = req.body
    try{
        if (senha.length < 5) {
            throw new Error("A senha precisa ter pelo menos 5 caracteres")
        }

        const usuario = await userModel.findOne({email})

        if(!email) throw new Error("Dados incorretos")
        const correctPassword = await bcryptjs.compare(senha, usuario.senha)
        if(!correctPassword){
            throw new Error("Dados incorretos")
        }

        const token = jsonwebtoken.sign({
            id: usuario._id
        }, process.env.SECRET)

        res.json({
            message: "Usuário logado com sucesso",
            token: token,
        })
    }catch(err){
        next(err)
    }
}

export {cadastro, logar};