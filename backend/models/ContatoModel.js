import mongoose from "mongoose";
const contatoSchema = new mongoose.Schema({
    nome: {type: String, required: true},
    email: {type: String},
    telefone: { type: String },
    user: { 
        type: mongoose.Schema.Types.ObjectId,
        ref : "Usuario"
    }
})

const contatoModel = mongoose.model('contatos', contatoSchema)
export default contatoModel