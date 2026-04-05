import bcrypt from "bcrypt";
import jsonwebtoken from "jsonwebtoken"
import userModel from "../models/userModel.js";

const realizaCadastro = async (req, res, next) => {
    try{
        const senha = String(req.body.senha)
        const senhaHash = await bcrypt.hash(senha, 10)// esse 10 é o sal
        const usuario = {...req.body, senha: senhaHash}
        const usuarioCriado = await userModel.create(usuario)
        res.status(200).json({
            message: "deu certo"
        })
    }catch(err){
        if (err.code === 11000) {
            return res.status(400).json({
            message: "Email já cadastrado"
        })
}
        next(err)
    }
}

const realizaLogin = async(req, res, next) => {
    try{
        const {email, senha} = req.body
        const usuario = await userModel.findOne({ email })
        if(!usuario) return res.status(400).send('usuario não encontrado')
        if(senha === undefined || senha === null) return res.status(400).json({message: 'senha inválida'})
        const comparacao = await bcrypt.compare(String(senha), usuario.senha);
        if (!comparacao) return res.send('senha incorreta, não é legal de tar essa informação agora você sabe que o email está certo')
         
        const token = jsonwebtoken.sign(
            {id: usuario._id},
            "segredinhokkkk",
            { expiresIn: "7d" }
        )
        res.status(200).json({token: token})
    }catch(err){
        console.log(err)
        next(err)
    }
}

export { realizaCadastro, realizaLogin };