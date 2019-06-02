// // var express = require('express')
// // // var bodyParser = require('body-parser');
// // // var cookieParser = require('cookie-parser');
// // var mongoose = require('mongoose');
// // import User from './model/user.model'

// // // mongoose.connect(process.env.MONGO_URL);
// // mongoose.connect("mongodb://localhost/lab4-laptrinhweb", {useNewUrlParser: true});
// // // mongoose.connect(process.env.MONGO_URL);
// // mongoose.connect("mongodb://localhost/express-demo", {useNewUrlParser: true});
// // app.use(express.static('public'));

// // var port = 9080;

// // var app = express();
// // app.use(bodyParser.json()); 
// // app.use(bodyParser.urlencoded({ extended: true })); 

// // app.get('/', function(req, res) {
// //     console.log("hello trang chu")
// //     // User.find(function(err, name) {
// //     //     if (err)
// //     //       res.send(err);
// //     //     //responds with a json object of our database comments.
// //     //     res.json(name)
// //     //   });
// //     // res.json(User.name);
// //     // res.json([1, 2, 3, 4]);
// // })

// // app.listen(port, function() {
// // 	console.log('Server listening on ' + port);	
// // });

// const express = require('express')
// const app = express()
// const port = 3000

// app.get('/', function (req, res) {
//   res.send('Hello World')
// });
 
// app.listen(port, function() {
//     console.log('Server is listening on', port);
// });