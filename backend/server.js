import express from "express";
import routes from "./rotas/routes.js";
import mongoose from "mongoose";
import "dotenv/config";
import midErro from "./middlewares/Erro.js";
import cors from "cors"

const app = express();
const string = process.env.CONNECTIONSTRING
const port = process.env.PORT || 3000

app.use(cors({
    origin: "https://agenda-com-react.onrender.com",
    credentials: true
}));

app.use(express.json()) // converte json vindo da req em objeto javascript
app.use(routes);
app.use(midErro)

mongoose.connect(string).then(() =>  {
    app.listen(port, () => {
        console.log('servidor ao vivo na url http://localhost:3000')
    })
}).catch((err) => console.log(`Erro ao conectar com o servidor: ${err}`) )
