const path = require('path');
const { body } = require('express-validator');

module.exports = [
	body('fullName').notEmpty().withMessage('Tienes que escribir un nombre'),
	body('email')
		.notEmpty().withMessage('Tienes que escribir un correo electrónico').bail()
		.isEmail().withMessage('Debes escribir un formato de correo válido'),
	body('password').notEmpty().withMessage('Tienes que escribir una contraseña'),
	body('checkpassword')
	.isLength({min : 5}).withMessage('Minimo 5 caracteres')
	.custom((val, {req}) => {
		let checkPass = req.body.cheackPassword;

		if(val != checkPass){
			throw new Error ('Las constraseñas tiene que ser iguales')
		}

		return true
	}),
    body('avatar').custom((value, { req }) => {
		let file = req.file;
		let acceptedExtensions = ['.jpg', '.png', '.gif'];

		if (!file) {
			throw new Error('Tienes que subir una imagen');
		} else {
			let fileExtension = path.extname(file.originalname);
			if (!acceptedExtensions.includes(fileExtension)) {
				throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}`);
			}
		}

		return true;
	})
]