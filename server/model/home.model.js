var mongoose = require('mongoose');

//Schema để khai báo những field có trong database, có thể làm sạch dữ liệu, validate dữ liệu
var homeSchema = new mongoose.Schema({
	productCode: String,
	productName: String,
	productImg: String,
	productPrice: String
});

var Home = mongoose.model('Home', homeSchema, 'home');

module.exports = Home;