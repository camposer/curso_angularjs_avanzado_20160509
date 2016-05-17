(function() {
	angular
		.module('producto')
		.service('producto.ProductoService', 
			[ 'BASE_URL', '$http', ProductoService ]);

	function ProductoService(BASE_URL, $http) {

		this.obtenerTodos = function(success, error) {
			$http.get(BASE_URL + '/productos').then(success, error);
		}

		this.eliminar = function(id, success, error) {
			$http.delete(BASE_URL + '/productos/' + id).then(success, error);
		}

		this.agregar = function(p, success, error) {
			$http.post(BASE_URL + '/productos', p).then(success, error);
		}

		this.modificar = function(p, success, error) {
			$http.put(BASE_URL + '/productos/' + p.id, p).then(success, error);
		}
	}

})();
