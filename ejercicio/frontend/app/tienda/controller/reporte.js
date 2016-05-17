(function() {

	angular
		.module('tienda')
		.controller('tienda.ReporteCtrl', 
			[  '$scope', 'tienda.CompraService', ReporteCtrl ]);

	function ReporteCtrl($scope, compraService) {
		var init = function() {
			compraService.obtenerCompras(function(resp) {
				$scope.productos = [];
				$scope.cantidades = [];
				for (var i in resp.data)  {
					$scope.productos.push(resp.data[i].nombre);
					$scope.cantidades.push(resp.data[i].cantidad);					
				}
			});
		};

		init();
	}

})();