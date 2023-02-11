let express = require("express");
const mainController = require("../controllers/mainControllers");

let app = express()

const router = express.Router();

router.get("/", mainController.home);
// usuario
router.get("/admin", mainController.admin);
router.get("/login", mainController.login);
router.get("/register", mainController.register);
// producto
router.get("/detalleproducto", mainController.detalleproducto);
router.get("/carritoDeCompras", mainController.carritoDeCompras);
router.get("/fibrofacil", mainController.fibrofacil);
router.get("/crearProducto", mainController.crearProducto);
router.get("/editarProducto", mainController.editarProducto);

// router.get("/error", mainController.error)

module.exports = router