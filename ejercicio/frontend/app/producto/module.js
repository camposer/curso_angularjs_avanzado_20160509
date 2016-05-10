'use strict';

var closure = function() {
	angular
		.module('producto', [ 'ngRoute' ])
		.config(function($routeProvider) {
			$routeProvider
				.when('/producto', {
					templateUrl: 'producto/view/index.html',
					controller: 'ProductoCtrl'
				});

		});

}

closure();