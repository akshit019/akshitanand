'use strict';

/**
 * @ngdoc overview
 * @name akshitanandApp
 * @description
 * # akshitanandApp
 *
 * Main module of the application.
 */
angular
  .module('akshitanandApp', [
    'ngResource',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: '',
        controllerAs: ''
      })
      // .when('/about', {
      //   templateUrl: 'views/about.html',
      //   controller: 'AboutCtrl',
      //   controllerAs: 'about'
      // })
      .otherwise({
        redirectTo: '/'
      });
  });
