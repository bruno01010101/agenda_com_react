import mongoose from "mongoose";
const contatoSchema = new mongoose.Schema({
    nome: {String, required: true},
    email: {String},
    telefone: { String }
})

const contatoModel = mongoose.model('contatos', contatoSchema)
export default contatoModel