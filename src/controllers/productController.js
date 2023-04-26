const fs = require('fs');
const path = require('path');
const productsPath = path.join(__dirname, '../data/products.json');
const {validationResult} = require('express-validator');
const db = require('../database/models');
const Product = require('../database/models/Product');

const productController = {
    getProducts: () => {
        return JSON.parse(fs.readFileSync(productsPath, 'utf-8'));
    },
    index: async(req, res) => {
        try {
            
            const product = await db.Product.findAll({
                include:[{association: 'colors'},
                {association: 'ProductCategories'},
                {association: 'ProductSubCategory'}]
            });
            
            res.render('products/index', {
                css: '../css/homestyles.css',
                title: 'Listado de productos',
                productsList: product
            });
        } catch (error) {
            res.send(error)
        }
    },
    show: async (req, res) => {
       try {

        const product = await db.Product.findByPk(req.params.id,{
            include:[{association: 'colors'},
                {association: 'ProductCategories'},
                {association: 'ProductSubCategory'}]
        } )
           

            res.render('products/show', {
                css: '/css/detalleproducto.css',
                title: 'Detalle Producto',
                producto: product
            });
            
        } catch (error) {
            res.send(error)
        }
    },
    create: async(req, res) => {
        try {
            const categorie = await db.ProductCategories.findAll()  
            
            res.render('products/create', {
                title: 'Nuevo producto',
                css: '/css/admin.css',
                categorie
            });
        } catch (error) {
            res.send(error)
        }
    },
    store:async (req, res) => {
        
        let error = validationResult(req);
        if(!error.isEmpty()){
            const categorie = await db.ProductCategories.findAll()
            return res.render('products/create', {
                oldBody: req.body,
                error: error.mapped(),
                title: 'Nuevo producto',
                css: '/css/admin.css',
                categorie
            })
        };
        try {
             await db.Product.create({
             name: req.body.name,
             price: req.body.price,
             description: req.body.description,
             image: req.file.filename,
             product_categories_id: req.body.product_categories_id
            })
                res.redirect('/')

        } catch (error) {
        res.json({error})    
        }
    },
    edit: async (req, res) => {

        try {
            const product = await db.Product.findByPk(req.params.id)
            const categorie = await db.ProductCategories.findAll()
            res.render('products/editarProducto', {
                title: 'Mi producto',
                css:'/css/admin.css',
                product: product,
                categorie
            });
            

        } catch (error) {
            res.json(error)    
        }
    },

    update: async (req, res) => {
        
        try {
            const producto = await db.Product.findByPk(req.params.id) 
            
            const product = await db.Product.update(
                {
                    name: req.body.name,
                    price: parseInt(req.body.price),
                    description: req.body.description,
                    image: req.file ? req.file.filename : producto.image,
                    product_categories_id: req.body.product_categories_id ? req.body.product_categories_id : producto.product_categories_id
                },
                {
                    where:{
                        id: req.params.id
                    }
                }
            )
            res.redirect('/products/' + producto.id)
        } catch (error) {
            console.log(error);
            res.json(error)
        }
    },
    delete: async (req, res) => {
        try {
            const product = await db.Product.findByPk(req.params.id)
            res.render('products/delete', {
                title: 'Eliminar producto',
                css:'/css/admin.css',
                producto: product
            });
            
        } catch (error) {
            console.log(error);
            res.json(error) 
        }
        
    },
    destroy: async(req, res) => {
        
        try {
        await db.Product.destroy({
            where:{
                id: req.params.id
            }
        })
        res.redirect('/')
        } catch (error) {
            console.log(error);
            res.json(error) 
        }
    }
};

module.exports = productController;


// holaa