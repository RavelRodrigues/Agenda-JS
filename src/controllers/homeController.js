import {Contato} from "../models/ContatoModel.js"

export const index = async(req, res) => {

    try{
    const contatos = await Contato.buscaContatos();
    res.render('index', { contatos: contatos || [] });

    }catch(e){
        console.log(e);
        res.render('404');
    }
};


