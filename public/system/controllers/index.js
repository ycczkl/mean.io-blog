'use strict';
/* IndexController for index.html page
 * 1.Get all blog data from back end
 * 2.Post blog and send the data to back end
 */
angular.module('mean.system').controller('IndexController', ['$scope', '$stateParams', '$location', 'Global', 'NewBlogService', function ($scope, $stateParams, $location, Global, NewBlogService) {
    $scope.global = Global;

    //When this function called then directed to the bloglist page
    $scope.passAuthorId = function (author_id) {
        $location.path('/bloglist/' + author_id);
    };

    //When this function called then directed to the blog page
    $scope.passTittleToBlog = function (author, tittle) {
        $location.path('/blog/' + author + '/' + tittle);
    };

    /* 1.NewBlogService used $resource which defined in service/blog.js
    *  2.Use get method to get the all blog data*/
    NewBlogService.get(function (data) {
        $scope.blogArray = data.theData;
    });

    /*Post the blog*/
    $scope.postBlog = function () {
        var insertData = {
            'title': $scope.blogPost.title,
            'author': $scope.blogPost.author,
            'body': $scope.blogPost.body,
            'date': Date()
        };
        var postService = new NewBlogService(insertData);
        console.log(postService);
        postService.$save(function (res) {
            $scope.blogArray.push(insertData);

            $scope.blogPost.title = '';
            $scope.blogPost.author = '';
            $scope.blogPost.body = '';
        });
    };

}]);