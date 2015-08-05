module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
	  '../bower_components/requirejs/*.js',
	  '../bower_components/angular/angular.js',
	  '../bower_components/angular-route/angular-route.js',
	  '../app/scripts/*.js',
	  '../app/scripts/controllers/*.js',
	  '../bower_components/angular-mocks/angular-mocks.js',
      'spec/controllers/*.js'
    ],
    exclude: [
	  '../bower_components/angular-animate/*.*',
	  '../bower_components/angular-cookies/*.*',
	  '../bower_components/angular-messages/*.*',
	  '../bower_components/angular-aria/*.*'
    ],
    preprocessors: {},
    reporters: ['dots'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: true
  });
};