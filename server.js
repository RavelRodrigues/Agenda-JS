import express from 'express';
const app = express();
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import 'dotenv/config';


import mongoose from 'mongoose';
mongoose.connect(process.env.CONNECTIONSTRING)
.then(() => {
    console.log('Conectei a base de dados')
    app.emit('pronto');
})
.catch(e => console.log(e));


import session from 'express-session'; 
import MongoStore from 'connect-mongo';
import flash from 'connect-flash';
import routes from './routes.js'; 
import path from  'path';
import helmet from 'helmet';
import csurf from 'csurf';
import {middlewareGlobal, checkCsrfError, csrfMiddleware} from './src/middlewares/middlewares.js'




app.use(helmet(/*{
    contentSecurityPolicy: {
      directives: {
        "default-src": ["'self'"],
        "script-src": ["'self'", "cdn.jsdelivr.net"],
        "style-src": ["'self'", "cdn.jsdelivr.net", "'unsafe-inline'"],
        "connect-src": ["'self'", "cdn.jsdelivr.net"],
        "img-src": ["'self'", "data:", "cdn.jsdelivr.net"],
      },
    },
  }*/));
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static('./public'));

const sessionOptions = session({
    secret:'dsaiudhasudhasuidhasiuh+3421312 qds qdsad qdqwdsa asdjasdasf a8()' ,
    store: MongoStore.create({
        client: mongoose.connection.getClient()
    }),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly:true
    }
});
app.use(sessionOptions);
app.use(flash());

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
app.set('views', path.join(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use(csurf());
//Nossos proprios middlewares
app.use(middlewareGlobal);
app.use(checkCsrfError);
app.use(csrfMiddleware);
app.use(routes);


app.on('pronto', () =>{
    app.listen(3000, () => {
        console.log('Acessar http://localhost:3000')
        console.log('Servidor executando na porta 3000')
    });
});

