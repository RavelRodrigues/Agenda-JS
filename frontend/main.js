import 'core-js/actual/index.js';
import 'regenerator-runtime/runtime.js';

import Login from './modules/Login.js';

const cadastro = new Login('.form-register');
const login = new Login('.form-login');
login.init();
cadastro.init();