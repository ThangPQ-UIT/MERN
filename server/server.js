var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');


// mongoose.connect(process.env.MONGO_URL);
mongoose.connect("mongodb://localhost/lab4-laptrinhweb", {useNewUrlParser: true});

const port = 9080;
var app = express();

app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE,OPTIONS');
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Authorization");
	next();
});
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 


var product = require('./router/product.route');
var middleware = require('./middleware/authmiddleware.js');
var user = require('./router/user.route');
var home = require('./router/home.route');
var Home = require('./model/home.model');

app.use('/product', middleware.requireAuth, product);
app.use('/user', user);
app.use('/home', middleware.requireAuth, home);

app.listen(port, function() {
	console.log('Server listening on ' + port);	
});
