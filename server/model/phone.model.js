var mongoose = require('mongoose');

//Schema để khai báo những field có trong database, có thể làm sạch dữ liệu, validate dữ liệu
var phoneSchema = new mongoose.Schema({
	productCode: String,
	productName: String,
	productImg: String,
	productPrice: String
});

var Phone = mongoose.model('Phone', phoneSchema, 'phone');

module.exports = Phone;