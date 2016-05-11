(function() {

	angular
		.module('tienda')
		.controller('tienda.CarritoCtrl', 
			[  '$scope', 'tienda.CarritoService', CarritoCtrl ]);

	function CarritoCtrl($scope, carritoService) {
		var init = function() {
			$scope.carrito = carritoService.obtenerTodos();
		};

		init();
	}

})();