var passport = require('passport');
var GitHubStrategy = require('passport-github').Strategy;
var mongoose = require('mongoose');

module.exports = function() {

	var Usuario = mongoose.model('Usuario');

	passport.use(new GitHubStrategy({
		clientID: '67cb9a384efe215da941',
		clientSecret: '06f3fc0a17ba1933a51b0c21318a711bc638a76f',
		callbackURL: 'http://localhost:3000/auth/github/callback'
	}, function(accessToken, refreshToken, profile, done){
			Usuario.findOrCreate(
				{ "login": profile.username},
				{ "nome": profile.username}, 
				function(erro, usuario) {
					if (erro) {
						console.log(erro);
						return done(erro);
					}
					return done(null, usuario);
				}
			);
	   }
	));

	passport.serializeUser(function(usuario, done){
		done(null, usuario._id);
	});

	passport.deserializeUser(function(id, done){
		Usuario.findById(id).exec()
		.then(function(usuario){
			done(null, usuario);
		})
	})
}
