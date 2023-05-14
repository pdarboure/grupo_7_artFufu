const express = require('express');
const router = express.Router();

const mainController = require('../controller/main.controller');

router.get('/api', mainController.home);

router.get('/prueba',   mainController.prueba);


module.exports = router