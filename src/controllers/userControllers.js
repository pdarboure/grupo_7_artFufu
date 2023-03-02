const fs = require('fs');
const path = require('path');
const {validationResult} = require ('express-validator');

const userController = { 
    login: (req, res) => {
        res.render('./user/login',{
            css: './css/login.css',
            title: 'Login'
        });
    },
    register: (req, res) => {
        res.render('./user/register',{
           css: './css/register.css',
           title: 'Registro' 
        });
    },
    registerProcess: (req,res) => {
    let error = validationResult (req)
    if (!error.isEmpty()) {
        return res.render('./user/register',{
            css: './css/register.css',
            title: 'Registro' ,
            error: error.mapped(),
            oldBody: req.body
         });
    }
    },
    admin: (req, res) => {
        res.render('admin',{
            css: './css/admin.css',
            title: 'administrador'
        });
    },
}

module.exports = userController