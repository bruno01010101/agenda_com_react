import express from "express";
import { buscaContatos, buscaContatosPorId, criarContatos, editarContatos, excluirContatos } from "../controller/contatoControllers.js";
import { cadastro, logar } from "../controller/userControllers.js";
import auntenticacao from "../middlewares/Autenticator.js";
const routes = express.Router()

routes.get('/contatos', auntenticacao, buscaContatos);
routes.get('/contatos/:id', auntenticacao, buscaContatosPorId);
routes.post('/contatos', auntenticacao, criarContatos);
routes.patch('/contatos/:id', auntenticacao, editarContatos);
routes.delete('/contatos/:id', auntenticacao, excluirContatos);

routes.post("/register", cadastro)
routes.post("/login", logar)


export default routes;