var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;
var bson = require('bson');

var _idProcurado = new ObjectID("568ad62640a3022f0aeaee4f");

MongoClient.connect('mongodb://127.0.0.1:27017', function(erro, db){
	if (erro) throw err;
	db.collection('contatos'/).findOne({_id: _idProcurado}, function(erro, contato){
		if(erro) throw err;
		console.log(contato);
	});
});