(function() {
	angular
		.module('producto')
		.service('ProductoService', 
			[ '$http', ProductoService ]);

	function ProductoService($http) {
		var BASE_URL = 'http://localhost:3000/productos';

		this.obtenerTodos = function(success, error) {
			$http.get(BASE_URL).then(success, error);
		}

		this.eliminar = function(id, success, error) {
			$http.delete(BASE_URL + '/' + id).then(success, error);
		}

		this.agregar = function(p, success, error) {
			$http.post(BASE_URL, p).then(success, error);
		}

		this.modificar = function(p, success, error) {
			$http.put(BASE_URL + '/' + p.id, p).then(success, error);
		}
	}

})();
