import contatoModel from "../models/ContatoModel.js";
import validacoes from "../models/validacoes.js";

async function buscaContatos(req, res, next){
    try{
        const contato = await contatoModel.find({user: req.userID})

        if(!contato){
            return res.status(404).json({
                message: "Não foi possível encontrar nenhum contato"
            })
        }

        res.status(200).json(contato)
    }catch(err){
        next(err)
    }
}

async function criarContatos(req, res, next){
    try{
        const {nome, email, telefone} = req.body
        validacoes(req.body)
        const usuario = {nome, email, telefone, user: req.userID}
        await contatoModel.create(usuario)
        res.status(200).json({
            message: "Contato criado com sucesso"
        })
    }catch(err){
        next(err)
    }
}

async function editarContatos(req, res, next){
    try{
        const id = req.params.id;
        const {nome, email, telefone} = req.body
        validacoes(req.body)
        const contato =  await contatoModel.findOneAndUpdate({_id: id, user: req.userID}, {nome, email, telefone});
        if(!contato){
            return res.status(404).json({
                message: "Não foi possível encontrar nenhum contato"
            })
        }
        res.status(200).json({
            message: "Contato editado com sucesso"
        })
    }catch(err){
        next(err)
    }
}

async function excluirContatos(req, res, next){
    try{
        const id = req.params.id;
        await contatoModel.findOneAndDelete({_id: id, user: req.userID})
        res.status(200).json({
            message: "Contato deletado com sucesso"
        })
    }catch(err){
        next(err)
    }
}

async function buscaContatosPorId(req, res, next){
    const id = req.params.id;

    try{
        const contato = await contatoModel.findById(id)

        if(!contato){
            return res.status(404).json({
                message: "Não foi possível encontrar nenhum contato"
            })
        }
        res.status(200).json(contato)
    }catch(err){
        next(err)
    }
}

export { buscaContatos,  criarContatos, editarContatos, excluirContatos, buscaContatosPorId}