import contatoModelo from "../models/contatoModel.js";
export default class ContatosController{
    static async listarContatos(req, res, next){
        try{
            const contatos = await contatoModelo.find({})
            res.status(200).json({contatos})
        }catch(err){
            next(err)
        }
    }

    static async listarContatoId(req, res, next){
        const id = req.params.id
        try{
            const contatos = await contatoModelo.findById(id)
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
            const contatos = await contatoModelo.create(req.body)
            res.status(200).json({message: 'Contato criado com sucesso'})
        }catch(err){
            next(err)
        }
    }

    static async excluirContatos(req, res, next){
        const id = req.params.id
        try{
            const contatos = await contatoModelo.findByIdAndDelete(id)
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
        try{
            // por padrão o moongose não roda os validadores no findbyidandupdate, por isso tem que configurar.
            const contatos = await contatoModelo.findByIdAndUpdate(id, req.body, { runValidators: true, context: 'query' });
            if(!contatos){
                return res.status(404).json({message: "Contato não encontrado"})
            }
            res.status(200).json({message: 'Contato editado com sucesso'})
        }catch(err){
            next(err)
        }
    }
}