import mongoose from "mongoose";
const UserSchema =  new mongoose.Schema({
    email: {
        type: String,
        maxlength: [30, "Email ultrapassa o limite estabelecido de caracteres"],
        minlength: [5, "Email não alcança o limite minimo estabelecido de caracteres"],
        required: true,
        unique: true
    },
    senha: {
        type: String,
        required: true
    },
    
}, {versionKey: false})

const userModel = mongoose.model("usuarios", UserSchema)
export default userModel;