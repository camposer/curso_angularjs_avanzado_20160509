(function() {
	angular
		.module('tienda')
		.service('tienda.CarritoService', [ '$rootScope', CarritoService ]);

	function CarritoService($rootScope) {
		this.agregar = function(p) {
			var encontrado = false;

			if (!$rootScope.carrito) 
				$rootScope.carrito = [];

			for (var i in $rootScope.carrito) {
				var productoEnCarrito = 
					$rootScope.carrito[i];

				if (p.id == productoEnCarrito.id) {
					productoEnCarrito.cantidad += p.cantidad;
					encontrado = true;
					break;
				}
			}

			if (!encontrado) {
				var pNew = angular.copy(p);
				pNew.getTotal = function() {
					return this.precio * this.cantidad;
				};
				
				$rootScope.carrito.push(pNew);
			}
		};

		this.obtenerTodos = function() {
			var carrito = {
				productos: $rootScope.carrito
			};

			carrito.getTotal = function() {
				var total = 0;

				for (var i in this.productos) 
					total += this.productos[i].getTotal();

				return total;
			};

			return carrito;
		};
	}

})();