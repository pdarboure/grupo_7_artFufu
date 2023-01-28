let express = require("express");

let app = express()

const path = require("path");

const mainController = {
    home: (req, res) => {
        res.sendFile(path.resolve('./views/home.html'));
    },
    login: (req, res) => {
        res.sendFile(path.resolve('./views/login.html'));
    },
    register: (req, res) => {
        res.sendFile(path.resolve('./views/register.html'));
    },
    detalleproducto: (req, res) => {
        res.sendFile(path.resolve('./views/detalleproducto.html'));
    },
    fibrofacil: (req, res) => {
        res.sendFile(path.resolve('./views/fibrofacil.html'));
    },
    carritoDeCompras: (req, res) => {
        res.sendFile(path.resolve('./views/carritoDeCompras.html'));
    }
};

module.exports = mainController;