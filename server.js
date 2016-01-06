var http = require('http');
var app = require('./config/express')();
var passport = require('./config/passport')();
var config = require('./config/config')();
var mongoose = require('./config/database')(config.db);

http.createServer(app).listen(app.get('port'), function(){
	console.log('Express Server execuando na porta ' + app.get('port'));
});