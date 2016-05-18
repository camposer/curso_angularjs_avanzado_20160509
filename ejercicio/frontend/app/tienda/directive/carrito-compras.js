(function() {
	angular
		.module('tienda')
		.directive('carritoCompras', carritoCompras);

	function carritoCompras() {
		return {
			restrict: 'E',
			// Utilizando controller porque necesito un servicio
			controller: [ '$scope', 'tienda.CarritoService', function($scope, carritoService) {
				var init = function() {
					$scope.carrito = carritoService.obtenerTodos();
				};

				init();
			} ],
			// Utilizando link porque no necesito un servicio
			link: function($scope) {
				$scope.mensaje = 'Hola';

				$scope.$watch('carrito', function(newValue, oldValue) {
					console.log('newValue = ' + JSON.stringify(newValue));
					console.log('oldValue = ' + JSON.stringify(oldValue));
				});
			},
			templateUrl: 'tienda/directive/carrito-compras.html'
		};
	}

})();