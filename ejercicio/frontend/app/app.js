(function() {
	angular
		.module('app', [ 
			'comun',
			'producto',
			'tienda',
			'ui.router',
			'ngAnimate'
		])
		.config(function($urlRouterProvider, $locationProvider) {
			//$locationProvider.html5Mode(true); // necesita mod-rewrite activado
			$urlRouterProvider.otherwise('/catalogo');
		});	
})();