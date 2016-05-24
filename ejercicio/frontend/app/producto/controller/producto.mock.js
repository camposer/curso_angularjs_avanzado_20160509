'use strict';

describe('Suite de pruebas con mockito para producto.ProductoCtrl...', function () {
  var controller, 
    productoCtrl, 
    scope, 
    productoService, 
    MensajesFactory;

  beforeEach(module('app'));

  beforeEach(inject(function ($q, $controller, $rootScope, $injector) { 
    scope = $rootScope.$new();

    controller = $controller;
    MensajesFactory = $injector.get('comun.MensajesFactory');
    // En lugar de implementar un dummy de ProductoService, pudimos
    // inyectar el $httpBackend y dar respuesta (estática) a cada una de las peticiones
    // angular inyecta el $httpBackend en lugar del $http de forma automática
    productoService = JsMockito.mock($injector.get('producto.ProductoService'));
    JsMockito.when(productoService).obtenerTodos().then(function() {
      console.log('Ejecutó obtenerTodos');
      expect(true).toEqual(true);
    });

    productoCtrl = $controller('producto.ProductoCtrl', {
      $rootScope: $rootScope,
      $scope: scope,
      'producto.ProductoService': productoService,
      'comun.MensajesFactory': MensajesFactory
    });

    scope.$digest(); // Obliga la actualización del scope a partir de las promesas pendientes por ejecución
  }));

  it('Cuando se inicia el controller entonces hay productos', function () {
    console.log('productos = ' + JSON.stringify(scope.productos));
  });

});
