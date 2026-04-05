import contatoModelo from "../models/contatoModel.js";
export default class ContatosController{
    static async listarContatos(req, res, next){
        try{
            const userId = req.userId
            const contatos = await contatoModelo.find({user: userId})
            res.status(200).json({contatos})
        }catch(err){
            next(err)
        }
    }

    static async listarContatoId(req, res, next){
        const id = req.params.id
        try{
            const contatos = await contatoModelo.findOne({_id: id, user: req.userId})
            if(!contatos){
                return res.status(404).json({message: "Contato não encontrado"})
            }
            res.status(200).json({contatos})
        }catch(err){
            next(err)
        }
    }

    static async criarContatos(req, res, next){
        try{
            const contatos = await contatoModelo.create({...req.body, user: req.userId})
            res.status(200).json({message: 'Contato criado com sucesso'})
        }catch(err){
            next(err)
        }
    }

    static async excluirContatos(req, res, next){
        const id = req.params.id
        try{
            const contatos = await contatoModelo.findOneAndDelete({_id: id, user: req.userId})
            if(!contatos){
                return res.status(404).json({message: "Contato não encontrado"})
            }
            res.status(200).json({message: 'Contato excluido com sucesso'})
        }catch(err){
            next(err)
        }
    }
    
    static async editarContatos(req, res, next){
        const id = req.params.id
        // isso vai evitar do usuario mandar req.body.user = outroId falso.
        const { nome, telefone } = req.body 
        try{
            const contatos = await contatoModelo.findOneAndUpdate({_id: id, user: req.userId}, {nome, telefone});
            if(!contatos){
                return res.status(404).json({message: "Contato não encontrado"})
            }
            res.status(200).json({message: 'Contato editado com sucesso'})
        }catch(err){
            next(err)
        }
    }
}