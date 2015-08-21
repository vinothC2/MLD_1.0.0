'use strict';

/**
 * @ngdoc overview
 * @name mldApp
 * @description
 * # mldApp
 *
 * Main module of the application.
 */
angular
  .module('mldApp', ['ui.router'])
  .config(function ($stateProvider, $urlRouterProvider) {
  
	$urlRouterProvider.otherwise('login');
  
	 $stateProvider
        .state('login', {
            url: '/',
            templateUrl: 'views/main.html',
			controller: 'MainCtrl',
			controllerAs: 'main'
        });
  });