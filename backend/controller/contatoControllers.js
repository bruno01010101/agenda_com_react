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
        validacoes(req.body)
        // falta criar esses objetos
        await contatoModel.create(req.body)
        res.status(200).json({
            message: "Contato criado com sucesso"
        })
    }catch(err){
        next(err)
    }
}

async function editarContatos(req, res, next){
    const id = req.params.id;
    try{
        validacoes(req.body)
        const contato =  await contatoModel.findByIdAndUpdate(id, req.body);
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
    const id = req.params.id;

    try{
        await contatoModel.findByIdAndDelete(id)
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