'use strict';
/*This controller is bind to blog.html
* use get method to get the blog data*/
angular.module('mean.system').controller('blogController', ['$scope', '$stateParams', '$location', 'NewBlogService', function ($scope, $stateParams, $location, NewBlogService) {
    $scope.titles = [];
    //console.log($stateParams);
    NewBlogService.get({author_id: $stateParams.author_Id,blog_id: $stateParams.blog_id}, function(data){
        //console.log(data.blogArr[0]);
        $scope.blogarray = data.blogArr[0];
    });

}]);
