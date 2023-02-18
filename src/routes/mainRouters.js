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
router.get("/carritoDeCompras", mainController.carritoDeCompras);
router.get("/fibrofacil", mainController.fibrofacil);
// router.get("/create", mainController.create);
// router.get("/editarProducto", mainController.editarProducto);

// router.get("/error", mainController.error)

module.exports = router