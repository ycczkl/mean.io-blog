'use strict';
angular.module('mean.system').controller('AuthorController', ['$scope', '$stateParams', 'blogService', function ($scope, $stateParams , blogService) {
    $scope.titles = [];
//    $scope.Authorarray = blogService.returnAuthorOne();
    //console.log($stateParams);
    blogService.getbloglist($stateParams.authorId)
        .success(function(data){
            console.log(data.titleArr);
            $scope.listauthor = data.titleArr[0].author;
            for(var i = 0; i < data.titleArr.length; i++){
                $scope.titles.push(data.titleArr[i].title);
            }
            console.log($scope.titles);
            //$scope.Authorarray.push(data);
            //console.log($scope.blogArray);
        });

}]);

