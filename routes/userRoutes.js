const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController')

router.get('/', userController.rootController);
router.post('/registration', userController.registerController);
router.post('/login', userController.loginController);


module.exports = router;