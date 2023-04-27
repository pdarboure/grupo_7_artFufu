const fs = require('fs');
const path = require('path');
const {validationResult} = require ('express-validator');
const User = require('../services/user');
const bcrypt = require('bcrypt')
const db = require('../database/models')

const userController = { 
    login: (req, res) => {
        res.render('./user/login',{
            css: './css/login.css',
            title: 'Login'
        });
    },
    loginProcess:async(req,res) =>{
        console.log(req.body.passwordRegistro, req.body.emailRegistro);
        try {
         const userFound = await db.User.findOne({
             where: {
                 email:req.body.emailRegistro
                }
            });

            if(!userFound){
                console.log('No encontre el usuario!!!!!');
                return res.render('user/login',{
                    css: './css/login.css',
                    title: 'Registro',
                    error: {
                        emailRegistro: {
                            msg: 'El email no esta registrado!'
                        }
                    },
                    oldBody: req.body
                })
            }

            let validPassword = bcrypt.compareSync(req.body.passwordRegistro, userFound.password);  
            
            if(!validPassword){
                console.log('No encontre el pasworddd!!!!!')
                return res.render('user/login',{
                    css: './css/login.css',
                    title: 'Registro',
                    error: {
                        passwordRegistro: {
                            msg: 'password invalida'
                        }
                    },
                    oldBody: req.body
                })
            }

            if (userFound.user_category_id == 2) {
                req.session.admin = userFound
                console.log(req.session.admin, 'este es admin');
                return res.redirect('/profile')
            }
            
            if (userFound && validPassword) {
                    delete userFound.password
                    req.session.userLogged = userFound
                    console.log(req.session.userLogged);
                    if (req.body.rememberme) {
                        res.cookie('userCookie', userFound, { maxAge: 1000*60*5})
                    }

                   return res.redirect('/profile')
                }
     } catch (error) {
        console.log(error);
        res.json(error)
     }
    },
    register: async(req, res) => {
        
        let category = await db.UserCategory.findAll() 
        
        res.render('./user/register',{
           css: './css/register.css',
           title: 'Registro',
           category
        });
    },
    registerProcess:async (req,res) => {
       
        let error = validationResult (req)
        
        if (!error.isEmpty()) {
            return res.render('./user/register',{
                css: './css/register.css',
                title: 'Registro' ,
                error: error.mapped(),
                oldBody: req.body
            });
        }
        try {
            let  body = {
                name: req.body.nombre,
                lastname: req.body.apellido,
                email: req.body.emailRegistro,
                user_category_id: req.body.user_category_id ? user_category_id: 1,
               password: bcrypt.hashSync(req.body.passwordRegistro, 10),
               image: req.file? req.file.filename:'usuarioDefault.png'
           }
           delete body.checkPassword

           const invalidemail = await db.User.findOne({
            where: {
                email:req.body.emailRegistro
            }
           });
           if(invalidemail){
            return res.render('user/register',{
                css: './css/register.css',
                title: 'Registro',
                error: {
                    emailRegistro: {
                        msg: 'El email ya existente'
                    }
                },
                oldBody: req.body
            })
        }
        await db.User.create(body)
        res.redirect('/')

       } catch (error) {
        res.send(error)
       }
       
       
        // User.createUser(body)
        // res.redirect('/login')
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
            css: '/css/profile.css',
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