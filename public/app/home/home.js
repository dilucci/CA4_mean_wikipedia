'use strict';

angular.module('myAppRename.home', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/home', {
            templateUrl: 'app/home/home.html',
            controller: 'homeCtrl'
        });
    }])

    .controller('homeCtrl', function ($scope, $http) {

    });



