const fs = require('fs');
const path = require('path');
const productsPath = path.join(__dirname, '../data/products.json');
const {validationResult} = require ('express-validator')

const mainController = {
    getProducts: () => {
        return JSON.parse(fs.readFileSync(productsPath, 'utf-8'));
    },

    home: (req, res) => {
        res.render('home', {
            css: '../css/homestyles.css',
            title: 'Listado de productos',
            productsList: mainController.getProducts()
        });
    },

  
    fibrofacil: (req, res) => {
        res.render('fibrofacil',{
            css: './css/fibrofacil.css',
            title: 'Fibrofacil'
        });
    },
    carritoDeCompras: (req, res) => {
        res.render('./products/carritoDeCompras',{
            css: './css/carrito-styles.css',
            title: 'Carrito de Compras'
        });
    },
    create: (req, res) => {
        res.render('./products/create',{
            css:'./css/admin.css',
            title: 'Crear Producto'
        });
    },
    editarProducto: (req, res) => {
        res.render('./products/editarProducto',{
            css: './css/admin.css',
            title: 'Editar Producto'
        });
    },
    // error: (req, res) => {
    //     res.render('error', {
    //         css: '',
    //         title: 'Error'
    //     })
    // }
};

module.exports = mainController;