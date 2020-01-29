var mongoose = require('mongoose');

//Schema để khai báo những field có trong database, có thể làm sạch dữ liệu, validate dữ liệu
var laptopSchema = new mongoose.Schema({
	productCode: String,
	productName: String,
	productImg: String,
	productPrice: String
});

var Laptop = mongoose.model('Laptop', laptopSchema, 'laptop');

module.exports = Laptop;