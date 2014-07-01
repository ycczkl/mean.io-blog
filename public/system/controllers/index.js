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

    $scope.passTittleToBlog = function(tittle) {
        console.log(tittle);
        $location.path('/blog/' + tittle +'/' + 3);
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