(function() {

	angular
		.module('producto')
		.controller('producto.ProductoCtrl', 
			[  '$rootScope', '$scope', 'producto.ProductoService', 'comun.MensajesFactory', ProductoCtrl ]);

	function ProductoCtrl($rootScope, $scope, productoService, MensajesFactory) {
		$scope.producto = {} // enlazado con el form (opcional)
		$scope.productos = []; // enlazado con la tabla (opcional)

		$scope.rootScope = $rootScope;
		$scope.mensaje = 'Producto';

		var listar = function() {
			var callback = function(res) {
				$scope.productos = res.data;
			};

			productoService.obtenerTodos(callback);
		};

		listar();

		$scope.eliminar = function(id) {
			productoService.eliminar(id, listar);
		};

		$scope.mostrar = function(p) {
			$scope.producto = p;
		}

		$scope.guardar = function(form) {
			$scope.mensajes = MensajesFactory.createMensaje();

			if (form.nombre.$invalid)
				$scope.mensajes.error.push('Nombre inválido');

			if (form.precio.$invalid || 
					$scope.producto.precio <= 0) {

				form.precio.$invalid = true;
				$scope.mensajes.error.push('Precio inváildo');
			}

			if ($scope.mensajes.error.length == 0) {
				var success = function() {
					$scope.producto = {};
					listar();
					$scope.mensajes.satisfactorio.push('Producto guardado');
				};

				var error = function() {
					$scope.mensajes.error.push('Ha ocurrido un error en el servidor');
				}

				if ($scope.producto.id) {
					productoService.modificar($scope.producto, success, error);									
				} else {
					productoService.agregar($scope.producto, success, error);				
				}
			}
		}
	}

})();