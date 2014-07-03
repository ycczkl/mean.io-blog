'use strict';
/*This is service of the blog app
* The powerful part of $resource is the design of RESTful API*/
angular.module('mean.system').factory('NewBlogService', ['$resource',
    function($resource) {
        return $resource('/blog/:author_id/:blog_id');
    }
]);

