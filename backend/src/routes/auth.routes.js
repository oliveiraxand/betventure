const router = require('express').Router();
const { authController } = require('../controllers/')

router.get('/token', authController.generateToken);

module.exports = router;