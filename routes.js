import express from 'express';
const route = express.Router();
import {index} from './src/controllers/homeController.js';
import * as loginController from './src/controllers/loginController.js';

// Rotas da home
route.get('/', index);

// Rotas de login
route.get('/login/index', loginController.index)
route.post('/login/register', loginController.register)


export default route;