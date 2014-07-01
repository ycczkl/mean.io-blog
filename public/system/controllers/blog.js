'use strict';
angular.module('mean.system').controller('blogController', ['$scope', '$stateParams', '$location', 'blogService', function ($scope, $stateParams, $location, blogService) {

//    $scope.blogarray = blogService.returnOne();
    blogService.gettheblog()
        .$promise.then(function(data) {
            $scope.blogarray = data;
    });
}]);
