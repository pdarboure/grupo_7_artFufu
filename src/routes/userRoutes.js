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
router.post('/logout', userController.logout);
router.get('/profile',guestMiddleware,userController.profile);
router.get("/register",authMiddleware, userController.register);
router.post("/register",upload.single('image'),userValidator, userController.registerProcess)

// API endpoint para users
router.get('/api/users', userController.list);
router.get('/api/users/:id', userController.show);

module.exports = router