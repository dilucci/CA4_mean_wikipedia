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

            //$scope.gotoAnchor = function(x) {
            //        $location.hash('anchorb');
            //        $anchorScroll();
            //};

            $scope.gotoAnchor = function(x) {
                console.log("i gotoAnchor: " + x)
                var newHash = 'anchor' + x;

                for(var i = 0; i < $scope.categories.length; i++) {
                    if($scope.categories[i] && $scope.categories[i].charAt(0) === x) {
                        $location.hash('anchor' + $scope.categories[i])
                        break;
                    }

                    //if($scope.categories[i].charAt(0).valueOf() - $scope.categories[i+1].charAt(0).valueOf() === 1)
                }
                $anchorScroll();


                //$scope.categories.forEach(function(category) {
                //
                //})

                //if ($location.hash() !== newHash) {
                //    // set the $location.hash to `newHash` and
                //    // $anchorScroll will automatically scroll to it
                //    $location.hash('anchor' + x);
                //} else {
                //    // call $anchorScroll() explicitly,
                //    // since $location.hash hasn't changed
                //    $anchorScroll();
                //}
            };

            //$scope.anchorPlacement = function(category) {
            //
            //}

        }
    ]);