(function() {
	angular
		.module('app', [ 
			'producto',
			'tienda',
			'ngRoute' 
		])
		.config(function($routeProvider) {
			$routeProvider.otherwise('/catalogo');
		});	
})();