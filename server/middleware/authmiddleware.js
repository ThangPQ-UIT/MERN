
var User = require('../model/user.model');

module.exports.requireAuth = function (req, res, next) {
	//nếu không có cookie, hoặc có cookie mà cookie đó không trùng với id thì redirect sang login
	if(!req.cookies['userId']){
		return(
			res.send({
				success: false,
				message: "You are not logged in"
			})
		)
	}

	// var user = db.get('users').find({id: req.signedCookies.userId}).value(); // lay cookie da gui

	//đề phòng giả mạo cookie, kiểm tra id có giống với cookie hay ko( vì cookie được lấy chính bằng id của user đó)
	 User.find({_id: req.cookies.userId}).then(function(user) {
		// console.log('req.cookie: ' + user)
		if(!user) {
			return(
				res.send({
					success: false,
					message: "You are not logged in"
				})
			)
		}
		
	})

	next();
}