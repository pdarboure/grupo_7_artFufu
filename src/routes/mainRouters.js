let express = require("express");
const mainController = require("../controllers/mainControllers");

let app = express()

const router = express.Router();

router.get("/",mainController.home);
router.get("/login",mainController.login);
router.get("/register",mainController.register);
router.get("/detalleproducto",mainController.detalleproducto);
router.get("/carritoDeCompras",mainController.carritoDeCompras);
router.get("/fibrofacil",mainController.fibrofacil);
router.get("/admin",mainController.admin);
router.get("/crearProducto",mainController.crearProducto);
router.get("/editarProducto",mainController.editarProducto);

module.exports = router