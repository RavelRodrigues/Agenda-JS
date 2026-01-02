import {Contato} from "../models/ContatoModel.js"

export const index = (req, res) =>{
    res.render('contato', {
        contato: ''
    });
}
export const register = async (req, res) =>{
     try{
    const contato = new Contato(req.body);
    await contato.register();

    if(contato.errors.length > 0){
        req.flash('errors', contato.errors);
        req.session.save(() => res.redirect('index'));
        return;

    }

        req.flash('success', 'Contato registrado com sucesso.');
        req.session.save(() => res.redirect(`/contato/index/${contato.contato._id}`));
        return;

    }catch(e){
        console.log(e);
        return res.render('404');
            
        }
}

export const editIndex = async function(req,res) {
    if(!req.params.id) return res.render('404');
    
    const contato = await Contato.buscaPorId(req.params.id);
    if(!contato) return res.render('404');
    res.render('contato',{contato})

}

export const edit = async function(req, res){
    try{
    if(!req.params.id) return res.render('404');
    const contato = new Contato(req.body);
    await contato.edit(req.params.id);

    if(contato.errors.length > 0){
    req.flash('errors', contato.errors);
    req.session.save(() => res.redirect(`/contato/index/${req.params.id}`));
    return;

    }

    req.flash('success', 'Contato editado com sucesso.');
    req.session.save(() => res.redirect(`/contato/index/${contato.contato._id}`));
    return;


    } catch(e){
        console.log(e);
        res.render('404');
    }


}

export const deleteContato = async function(req, res) {

    if(!req.params.id) return res.render('404');
    
    const contato = await Contato.deleteContato(req.params.id);
    if(!contato) return res.render('404');

    req.flash('success', 'Contato apagado com sucesso.');
    req.session.save(() => res.redirect('/'));
    return;
}