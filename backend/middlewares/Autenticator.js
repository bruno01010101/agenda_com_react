import jsonwebtoken from "jsonwebtoken";
export default function auntenticacao(req, res, next){
    if (!req.headers.authorization) {
        throw new Error("Token não fornecido")
    }

    const auth = req.headers.authorization.split(' ')

    if(auth.length !== 2){
        throw new Error("Token inválido")
    }

    const [scheme, token] = auth
    if (scheme.toLowerCase()  !== "bearer") throw new Error("O token deve ser bearer")

    //não precisa de if !payload pois em caso de false o .verify já lança um erro.
    const payload = jsonwebtoken.verify(token, process.env.SECRET);
    // usando verify também é extraido o id, que é possível ser capturado
    const id = payload.id
    req.userID = id

    next();
}