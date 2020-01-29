var mongoose = require('mongoose');

//Schema để khai báo những field có trong database, có thể làm sạch dữ liệu, validate dữ liệu
var tabletSchema = new mongoose.Schema({
	productCode: String,
	productName: String,
	productImg: String,
	productPrice: String
});

var Tablet = mongoose.model('Tablet', tabletSchema, 'tablet');

module.exports = Tablet;