var contatoPage = function() {

	this.visitar = function() {
		browser.get('http://localhost:3000/#/contato');
	};

	this.digitarNome = function(nome) {
		element(by.model('contato.nome')).sendKeys(nome);
	};

	this.digitarEmail = function(nome) {
		element(by.model('contato.email')).sendKeys(nome);
	};

	this.salvar = function() {
		element(by.css('.btn-primary')).click();
	};

	this.obterMensagem = function() {
		return element(by.binding('mensagem.texto')).getText();
	};

	this.selectionarPrimeiraEmergenciadaLista = function() {
		element(by.css('option[value="0"]')).click();
	};
}

module.exports = contatoPage;