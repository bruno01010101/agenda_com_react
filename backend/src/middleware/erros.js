import mongoose from "mongoose"
export default function erroMiddleware(err, req, res, next){
    if(err instanceof mongoose.Error.CastError){
        return res.status(400).json({
            message: "Id inválido."
        })
    }if (err instanceof mongoose.Error.ValidationError){
        return res.status(400).json({
            message: "Uma ou mais informações fornecidas estão erradas e/ou faltando."
        })
    }

    return res.status(500).json({
        message: "Erro interno do servidor"
    })
} 