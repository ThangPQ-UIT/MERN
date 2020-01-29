var mongoose = require('mongoose');

//Schema để khai báo những field có trong database, có thể làm sạch dữ liệu, validate dữ liệu
var userSchema = new mongoose.Schema({
	name: String,
	password: String
});

var User = mongoose.model('User', userSchema, 'user');

module.exports = User;