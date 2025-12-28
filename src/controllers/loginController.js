import { Login } from "../models/LoginModel.js"

export const index=(req, res) =>{
    res.render('login')
}

export const register = (req,res) =>{
    const login = new Login(req.body);
    res.send(req.body)
}