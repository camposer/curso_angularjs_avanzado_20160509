(function() {
	angular
		.module('tienda')
		.service('tienda.CarritoService', [ '$sessionStorage', CarritoService ]);

	function CarritoService(storage) {
		this.agregar = function(p) {
			var encontrado = false;

			if (!storage.carrito) 
				storage.carrito = [];

			for (var i in storage.carrito) {
				var productoEnCarrito = 
					storage.carrito[i];

				if (p.id == productoEnCarrito.id) {
					productoEnCarrito.cantidad += p.cantidad;
					encontrado = true;
					break;
				}
			}

			if (!encontrado) {
				var pNew = angular.copy(p);
				storage.carrito.push(pNew);
			}
		};

		this.obtenerTodos = function() {
			var carrito = {
				total: 0,
				productos: storage.carrito
			};

			// añadiendo totales al carrito y sus productos
			for (var i in carrito.productos) {
				var p = carrito.productos[i];
				p.total = p.precio * p.cantidad;
				carrito.total +=  p.total;
			}

			return carrito;
		};

		this.limpiar = function() {
			delete storage.carrito;
		};
	}

})();