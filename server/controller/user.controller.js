
var User = require('../model/user.model');

module.exports.postLogin = function (req, res) {
	let err=[];
 	var success = true;

 	if(!req.body.email)
	{
		success = false;
		err.push('Email is required');
	}

	if(!req.body.password)
	{
		success = false;
		err.push('Password is required');
		return (
			res.send({
				success: success,
				message: err
			})
		)
	}
	
	User.find({email: req.body.email}).then(function(user) {

		if(user == false){
			res.send({
				success: false,
				message: "User is not exist"
			})
			return;
		}

		else if(user[0].password !== req.body.password) {
			res.send({
				success: false,
				message: 'Password is not correct'
			})
			return;
		}

		// res.cookie('userId', user._id, {signed: true});
		res.cookie('userId', user[0]._id);

		return(
			res.send({
				success: success,
				message: err
			})
		)
	});
}

function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}


module.exports.postRegister = function(req, res) {
 
 	let err=[];
 	var success = true;
    if(!req.body.first_name)
	{
		err.push('First name is required');
		success = false;
	}

	if(!req.body.last_name)
	{
		success = false;
		err.push('Last name is required');
	}

	if(!req.body.password)
	{
		success = false;
		err.push('Password is required');
	}

	if(!req.body.email)
	{
		success = false;
		err.push('Email is required');
	}

	 if (!validateEmail(req.body.email)) {
	    success = false;
	    err.push('email format is not valid');
	  }
	
	User.find({ email: req.body.email}, (error, previousUsers) => {
     	if (error) {
      		return res.send({
	          success: false,
	          message: 'Error: Server error'
	        });
      	}
    	else if (previousUsers.length > 0) {
	        return res.send({
	          success: false,
	          message: 'Error: Account already exist.'
	        });
     	}

     	User.collection.insertOne(req.body);

		res.send({
			success: success,
			message: err
		})
  	})
}

module.exports.postLogout = function (req, res) {
	res.clearCookie('userId');
	res.send({
		success: false,
		message: 'You are log out'
	})
}

module.exports.getLogin = function(req, res) {
	res.send({
		success: true
	})
}