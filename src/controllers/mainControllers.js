const fs = require('fs');
const path = require('path');
const productsPath = path.join(__dirname, '../data/products.json');
const {validationResult} = require ('express-validator')
const db = require('../database/models')

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
    prueba: async (req, res) => {
        try {   
        // const product = await db.Product.findAll({
        //     include:'colors'
        // })
        // const categorie = await db.ProductCategories.findAll()
        // const color = await db.ProductColor.findAll()
        const user = await db.User.findAll({
            include:'category'
        })
        // const userCategory = await db.UserCategory.findAll()
        // const ProductSubCategory= await db.ProductSubCategory.findAll()

        res.json({
            user,
            // userCategory,
            // ProductSubCategory,
            // product,
            // categorie,
            // color
        })
        } catch (error) {
          res.json({
            error
          })  
        }
    }
};

module.exports = mainController;