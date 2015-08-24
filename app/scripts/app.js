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
  .module('mldApp', ['ui.router','pascalprecht.translate','tmh.dynamicLocale','ngCookies'])
  .config(function ($stateProvider, $urlRouterProvider, $translateProvider, tmhDynamicLocaleProvider) {
	
	$translateProvider.useMissingTranslationHandlerLog();
	$translateProvider.useStaticFilesLoader({
        prefix: 'resources/locale-',// path to translations files
        suffix: '.json'// suffix, currently- extension of the translations
    });
    $translateProvider.preferredLanguage('fil_PH');// is applied on first load
    //$translateProvider.useLocalStorage();// saves selected language to localStorage
	tmhDynamicLocaleProvider.localeLocationPattern('bower_components/angular-i18n/angular-locale_en-us.js');
	tmhDynamicLocaleProvider.localeLocationPattern('bower_components/angular-i18n/angular-locale_fil-ph.js');
  
  
	$urlRouterProvider.otherwise('/');
  
	 $stateProvider
        .state('/', {
            url: '/',
            templateUrl: 'views/main.html',
			controller: 'MainCtrl',
			controllerAs: 'main'
        });
  })
  .constant('LOCALES', {
    'locales': {
        'en_US': 'English',
		'fil_PH': 'Filipino'
    },
    'preferredLocale': 'fil_PH'
  });