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
    loginProcess:(req,res) =>{
        let userFound = User.findByField('emailRegistro',req.body.emailRegistro)
    let validPassword = bcrypt.compareSync(req.body.passwordRegistro, userFound.passwordRegistro);
        
        // if (userFound.admin == admin) {
        //     req.session.admin = userFound
        // } FUTURO ADMIN 
    
    if (userFound && validPassword) {
            delete userFound.passwordRegistro

            req.session.userLogged = userFound
            if (userFound.rememberme) {
                res.cookie('userCookie', userFound, { maxAge: 1000*60*5})
            }
            res.redirect('/profile')
        }
    },
    register: (req, res) => {
        res.render('./user/register',{
           css: './css/register.css',
           title: 'Registro' 
        });
    },
    registerProcess: (req,res) => {
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
        res.redirect('/login')
    },
    admin: (req, res) => {
        res.render('admin',{
            css: './css/admin.css',
            title: 'administrador'
        });
    },
    profile: (req, res) => {
        res.render('user/profile', {
            title: 'Profile',
            css: './css/login.css',
            user: req.session.userLogged
        });
    },
    logout : (req, res) => {
        req.session.destroy()
        res.clearCookie('userCookie')
        res.redirect('/')

    },
}

module.exports = userController