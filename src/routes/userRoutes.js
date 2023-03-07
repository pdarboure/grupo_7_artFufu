const express = require('express');
const router = express.Router();
const userController = require('../controllers/userControllers');
const userValidator = require('../middlewares/userValidator');
const upload = require('../middlewares/multer');
const authMiddleware = require('../middlewares/authMiddleware')
const guestMiddleware = require('../middlewares/guestMiddleware');


router.get("/admin", userController.admin); // PA ALGUN MOMENTO
router.get("/login",authMiddleware,userController.login);
router.post("/login", userController.loginProcess);
router.get('/profile',guestMiddleware,userController.profile);
router.get("/register",authMiddleware, userController.register);
router.post("/register",upload.single('image'),userValidator, userController.registerProcess)

module.exports = router