'use strict';
angular.module('mean.system').controller('blogController', ['$scope', '$stateParams', '$location', 'blogService', function ($scope, $stateParams, $location, blogService) {

//    $scope.blogarray = blogService.returnOne();
    $scope.titles = [];
//    $scope.Authorarray = blogService.returnAuthorOne();
    console.log($stateParams);
    blogService.getblog($stateParams.author_Id, $stateParams.blog_id)
        .success(function(data){
            console.log(data.blogArr[0]);
            $scope.blogarray = data.blogArr[0];
            //$scope.Authorarray.push(data);
            //console.log($scope.blogarray);
        });

}]);
