'use strict';

(function() {
	angular
		.module('tienda', [ 'ngRoute' ])
		.config(function($routeProvider) {
			$routeProvider
				.when('/catalogo', {
					templateUrl: 'tienda/view/catalogo.html',
					controller: 'tienda.CatalogoCtrl'
				})
				.when('/carrito', {
					templateUrl: 'tienda/view/carrito.html',
					controller: 'tienda.CarritoCtrl'
				})
				.when('/reporte', {
					templateUrl: 'tienda/view/reporte.html',
					controller: 'tienda.ReporteCtrl'
				});

		});

})();