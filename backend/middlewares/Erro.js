import mongoose from "mongoose"

export default function midErro(err, req, res, next){
    if(err instanceof mongoose.Error.CastError){
        return res.status(400).json({
            message: "Id inválido",
            erro: err
        })
    }

    if(err instanceof mongoose.Error.ValidationError){
        return res.status(400).json({
            message: err.message,
            erro: err
        })
    }

    return res.status(500).json({
        message: err.message,
        erro: err
    })
}