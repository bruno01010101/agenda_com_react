import mongoose from "mongoose";
const contatoSchema = new mongoose.Schema({
    //validação básica
    nome: {
        type: String, //o certo é type tudo em minúsculo
        required: [true, "Nome é obrigatório filho da puta"],
        maxlength: [50, "Um nome não pode ter mais de 50 caracteres"] ,
        minlength: [2, "Um nome deve ter mais de 2 caracteres"],
        trim: true      //na hora de salvar tira os espaços do começo e do fim
    },  
    email: {
        type: String,
        maxlength: [30, "O email não pode ter mais de 30 caracteres"] ,
        minlength: [5, "Um email deve ter mais de 5 carcteres"],
        match: [/.+@.+\..+/, "Email inválido"], // match valida se um campo possui o que a expressão regular dento dele está exigindo
        trim: true
    }, 
    numero: {
        type: Number,
        maxlength: [30, "O Número de telefone não pode ter mais de 20 caracteres"] ,
        minlength: [5, "Um numero de telefone teve ter mais de 4 carcteres"],
        match: [/^\d+$/, "Apenas números são permitidos"],
        trim: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "usuario",
        required: true
    }
}, {versionKey: false})

const contatoModelo = mongoose.model('contatos', contatoSchema);

export default contatoModelo