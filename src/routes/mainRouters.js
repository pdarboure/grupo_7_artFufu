let express = require("express");
const mainController = require("../controllers/mainControllers");
const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');
const userSessionMiddleware = require("../middlewares/userSessionMiddleware");

const router = express.Router();

router.get("/", mainController.home);
// usuario
router.get("/admin", mainController.admin);
router.get("/login", authMiddleware, mainController.login);
router.post('/login',  mainController.processLogin);
router.get("/register", mainController.register);
router.get('/logout', authMiddleware, mainController.logout);
router.get('/profile', guestMiddleware, mainController.profile);
// producto
router.get("/carritoDeCompras", mainController.carritoDeCompras);
router.get("/fibrofacil", mainController.fibrofacil);


module.exports = router