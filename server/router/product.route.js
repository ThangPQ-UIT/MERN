
var express = require('express')

var productController = require('../controller/product.controller')

var router = express.Router()

router.get('/laptop', productController.getLaptop);
router.get('/phone', productController.getPhone);
router.get('/tablet', productController.getTablet);

module.exports= router;//export ten cua variable, function