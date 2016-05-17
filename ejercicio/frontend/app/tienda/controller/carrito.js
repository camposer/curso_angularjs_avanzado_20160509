(function() {

	angular
		.module('tienda')
		.controller('tienda.CarritoCtrl', 
			[  '$scope', 'tienda.CarritoService', 'tienda.CompraService', CarritoCtrl ]);

	function CarritoCtrl($scope, carritoService, compraService) {
		var init = function() {
			$scope.carrito = carritoService.obtenerTodos();
		};

		init();

		$scope.comprar = function() {
			// TODO Implementar success y error
			var productos = carritoService.obtenerTodos().productos;
			for (var i in productos) {
				var compra = {
					productoId: productos[i].id,
					nombre: productos[i].nombre,
					cantidad: productos[i].cantidad
				};
				compraService.comprar(compra);
			}
			carritoService.limpiar();
		};
	}

})();