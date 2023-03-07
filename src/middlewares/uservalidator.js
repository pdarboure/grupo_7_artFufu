const {body} = require('express-validator');
const path = require('path');
const userValidator = [

    body('nombre')
        .isLength({min: 2}).withMessage('Minimo 2 caracteres')
        .isLength({max: 20}).withMessage('Maximo 20 caracteres'),
    body('apellido')
        .isLength({min: 2}).withMessage('Minimo 2 caracteres')
        .isLength({max: 20}).withMessage('Maximo 20 caracteres'),
    body('nombreUsuario')
        .isLength({min: 2}).withMessage('Minimo 2 caracteres')
        .isLength({max: 20}).withMessage('Maximo 20 caracteres'),
    body('emailRegistro')
        .isEmail().withMessage('Tiene que ser un email valido'),
    body('passwordRegistro')
        .custom((val,{req})=>{
            let check = req.body.checkPassword
            if(val != check){
                throw new Error ('Deben coincidir las contraseñas')
            }
            return true
        }),
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
 module.exports = userValidator