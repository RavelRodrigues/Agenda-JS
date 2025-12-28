import mongoose from 'mongoose';

export const LoginSchema = new mongoose.Schema({
    titulo: {type: String, required:true},
    descricao: String
});

const LoginModel = mongoose.model('Login', LoginSchema);

export class Login {
    constructor(body) {
        this.body = body;
        this.errors = [];
        this.user = null;
    }

    register(){
        this.valida();
    }

    valida(){
        this.cleanUp();

    }

    cleanUp(){
        for(const key in this.body){
            if (typeof this.body[key] !== 'string'){
                this.body[key] = '';
            }
        }

        
    }
}

