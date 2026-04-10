import express from "express";
import routes from "./rotas/routes.js";
import mongoose from "mongoose";
import "dotenv/config";
import midErro from "./middlewares/Erro.js";
import cors from "cors"

const app = express();
const string = process.env.CONNECTIONSTRING

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));

app.use(express.json()) // converte json vindo da req em objeto javascript
app.use(routes);
app.use(midErro)

mongoose.connect(string).then(() =>  {
    app.listen(3000, () => {
        console.log('servidor ao vivo na url http://localhost:3000')
    })
}).catch((err) => console.log(`Erro ao conectar com o servidor: ${err}`) )
