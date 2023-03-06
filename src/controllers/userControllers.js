const fs = require('fs');
const path = require('path');
const {validationResult} = require ('express-validator');
const User = require('../services/user');
const bcrypt = require('bcrypt')

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
        console.log(req.file);
        let error = validationResult (req)
        let body = {
            ...req.body,
            passwordRegistro: bcrypt.hashSync(req.body.passwordRegistro, 10),
            image: req.file? req.file.filename:'No carga la imagen'
        }
        delete body.checkPassword

        if (!error.isEmpty()) {
            return res.render('./user/register',{
                css: './css/register.css',
                title: 'Registro' ,
                error: error.mapped(),
                oldBody: req.body
            });
        }
        User.createUser(body)
        res.redirect('/')
    },
    admin: (req, res) => {
        res.render('admin',{
            css: './css/admin.css',
            title: 'administrador'
        });
    },
}

module.exports = userController