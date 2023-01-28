let express = require("express");

let app = express()

const path = require("path");

const mainController = {
    home: (req, res) => {
        res.render(path.resolve('./views/home.ejs'));
    },
    login: (req, res) => {
        res.render(path.resolve('./views/login.ejs'));
    },
    register: (req, res) => {
        res.render(path.resolve('./views/register.ejs'));
    },
    detalleproducto: (req, res) => {
        res.render(path.resolve('./views/detalleproducto.ejs'));
    },
    fibrofacil: (req, res) => {
        res.render(path.resolve('./views/fibrofacil.ejs'));
    },
    carritoDeCompras: (req, res) => {
        res.render(path.resolve('./views/carritoDeCompras.ejs'));
        res.render('home');
    },
    login: (req, res) => {
        res.render('login');
    },
    register: (req, res) => {
        res.render('register');
    },
    detalleproducto: (req, res) => {
        res.render('detalleproducto');
    },
    fibrofacil: (req, res) => {
        res.render('fibrofacil');
    },
    carritoDeCompras: (req, res) => {
        res.render('carritoDeCompras');
    }
};

module.exports = mainController;