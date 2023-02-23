const fs = require('fs');
const path = require('path');
const productsPath = path.join(__dirname, '../data/products.json');
const {validationResult} = require('express-validator');


const productController = {
    getProducts: () => {
        return JSON.parse(fs.readFileSync(productsPath, 'utf-8'));
    },
    index: (req, res) => {
        res.render('products/index', {
            css: '../css/homestyles.css',
            title: 'Listado de productos',
            productsList: productController.getProducts()
        });
    },
    show: (req, res) => {
        let productId = req.params.id;
        let product = productController.getProducts().find(product => product.id == productId);
        
        res.render('products/show', {
            css: '/css/detalleproducto.css',
            title: 'Detalle Producto',
            producto: product
        });
    },
    create: (req, res) => {
        res.render('products/create', {
            title: 'Nuevo producto',
            css: '/css/admin.css'
        });
    },
    store: (req, res) => {
        let products = productController.getProducts();
        let error = validationResult(req);
        let images = [];

        if(!error.isEmpty()){

            return res.render('products/create', {
                oldBody: req.body,
                error: error.mapped(),
                title: 'Nuevo producto',
                css: '/css/admin.css'
            })
        };
        if (req.files) {
            req.files.forEach(file => {
                images.push({
                    "id": Date.now(),
                    "name": file.filename,
                });
            });
        }
            
        let newproduct = {
            "id": Date.now(),
            "name": req.body.name || "Sin nombre",
            "price": req.body.price || 0,
            "image": images
            // "description": req.body.description || "Sin nombre",
            // "image": req.body.image || 0,
            // "available": false
            // category
        }
        
        products.push(newproduct);

        console.log(req.body);
        
        fs.writeFileSync(productsPath, JSON.stringify(products, null, ' '));
        
        res.redirect('/products');
    },
    edit: (req, res) => {
        let productId = req.params.id;
        let product = productController.getProducts().find(product => product.id == productId);
        
        res.render('products/editarProducto', {
            title: 'Mi producto',
            css:'/css/admin.css',
            product: product
        });
    },

    update: (req, res) => {
        let productId = req.params.id;
        let products = productController.getProducts();

        products.forEach((product, index) => {
            if (product.id == productId) {        
                
                product.name = req.body.name;
                product.year = req.body.year;

                products[index] = product;
            }
        });
        
        fs.writeFileSync(productsPath, JSON.stringify(products, null, ' '));
        
        res.redirect('/products');
    },
    delete: (req, res) => {
        let productId = req.params.id;
        let product = productController.getProducts().find(product => product.id == productId);
        
        res.render('products/delete', {
            title: 'Eliminar producto',
            css:'/css/admin.css',
            producto: product
        });
    },
    destroy: (req, res) => {
        let productId = req.params.id;
        let products = productController.getProducts();// array
        
        let newProducts = products.filter(product => product.id != productId); // nuevo

        // Modifica el archivo
        fs.writeFileSync(productsPath, JSON.stringify(newProducts, null, ' '));
        
        res.redirect('/products');
    }
};

module.exports = productController;