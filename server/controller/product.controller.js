
var Phone = require('../model/phone.model');
var Tablet = require('../model/tablet.model');
var Laptop = require('../model/laptop.model');

module.exports.getPhone = function (req, res) {
	Phone.find().then(function(item) {
		res.send({
			success: true,
			message: item
		});
	});
}

module.exports.getLaptop = function (req, res) {
	console.log("cookie: ", req.cookies);
	Laptop.find().then(function(item) {
		res.send({
			success: true,
			message: item
		});
	});
}

module.exports.getTablet = function (req, res) {
	Tablet.find().then(function(item) {
		res.send({
			success: true,
			message: item
		});
	});
}