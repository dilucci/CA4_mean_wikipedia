'use strict';

angular.module('myAppRename.view3', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view3', {
    templateUrl: 'app/view3/view3.html',
    controller: 'View3Ctrl'
  });
}])

.controller('View3Ctrl', function ($scope, $http) {
    $scope.searchText = "";
    $scope.abstract = false;
    $scope.hoverIn = function(){
      this.abstract = true;
     };

    $scope.hoverOut = function(){
      this.abstract = false;
     };


    $scope.search = function(){
      $http({
        method: 'GET',
        url: 'api/wiki/' + $scope.searchText
      }).
          success(function (data, status, headers, config) {
            $scope.wikis = data;
          }).
          error(function (data, status, headers, config) {
            $scope.error = data;
          });
    };

    $http({
      method: 'GET',
      url: 'api/wiki'
    }).
      success(function (data, status, headers, config) {
        $scope.wikis = data;
      }).
      error(function (data, status, headers, config) {
        $scope.error = data;
      });
});



