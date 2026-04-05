import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, "Email inválido"],
        trim: true
    },
    senha: {
        type: String,
        required: true,
        maxlength: [100, "senha muito longa"],
        minlength: [25, "senha muito curta. Adiicione caracteres"]
    }
}, {versionKey: false})

const userModel = mongoose.model("usuario", userSchema);

export default userModel