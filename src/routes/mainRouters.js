let express = require("express");
const { body } = require('express-validator');
const mainController = require("../controllers/mainControllers");
const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();


// requiero multer
const multer = require('multer');

// data del metodo express validator


// utilizo el metodo diskstorage de multer
const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, './public/images/avatars');
	},
	filename: (req, file, cb) => {
		let fileName = `${Date.now()}_img${path.extname(file.originalname)}`;
		cb(null, fileName);
	}
})

// ejecuto metodo storage de multer
const uploadFile = multer({ storage });

// validaciones 
const validations = [
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
	})
]















router.get("/", mainController.home);
// usuario
router.get("/admin", mainController.admin);

//formulario de login 
router.get("/login", authMiddleware, mainController.login);

//procesar el login
router.post('/login',  mainController.processLogin);

//formulario de register
router.get("/register", mainController.register);

//procesar el register
router.post("/register", uploadFile.single('avatar'), validations,mainController.processregister);

router.get('/logout', authMiddleware, mainController.logout);
router.get('/profile', guestMiddleware, mainController.profile);

// producto
router.get("/carritoDeCompras", mainController.carritoDeCompras);
router.get("/fibrofacil", mainController.fibrofacil);


module.exports = router