'use strict';

var closure = function() {
	angular
		.module('producto', [ 'ui.router', 'ngStorage' ])
		.config(function($stateProvider) {
			$stateProvider
				.state('producto', {
					url: '/producto',
					templateUrl: 'producto/view/index.html',
					controller: 'producto.ProductoCtrl'
				});
		});

}

closure();