'use strict';

angular.module('myAppRename.categories', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/categories', {
            templateUrl: 'app/Categories/categories.html',
            controller: 'headerCtrl'
        });
    }])
    .run(['$anchorScroll', function($anchorScroll) {
        $anchorScroll.yOffset = 500;   // always scroll by 50 extra pixels
    }])
    .controller('headerCtrl', ['$anchorScroll', '$location', '$scope', '$http',
        function ($anchorScroll, $location, $scope, $http) {
          /*  $scope.title = false;*/
            $http({
                method: 'GET',
                url: 'api/wikicategories'
            }).
                success(function (data, status, headers, config) {
                    $scope.categories = data;
                }).
                error(function (data, status, headers, config) {
                    $scope.error = data;
                });

                $scope.getWikisWithCategory = function(category){
                $http({
                    method: 'GET',
                    url: 'api/wikicategories/' + category
                }).
                    success(function (data, status, headers, config) {
                        $scope.wikis = data;
                        /*this.title = true;*/
                    }).
                    error(function (data, status, headers, config) {
                        $scope.error = data;
                    });
            };

            $scope.gotoAnchor = function(x) {
                console.log("i gotoAnchor: " + x)
                var newHash = 'anchor' + x;
                var result;

                for(var i = 0; i < $scope.categories.length; i++) {
                    if($scope.categories[i] && $scope.categories[i].charAt(0).toLowerCase() === x) {
                        //$scope.categories[i].anchor = x;
                        console.log("1st" + $scope.categories[i]);
                        $location.hash('anchor' + $scope.categories[i]);
                        result = 'anchor' + $scope.categories[i];
                        break;
                    }
                }
                console.log(result);
                $anchorScroll();
            };
        }
    ]);