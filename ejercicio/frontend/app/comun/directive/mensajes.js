(function() {
	angular
		.module('comun')
		.directive('mensajes', mensajes);

	function mensajes() {
		return {
			restrict: 'E',
			templateUrl: 'comun/directive/mensajes.html',
			scope: {
				detalle: '=src'
			},
			link: function($scope) {
				$scope.$watch('detalle', function() {
					scrollTo(0, 0);
				});
			}
		};
	}

})();