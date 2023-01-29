let express = require("express");

let app = express()

const path = require("path");

const mainController = {
    home: (req, res) => {
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
    },
    admin: (req, res) => {
        res.render('admin');
    },
    crearProducto: (req, res) => {
        res.render('crearProducto');
    },
    editarProducto: (req, res) => {
        res.render('editarProducto');
    },
};

module.exports = mainController;