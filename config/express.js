var express = require('express');
var load = require('express-load');
var bodyParser = require('body-parser');
var helmet = require('helmet');

var cookieParser = require('cookie-parser');
var session = require('express-session');
var passport = require('passport');

module.exports = function() {
	var app = express();
	app.set('port', 3000);
	
	app.use(express.static('./public'));	

	app.set('view engine', 'ejs');
	app.set('views', './app/views');

	app.use(bodyParser.urlencoded({extended: true}));
	app.use(bodyParser.json());
	app.use(require('method-override')());

	//sessão so express deve vir sempre antes de init pe passport
	//garantia que a sessão de login seja restaurada na ordem certa
	app.use(cookieParser());
	app.use(session({
		secret: 'homem primata',
		resave: true,
		saveUninitialized: true
	}));
	app.use(passport.initialize());
	app.use(passport.session());

	app.disable('x-powered-by');
	//app.use(helmet.hidePoweredBy({setTo: 'PHP 5.5.14'}));

	//middleware para evitar clickjackin - ação indevida em app dentro de frame e iframe
	app.use(helmet.xframe());
	app.use(helmet.xssFilter());

	//não permite que o browser infira o MIME Type
	app.use(helmet.nosniff());

	load('models', {cwd: 'app'})
		.then('controllers')
		.then('routes')
		.into(app);	

	app.get('*', function(req, res){
		res.status(404).render('404');
	});
	
	return app;
}