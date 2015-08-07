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
  .module('mldApp', ['ngRoute'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });