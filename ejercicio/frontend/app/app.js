(function() {
	angular
		.module('app', [ 
			'producto',
			'ngRoute' 
		])
		.config(function($routeProvider) {
			$routeProvider
				.when('/inicio', {
					templateUrl: 'inicio.html',
					controller: [ '$rootScope', function($rootScope) {
						$rootScope.mensaje = 'Inicio';
					}]
				});

			$routeProvider.otherwise('/inicio');
		});	
})();