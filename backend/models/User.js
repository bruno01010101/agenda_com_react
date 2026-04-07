import mongoose from "mongoose";
const UserSchema =  new mongoose.Schema({
    email: {
        type: String,
        maxlength: [30, "Email ultrapassa o limite estabelecido de caracteres"],
        minlength: [5, "Email não alcança o limite minimo estabelecido de caracteres"]
    },
    senha: {
        type: String,
        maxlength: [90, "Senha ultrapassa op limite estabelecido de caracteres"],
        minlength: [30, "Senha ultrapassa op limite estabelecido de caracteres"]
    },
    
})

const userModel = ("usuarios", UserSchema)
export default userModel;