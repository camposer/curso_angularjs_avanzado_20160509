'use strict';

(function() {
	angular
		.module('tienda', [ 'ui.router', 'chart.js' ])
		.config(function($stateProvider) {
			$stateProvider
				.state('catalogo', {
					url: '/catalogo',
					templateUrl: 'tienda/view/catalogo.html',
					controller: 'tienda.CatalogoCtrl'
				})
				.state('carrito', {
					url: '/carrito',
					templateUrl: 'tienda/view/carrito.html',
					controller: 'tienda.CarritoCtrl'
				})
				.state('reporte', {
					url: '/reporte',
					templateUrl: 'tienda/view/reporte.html',
					controller: 'tienda.ReporteCtrl'
				});

		});

})();