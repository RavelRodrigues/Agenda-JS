import mongoose from 'mongoose';
import validator from 'validator';
import bcrypt from 'bcryptjs';

export const LoginSchema = new mongoose.Schema({
    email: {type: String, required:true},
    password: {type: String, required: true}
});

const LoginModel = mongoose.model('Login', LoginSchema);

export class Login {
    constructor(body) {
        this.body = body;
        this.errors = [];
        this.user = null;
    }

    async login(){
        this.cleanUp();
        this.valida();
        if(this.errors.length > 0) return;
        this.user = await LoginModel.findOne({email: this.body.email});

        if(!this.user){
            this.errors.push('Usuário não existe.');
            return;
        }

        if(!bcrypt.compareSync(this.body.password, this.user.password)){
            this.errors.push('Senha inválida.');
            this.user = null;
            return;
        }

        
    }

    async register(){
        this.valida();
        if(this.errors.length > 0) return;

        //Verificar existencia do usuario no BD
        await this.userExists();
        
        if(this.errors.length > 0) return;

        //Criar Hash da senha
        const salt = bcrypt.genSaltSync();
        this.body.password = bcrypt.hashSync(this.body.password, salt);

        //Regustrar o usuario
        this.user = await LoginModel.create(this.body);
       
    }

    async userExists(){
       this.user = await LoginModel.findOne({email: this.body.email});
       if(this.user) this.errors.push('Usuario já existe.');

    }

    valida(){
        this.cleanUp();
    
        if(!validator.isEmail(this.body.email)) this.errors.push('Email inválido');

        if(this.body.password.length <8){
            this.errors.push('A senha precisar ter 8 caracteres')
        }


    }

    cleanUp(){
        for(const key in this.body){
            if (typeof this.body[key] !== 'string'){
                this.body[key] = '';
            }
        }

        this.body = {
            email: this.body.email,
            password: this.body.password
        }

        
    }
}

