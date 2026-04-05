import express from 'express';
import ContatosController from '../controller/ContatosController.js';
import { realizaCadastro, realizaLogin } from '../controller/userController.js';
import autentica from '../middleware/minDeoToken.js';

const rotas = express.Router()

rotas.get('/contatos', autentica, ContatosController.listarContatos)
rotas.get('/contatos/:id', autentica ,ContatosController.listarContatoId)
rotas.post('/contatos', autentica, ContatosController.criarContatos)
rotas.patch('/contatos/:id', autentica, ContatosController.editarContatos)
rotas.delete('/contatos/:id', autentica, ContatosController.excluirContatos)
// login e cadastro
rotas.post('/cadastro', realizaCadastro);
rotas.post('/login', realizaLogin);

export default rotas