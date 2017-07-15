var express = require('express')
// instantiating the Router middle. essentially middleware composition
var router = express.Router()

var formatedDate = require('date-format');

// set matched user to false.
let match = false;

// would be set with the match object. 
let matchObject = "";

// array user information objects
let users = [
{ NOTE: "Welcome to the Home page. Enter your any of these names [ mikko and jenni to the route path " +
   " like localhost/user/mikko ] to see the effect" },
{
	Name : "mikko",
	Age : 20,
	Height: "80cm",
	profession: "trader"

},
{
	Name : "jenni",
	Age : 25,
	Height: "80cm",
	profession: "Accountant"

}

]
// Displays the time the request was made
// This would be executed first.
// Passes the execution phase to the next handle

let rquestDate = function requestDate(req, res, next) {
  console.log('You viewed the page at ' + formatedDate('hh:mm', new Date() ) + ' on ' + formatedDate('dd.MM.yy', new Date() ));
  next();
}
// Handler on the root path.
router.get('/', function (req, res) {
  res.json(users);
})

var checker = function (name){
	users.map(function(user){
		if(name == user.Name){
			matchObject = user;
			match = true;
		}
	})
}

// Handler on the 
router.get('/:name', rquestDate , function (req, res) {
	checker(req.params.name);
	if(match){
		console.log("user is found! ...");
		res.json(matchObject);
		match = false;
		
	}
	else {
		console.log("user not found! ...");
		res.send("user not found! ...")
	}
	
})

module.exports = router