(function() {

	angular
		.module('tienda')
		.controller('tienda.CatalogoCtrl', 
			[  '$scope', '$state', 'producto.ProductoService', 'tienda.CarritoService', CatalogoCtrl ]);

	function CatalogoCtrl($scope, $state, productoService, carritoService) {
		$scope.productos = []; // enlazado con la tabla (opcional)

		var listar = function() {
			var callback = function(res) {
				$scope.productos = res.data;
			};

			productoService.obtenerTodos(callback);
		};

		listar();

		$scope.agregar = function() {
			for (var i in $scope.productos) {
				var p = $scope.productos[i];

				if (angular.isNumber(p.cantidad) &&
						p.cantidad > 0) {

					carritoService.agregar(p);
					$state.go('carrito');
				}

			}
		};
	}

})();