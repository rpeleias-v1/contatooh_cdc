angular.module('contatooh').controller('ContatosController', function($scope){
	$scope.total = 0;
	$scope.incrementa = function(){
		$scope.total++;
	};

	$scope.contatos = [
		{
			"_id": 1,
			"nome": "Contato Angular 1",
			"email": "contato1@empresa.com.br"
		},
		{
			"_id": 2,
			"nome": "Contato Angular 2",
			"email": "contato2@empresa.com.br"
		},
		{
			"_id": 3,
			"nome": "Contato Angular 3",
			"email": "contato3@empresa.com.br"
		}
	];

	$scope.filtro = '';
});