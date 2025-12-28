export const middlewareGlobal = (req, res, next) =>{
    res.locals.umaVariavelLocal = 'Este é o valor da variavel local';
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