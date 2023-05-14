const express = require('express');
const router = express.Router();
const upload = require('../middlewares/multer');
const productController = require('../controllers/productController');
const createMiddleware = require('../middlewares/createValidatorMdw');
const Product = require('../database/models/Product');

// Listado de productos
router.get('/', productController.index);
// creacion de producto
router.get('/create', productController.create);
router.post('/create', upload.single('image'),createMiddleware, productController.store);
// actualizar producto
router.get('/edit/:id', productController.edit);
router.put('/edit/:id', productController.update);
// eliminar producto
router.get('/delete/:id', productController.delete);
router.delete('/delete/:id', productController.destroy);
// ver producto
router.get('/:id', productController.show);

// API endpoint para products
// router.get('/api/products', productController.list);
// router.get('/api/products/:id', productController.show);

module.exports = router;