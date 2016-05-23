'use strict';

(function() {
	angular
		.module('producto')
		.service('producto.ProductoDummyService', [ '$q', ProductoDummyService ]);

	function ProductoDummyService($q) {
		var productos = [];
		var contador = 1;

		this.obtenerTodos = function(success, error) {
			var deferred = $q.defer();

			deferred.resolve({
	        	data: productos
	        });

			deferred.promise.then(success, error);

	        // success({data: productos});
		};

		this.agregar = function(producto, success, error) {
			producto.id = contador++;
			productos.push(producto);

	        $q(function(resolve, reject) {
	        	resolve();
	        }).then(success, error);
		};

		this.modificar = function(producto, success, error) {
			var pos = buscarPos(producto.id);

			if (pos)
				productos[pos] = producto;

	        $q(function(resolve, reject) {
	        	if (pos)
	        		resolve();
	        	else
	        		reject();
	        }).then(success, error);
		};

		this.eliminar = function(id, success, error) {
			var pos = buscarPos(id);
			if (pos)
				productos.splice(pos, 1);

	        $q(function(resolve) {
	        	resolve();
	        }).then(success, error);
		}

		this.obtener = function(id, success, error) {
			$q(function(resolve, reject) {
				var pos = buscarPos(id);
				if (pos)
					resolve({
						data: productos[pos]
					});
				else
	        		resolve({ data: {} });
	        }).then(success, error);
		}

		var buscarPos = function(id) {
			for (var i in productos)
				if (productos[i].id == id)
					return i;
		}
	}
})();
