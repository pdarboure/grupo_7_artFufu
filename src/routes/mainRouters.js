let express = require("express");
const mainController = require("../controllers/mainControllers");
const userValidator = require('../middlewares/userValidator');

let app = express()

const router = express.Router();

router.get("/", mainController.home);
// usuario
// router.get("/login", mainController.login);
// router.get("/register", mainController.register);
// router.post("/register",userValidator, mainController.registerProcess)

// producto
router.get("/carritoDeCompras", mainController.carritoDeCompras);
router.get("/fibrofacil", mainController.fibrofacil);
router.get("/prueba", mainController.prueba);

module.exports = router