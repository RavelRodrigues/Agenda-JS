import express from 'express';
const route = express.Router();
import {index} from './src/controllers/homeController.js';
import * as loginController from './src/controllers/loginController.js';
import * as contatoController from './src/controllers/contatoController.js';
import { loginRequired } from './src/middlewares/middlewares.js'; 

// Rotas da home
route.get('/', index);

// Rotas de login
route.get('/login/index', loginController.index);
route.post('/login/register', loginController.register);
route.post('/login/login', loginController.login);
route.get('/login/logout', loginController.logout);

// Rotas de contato
route.get('/contato/index', loginRequired, contatoController.index);
route.post('/contato/register', loginRequired, contatoController.register);
route.get('/contato/index/:id', loginRequired, contatoController.editIndex);
route.post('/contato/edit/:id', loginRequired, contatoController.edit);
route.get('/contato/delete/:id', loginRequired, contatoController.deleteContato);


export default route;