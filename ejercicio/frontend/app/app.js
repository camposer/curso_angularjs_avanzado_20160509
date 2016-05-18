(function() {
	angular
		.module('app', [ 
			'comun',
			'producto',
			'tienda',
			'ngRoute',
			'ngAnimate'
		])
		.config(function($routeProvider) {
			$routeProvider.otherwise('/catalogo');
		});	
})();