var http = require('http');
var app = require('./config/express')();
var mongoose = require('./config/database')('mongodb://localhost/contatooh');

http.createServer(app).listen(app.get('port'), function(){
	console.log('Express Server execuando na porta ' + app.get('port'));
});