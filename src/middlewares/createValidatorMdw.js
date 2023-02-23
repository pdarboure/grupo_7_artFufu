const {body} = require('express-validator');
const path = require('path');
const createMiddleware = [

    body('name')
        .notEmpty().withMessage('Por favor ingrese su nombre').bail()
        .isLength({min: 2}).withMessage('Minimo 2 caracteres')
        .isLength({max: 20}).withMessage('Maximo 20 caracteres'),
    body('price')
        .notEmpty().withMessage('Por favor ingrese un precio').bail()
        .isNumeric().withMessage('Por favor ingrese un valor numerico'),
    body('image')
        .custom((val,{req})=>{
            let validExtension = ['.jpg','.png', '.svg']
            let file = req.file
            if(!file){
                throw new Error('Ingrese una imagen')
            }
            else{
                let extension = path.extname(file.originalname)
                if(extension.includes(validExtension)){
                    throw new Error(`Las Extenciones validas son:${extension.join(', ')}`)
                }
            }
                return true
        })


];

module.exports = createMiddleware
