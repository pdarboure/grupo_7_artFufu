const express = require('express');
const router = express.Router();
const upload = require('../middlewares/multer');

const createMiddleware = require('../middlewares/createValidatorMdw');
const productController = require('../controllers/productController');


// Listado de productso
router.get('/', productController.index);
// creacion de producto
router.get('/create', productController.create);
router.post('/create', upload.any('images'),createMiddleware, productController.store);
// actualizar producto
router.get('/edit/:id', productController.edit);
router.put('/edit/:id', productController.update);
// eliminar producto
router.get('/delete/:id', productController.delete);
router.delete('/delete/:id', productController.destroy);
// ver producto
router.get('/:id', productController.show);


module.exports = router;