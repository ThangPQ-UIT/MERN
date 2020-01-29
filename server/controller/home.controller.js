
var Home = require('../model/home.model');

module.exports.getHome = function(req, res) {
	Home.find().then(function(item) {
		let itemSend = item.slice(0, 8);
		res.send({
			success: true,
			message: itemSend
		});
	})
}

module.exports.postPage = function (req, res) {
	console.log("Page number: ", req.body);
	// User.find({ email: req.body.email}, (error, previousUsers) => {
 //     	if (error) {
 //      		return res.send({
	//           success: false,
	//           message: 'Error: Server error'
	//         });
 //      	}
 //    	else if (previousUsers.length > 0) {
	//         return res.send({
	//           success: false,
	//           message: 'Error: Account already exist.'
	//         });
 //     	}

 //     	User.collection.insertOne(req.body);

	// 	res.send({
	// 		success: success,
	// 		message: err
	// 	})
 //  	})
}

module.exports.getPage1 = function (req, res) {
	Home.find().then(function(item) {
		let itemSend = item.slice(0, 8);
		res.send({
			success: true,
			message: itemSend
		});
	});
}

module.exports.getPage2 = function(req, res) {
	Home.find().then(function(item) {
		let itemSend = item.slice(8, 16);
		res.send({
			success: true,
			message: itemSend
		});
	});
}

module.exports.getPage3 = function(req, res) {
	Home.find().then(function(item) {
		let itemSend = item.slice(16, 24);
		res.send({
			success: true,
			message: itemSend
		});
	});
}

module.exports.getPage4 = function(req, res) {
	Home.find().then(function(item) {
		let itemSend = item.slice(24, 32);
		res.send({
			success: true,
			message: itemSend
		});
	});
}

module.exports.getPage5 = function(req, res) {
	Home.find().then(function(item) {
		let itemSend = item.slice(32);
		res.send({
			success: true,
			message: itemSend
		});
	});
}