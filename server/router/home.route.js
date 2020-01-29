
var express = require('express')

var homeController = require('../controller/home.controller')

var router = express.Router()

router.post('/page1', homeController.postPage);
router.get('/', homeController.getHome);
router.get('/page1', homeController.getPage1);
router.get('/page2', homeController.getPage2);
router.get('/page3', homeController.getPage3);
router.get('/page4', homeController.getPage4);
router.get('/page5', homeController.getPage5);

module.exports= router;//export ten cua variable, function