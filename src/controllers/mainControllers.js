const fs = require('fs');
const path = require('path');
const productsPath = path.join(__dirname, '../data/products.json');
const {validationResult} = require ('express-validator')
const db = require('../database/models')

const mainController = {
    getProducts: () => {
        return JSON.parse(fs.readFileSync(productsPath, 'utf-8'));
    },

    home: async (req, res) => {
        try {
          let productsList = await db.Product.findAll();
          let user = req.session.userLogged || null; // Check if user is logged in
          res.render('home', {
            css: '../css/homestyles.css',
            title: 'Listado de productos',
            productsList,
            user, // Pass user to template
          });
        
       } catch (error) {
        console.log(error);
        res.json(error)
       }
       
    },

  
    fibrofacil: (req, res) => {
        res.render('fibrofacil',{
            css: './css/fibrofacil.css',
            title: 'Fibrofacil',
            user: req.session.userLogged || null
        });
    },
    carritoDeCompras: (req, res) => {
        res.render('./products/carritoDeCompras',{
            css: './css/carrito-styles.css',
            title: 'Carrito de Compras',
            user: req.session.userLogged || null
        });
    },
    create: (req, res) => {
        res.render('./products/create',{
            css:'./css/admin.css',
            title: 'Crear Producto',
            user: req.session.userLogged || null
        });
    },
    editarProducto: (req, res) => {
        res.render('./products/editarProducto',{
            css: './css/admin.css',
            title: 'Editar Producto',
            user: req.session.userLogged || null
        });
    },


    prueba: async (req, res) => {
        try {   
        const product = await db.Product.findAll({
            include:'colors'
        })
        const categorie = await db.ProductCategories.findAll()
        const color = await db.ProductColor.findAll()
        const user = await db.User.findAll({
            include:'category'
        })
        const userCategory = await db.UserCategory.findAll()
        const ProductSubCategory= await db.ProductSubCategory.findAll()

        res.json({
            user,
            userCategory,
            ProductSubCategory,
            product,
            categorie,
            color
        })
        } catch (error) {
          console.log(error);
            res.json({
            error
          })  
        }
    }
};

module.exports = mainController;