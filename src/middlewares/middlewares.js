export const middlewareGlobal = (req, res, next) =>{
    res.locals.errors = req.flash('errors');
    res.locals.success = req.flash('success');
    res.locals.user = req.session.user;
    next();
};

export const outroMiddleware = (req, res, next) =>{
    next();
};

export const checkCsrfError = (err, req, res, next) => {
    if(err){
        return res.render('404');
    }

    next();

}

export const csrfMiddleware = (req, res,next) =>{
    res.locals.csrfToken = req.csrfToken();
    next();
}

export const loginRequired = (req, res, next) =>{
    if(!req.session.user) {
        req.flash('errors', 'Você precisa fazer o login para acessar os contatos');
        req.session.save(() => res.redirect('/login/index'));
        return;
    }
    next();
}