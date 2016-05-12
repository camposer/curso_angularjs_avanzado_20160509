'use strict';

var closure = function() {
	angular
		.module('producto', [ 'ngRoute', 'ngStorage' ])
		.config(function($routeProvider) {
			$routeProvider
				.when('/producto', {
					templateUrl: 'producto/view/index.html',
					controller: 'producto.ProductoCtrl'
				});

		});

}

closure();