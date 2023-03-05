const fs = require('fs');
const path = require('path');
const productsPath = path.join(__dirname, '../data/products.json');
const usersPath = path.join(__dirname, '../data/users.json');


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
    login: (req, res) => {
        res.render('./user/login',{
            css: './css/login.css',
            title: 'Login'
        });
    },
    processLogin: (req, res) => {
        let users = JSON.parse(fs.readFileSync(usersPath, 'utf-8'));
        let user = users.find(user => user.email == req.body.email);
        
        if (user) {
            req.session.userLogged = user;
             if (req.body.rememberme) {
                     res.cookie(
                             'userLogged',
                 user,
                 { maxAge: 1000 * 60 * 60 * 24 } 
             );
         }
            res.redirect('/profile');
        }
    },
    logout: (req, res) => {
        req.session.destroy();
        res.clearCookie('userLogged')
        return res.redirect('/');
    },
    profile: (req, res) => {
        res.render('user/profile', {
            title: 'Profile',
            css: './css/login.css',
            user: req.session.userLogged
        });
    },
    register: (req, res) => {
        res.render('./user/register',{
           css: './css/register.css',
           title: 'Registro' 
        });
    },
    processregister:(req, res) =>{
        const resultValidation = validationResult(req);
        
    if (resultValidation.errors.length > 0) {
        return res.render('register', {
            errors: resultValidation.mapped(),
            oldData: req.body
        });
    }

    return res.send("home");
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