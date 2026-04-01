import express from 'express';
import rotas from './src/routes/rotas.js';
import 'dotenv/config';
import mongoose from 'mongoose';
import erroMiddleware from './src/middleware/erros.js';

const app = express();

app.use(express.json()) // transforma JSON que vem na requisição em objeto javascript, retorna um middleware
app.use(rotas);
app.use(erroMiddleware)

mongoose.connect(process.env.CONNECTIONSTRING)
    .then(() => {
        console.log('Conexão com o servidor feita.')
    })
    .catch((err) => {
        console.log(`Deu um erro aqui menó: ${err}`)
    })

app.listen(3000, () => {
    console.log('Servidor ativo na url http://localhost:3000')
})
