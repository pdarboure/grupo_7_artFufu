const express = require('express');
const router = express.Router();
const userController = require('../controllers/userControllers');
const userValidator = require('../middlewares/userValidator');

router.get("/admin", userController.admin);
router.get("/login", userController.login);
router.get("/register", userController.register);
router.post("/register",userValidator, userController.registerProcess)

module.exports = router