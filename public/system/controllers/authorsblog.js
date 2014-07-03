'use strict';
/*This controlor is use in bloglist page
* use fet method to get all blogs of one author
* use $stateParams to pass the params*/
angular.module('mean.system').controller('AuthorController', ['$scope', '$stateParams', 'NewBlogService', function ($scope, $stateParams, NewBlogService) {
    $scope.titles = [];
    NewBlogService.get({author_id : $stateParams.authorId}, function (data) {
        //console.log(data);
        $scope.listauthor = data.titleArr[0].author;
        for (var i = 0; i < data.titleArr.length; i++) {
            $scope.titles.push(data.titleArr[i].title);
        }
        console.log($scope.titles);
    });

}]);

