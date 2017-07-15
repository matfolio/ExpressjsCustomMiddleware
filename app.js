var express = require('express')
var app = express()

var users = require('./userinfo')

// this is our middleware.
// it would be executed first before anyother handler
// that could be invoked here.
app.use('/user', users)


app.listen(3000, function(){
	console.log("Hello Muftau... You are now connected to the server");
});