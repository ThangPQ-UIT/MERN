
var express = require('express')

var laptopController = require('../controller/user.controller')
var middleware = require('../middleware/authmiddleware.js');

var router = express.Router()

router.post('/login', laptopController.postLogin);
router.post('/register', laptopController.postRegister);
router.post('/logout', laptopController.postLogout);
router.get('/login',  middleware.requireAuth, laptopController.getLogin);

module.exports= router;//export ten cua variable, function