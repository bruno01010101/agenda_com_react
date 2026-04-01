import express from 'express';
import ContatosController from '../controller/ContatosController.js';
const rotas = express.Router()

rotas.get('/contatos', ContatosController.listarContatos)
rotas.get('/contatos/:id', ContatosController.listarContatoId)
rotas.post('/contatos', ContatosController.criarContatos)
rotas.patch('/contatos/:id', ContatosController.editarContatos)
rotas.delete('/contatos/:id', ContatosController.excluirContatos)

export default rotas