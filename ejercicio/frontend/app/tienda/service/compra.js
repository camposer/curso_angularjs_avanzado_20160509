(function() {
	angular
		.module('tienda')
		.service('tienda.CompraService', 
			[ 'BASE_URL', '$http', CompraService ]);

	function CompraService(BASE_URL, $http) {

		this.comprar = function(p, success, error) {
			$http({
				url: BASE_URL + '/compras',
				method: 'post',
				data: p,
				headers: {
					'Content-Type': 'application/json'
				}
			}).then(success, error);
		};

		this.obtenerCompras = function(success, error) {
			$http.get(BASE_URL + '/compras').then(success, error);
		};
	}

})();
