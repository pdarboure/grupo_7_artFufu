let express = require("express");

let app = express()

const path = require("path");

const mainController = {
    home: (req, res) => {
        res.render('home',{
            css: './css/homestyles.css',
            title: 'Artistica Fufu'
        });
    },
    login: (req, res) => {
        res.render('login',{
            css: './css/login.css',
            title: 'Login'
        });
    },
    register: (req, res) => {
        res.render('register',{
           css: './css/register.css',
           title: 'Registro' 
        });
    },
    detalleproducto: (req, res) => {
        res.render('detalleproducto',{
            css: './css/detalleproducto.css',
            title: 'Detalle Producto'
        });
    },
    fibrofacil: (req, res) => {
        res.render('fibrofacil',{
            css: './css/fibrofacil.css',
            title: 'Fibrofacil'
        });
    },
    carritoDeCompras: (req, res) => {
        res.render('carritoDeCompras',{
            css: './css/carrito-styles.css'
        });
    },
    admin: (req, res) => {
        res.render('admin',{
            css: './css/admin.css',
            title: 'administrador'
        });
    },
    crearProducto: (req, res) => {
        res.render('crearProducto',{
            css:'./css/admin.css',
            title: 'Crear Producto'
        });
    },
    editarProducto: (req, res) => {
        res.render('editarProducto',{
            css: './css/admin.css',
            title: 'Editar Producto'
        });
    },
};

module.exports = mainController;