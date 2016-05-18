(function() {
	angular
		.module('comun')
		.factory('comun.MensajesFactory', function() {
			return {
				createMensaje: function() {
					return {
						error: [],
						satisfactorio: []
					};
				}
			}
		});
})();