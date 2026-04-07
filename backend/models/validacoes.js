import validator from "validator"

// usar nos controlers antes de fazer requisições para o mongoose.
export default function validacoes(dados){
    const {email, telefone, nome} = dados
    if(!nome || nome.length < 3) throw new Error("Nome é obrigatório");
    if(nome.length > 100) throw new Error("Nome muito grande")
    if (email && !validator.isEmail(email)){
        throw new Error("Digíte um email válido")
    }
    if(telefone && !validator.isNumeric(telefone)){
        throw new Error("Digíte um telefone válido")
    }
}
