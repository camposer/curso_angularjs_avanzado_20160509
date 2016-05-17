(function() {

	angular
		.module('tienda')
		.controller('tienda.ReporteCtrl', 
			[  '$scope', 'tienda.CompraService', ReporteCtrl ]);

	function ReporteCtrl($scope, compraService) {
		var init = function() {
			compraService.obtenerCompras(function(resp) {
				$scope.ALGO = resp.data;
			});
		};

		init();
	}

})();