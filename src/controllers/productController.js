const fs = require('fs');
const path = require('path');
const productsPath = path.join(__dirname, '../data/products.json');

//Date.now()
const productController = {
    productList: () => {
        return JSON.parse(fs.readFileSync(productsPath, 'utf-8'));
    },
    index: (req, res) => {
        res.render('products/index', {
            title: 'Listado de productos',
            productsList: productController.productlist()
        });
    },
    show: (req, res) => {
        let productId = req.params.id;
        let product = productController.productList().find(product => product.id == productId);
        
        res.render('products/show', {
            title: 'Mi producto',
            product: producto
        });
    },
    create: (req, res) => {
        res.render('products/create', {
            title: 'Nuevo producto'
        });
    },
    store: (req, res) => {
        let products = productController.productList();
        let newproduct = {
            "id": Date.now(),
            "name": req.body.name || "Sin nombre",
            "km": req.body.km || 0,
            "year": req.body.year || 0,
            "price": req.body.price || 0,
            "available": false
        }
        
        products.push(newproduct);
        
        fs.writeFileSync(productsPath, JSON.stringify(products, null, ' '));
        
        res.redirect('/products');
    },
    edit: (req, res) => {
        let productId = req.params.id;
        let product = productController.productList().find(product => product.id == productId);
        
        res.render('products/edit', {
            title: 'Mi product',
            car: product
        });
    },
    update: (req, res) => {
        let productId = req.params.id;
        let products = productController.productList();

        products.forEach((product, index) => {
            if (auto.id == autoId) {        
                // auto.name = Talon
                product.name = req.body.name; // product.name = Talon de aquiles
                product.year = req.body.year;

                products[index] = product;
            }
        });
        
        fs.writeFileSync(productsPath, JSON.stringify(products, null, ' '));
        
        res.redirect('/products');
    },
    delete: (req, res) => {
        let productId = req.params.id;
        let product = productController.productList().find(product => product.id == productId);
        
        res.render('products/delete', {
            title: 'Eliminar producto',
            products: product
        });
    },
    destroy: (req, res) => {
        let productId = req.params.id;
        let products = productController.productList();// array
        
        let newProducts = products.filter(product => product.id != productId); // nuevo

        // Modifica el archivo
        fs.writeFileSync(productsPath, JSON.stringify(newproducts, null, ' '));
        
        res.redirect('/products');
    }
};

module.exports = productController;