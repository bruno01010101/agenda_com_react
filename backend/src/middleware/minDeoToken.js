import jsonwebtoken from "jsonwebtoken";

export default function autentica(req, res, next){
    const authHeader = req.headers.authorization;
    if (!authHeader) return res.status(401).send('irmão faz authorization: Bearer token por favor');
    
    const parts = authHeader.split(" ");

    if(parts.length !== 2) return res.status(401).send('deveria ter so duas partes meu cria');

    const [scheme, token] = parts
    if(scheme !== "Bearer") return res.status(401).send("irmão o token deve ser bearer token");

    try{
        const decode = jsonwebtoken.verify(token, "segredinhokkkk")
        req.userId = decode.id
        return next()
    }catch(err){
        return res.status(401).json({message: "Token inválido ou expirado"})
    }
}