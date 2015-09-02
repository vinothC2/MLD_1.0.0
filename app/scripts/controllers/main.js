'use strict';

/**
 * @ngdoc function
 * @name mldApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the mldApp
 */
angular.module('mldApp')
  .controller('MainCtrl', function ($scope, $http, $location) {
    
	$scope.login = function () {
		var url = 'http://localhost:1212/api/login';
		var data = {userName:$scope.userName,password:$scope.password};
		$http.post(url,data)
		.success(function(data) {
			console.log(data.isLogged);
        }).error(function(res) {
			console.log('Error');
        });
	}
	
	$("#loginButton").click(function(){
		$scope.login();
	});
  });
