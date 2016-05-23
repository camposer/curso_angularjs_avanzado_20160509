'use strict';

describe('Suite de pruebas para producto.ProductoCtrl...', function () {
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
    productoService = $injector.get('producto.ProductoDummyService');

    productoService.agregar({
        id: 1,
        nombre: 'uno',
        precio: 1
      });

    productoService.agregar({
        id: 2,
        nombre: 'dos',
        precio: 2
      });

    productoService.agregar({
        id: 3,
        nombre: 'tres',
        precio: 3
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
    expect(scope.productos.length).toEqual(3);
  });

  it('Cuando agrego un producto', function() {
    var form = {
      nombre: { $invalid: false },
      precio: { $invalid: false }
    };

    // datos capturados por el formulario ng-model
    scope.producto = {
      nombre: 'nombre',
      precio: 1
    };

    var numInicialProductos = scope.productos.length;
    scope.guardar(form);
    scope.$digest(); // para ver los cambios sobre el scope

    expect(scope.producto).toEqual({});
    expect(scope.productos.length).toEqual(numInicialProductos + 1);
    expect(scope.mensajes.satisfactorio.length).toBeGreaterThan(0);
  });

  it('Cuando agrego un producto nombre y precio inválido', function() {
    var form = {
      nombre: { $invalid: true },
      precio: { $invalid: true }
    };

    // datos capturados por el formulario ng-model
    scope.producto = {
      nombre: 'nombre',
      precio: 0
    };

    scope.guardar(form);

    expect(scope.mensajes.error.length).toEqual(2);
  });

});
