'use strict';

angular.module('mean.system').controller('IndexController', ['$scope','$stateParams','$location', 'Global','blogService', function ($scope, $stateParams,$location, Global, blogService) {
    $scope.global = Global;
//    $scope.blogArray = blogService.returnAll();



//    $scope.postBlog = function(){
//        blogService.getPostBlog($scope.blogPost.title, $scope.blogPost.author, $scope.blogPost.body);
//    };

    $scope.passAuthorId = function(author_id) {
        console.log(author_id);
        $location.path('/bloglist/' + author_id);
    };

    $scope.passTittleToBlog = function(author, tittle) {
        console.log(author, tittle);
        $location.path('/blog/' + author +'/' + tittle);
    };

    blogService.returnAll().allblogs()
        .$promise.then(function(data) {
            console.log(data);
            $scope.blogArray = data.theData;
        });
    $scope.postBlog = function() {
        var insertData = {
            'title': $scope.blogPost.title,
            'author': $scope.blogPost.author,
            'body': $scope.blogPost.body,
            'date': Date()
        };
        blogService.getPostBlog($scope.blogPost.title, $scope.blogPost.author, $scope.blogPost.body, insertData.date)
            .success(function(data){
                console.log(data);
                $scope.blogArray.push(insertData);
                console.log($scope.blogArray);
            });
    };

}]);