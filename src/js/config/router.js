
'use strict'
angular.module('app').config(['$stateProvider','$urlRouterProvider',function ($stateProvider, $urlRouterProvider) {
    $stateProvider.state('home', {
        url: '/home',
        templateUrl: 'view/home.html',
        controller: 'homeCtrl'
    })
    $urlRouterProvider.otherwise('home');
}]);