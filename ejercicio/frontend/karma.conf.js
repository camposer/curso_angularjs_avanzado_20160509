module.exports = function(config){
  config.set({

    basePath : './',

    files : [
      // vendor
      'app/bower_components/angular/angular.js', // requerida
      'app/bower_components/angular-mocks/angular-mocks.js', // requerida
      'app/bower_components/angular-ui-router/release/angular-ui-router.js',
      'app/bower_components/ngstorage/ngStorage.js',

      // app
      'app/app.spec.js',
      'app/comun/module.js',
      'app/comun/**/*.js',
      'app/producto/module.js',
      'app/producto/**/*.js'
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome'],

    plugins : [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-junit-reporter'
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};
