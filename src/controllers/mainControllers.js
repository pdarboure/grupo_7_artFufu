const fs = require('fs');
const path = require('path');
const productsPath = path.join(__dirname, '../data/products.json');

const mainController = {
    getProducts: () => {
        return JSON.parse(fs.readFileSync(productsPath, 'utf-8'));
    },
    // home: (req, res) => {
    //     res.render('home',{
    //         css: './css/homestyles.css',
    //         title: 'Artistica Fufu'
    //     });
    // },

    home: (req, res) => {
        res.render('home', {
            css: '../css/homestyles.css',
            title: 'Listado de productos',
            productsList: mainController.getProducts()
        });
    },

    

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
    detalleproducto: (req, res) => {
        res.render('./products/detalleproducto',{
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
        res.render('./products/carritoDeCompras',{
            css: './css/carrito-styles.css',
            title: 'Carrito de Compras'
        });
    },
    admin: (req, res) => {
        res.render('admin',{
            css: './css/admin.css',
            title: 'administrador'
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