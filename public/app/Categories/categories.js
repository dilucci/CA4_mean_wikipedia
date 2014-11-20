'use strict';

angular.module('myAppRename.categories', ['ngRoute'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/categories', {
            templateUrl: 'app/Categories/categories.html',
            controller: 'headerCtrl'
        });
    }])
    .run(['$anchorScroll', function($anchorScroll) {
        $anchorScroll.yOffset = 50;   // always scroll by 50 extra pixels
    }])
    .controller('headerCtrl', ['$anchorScroll', '$location', '$scope', '$http',
        function ($anchorScroll, $location, $scope, $http) {
            $scope.gotoAnchor = function(x) {
                var newHash = 'anchor' + x;
                if ($location.hash() !== newHash) {
                    // set the $location.hash to `newHash` and
                    // $anchorScroll will automatically scroll to it
                    $location.hash('anchor' + x);
                } else {
                    // call $anchorScroll() explicitly,
                    // since $location.hash hasn't changed
                    $anchorScroll();
                }
            };

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
        }
    ]);