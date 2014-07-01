'use strict';
angular.module('mean.system').factory('blogService', function ($http, $resource) {
        var service = {
            returnAll: function () {
//                var blogsData = [
//                    {
//                        'title': '1',
//                        'email': '1@1.com',
//                        'author': '1',
//                        // 'body': '1',
//                        'date': '1'
//                    },
//                    {
//                        'title': '2',
//                        'email': '2@1.com',
//                        'author': '2',
//                        //   'body': '2',
//                        'date': '2'
//                    },
//                    {
//                        'title': '3',
//                        'email': '3@1.com',
//                        'author': '3',
//                        //   'body': '3',
//                        'date': '3'
//                    },
//                    {
//                        'title': '4',
//                        'email': '4@1.com',
//                        'author': '4',
//                        //   'body': '4',
//                        'date': '4'
//                    }
//                ];
//                return blogsData;
                return $resource('localhost:3000', {}, {
                    'allblogs': {
                        method: 'GET',
                        url: '/blog'
                    },
                    'gettheblog': {
                        method: 'GET',
                        url: '/blog/:author_id/:blog_id'
                    },
                    'deletetheblog': {
                        method: 'DELETE',
                        url: '/blog/:author_id/:blog_id'
                    }
//                    'bloglist': {
//                        method: 'GET',
//                        url: '/bloglist/:author_id'
//                    }
//                    'blogpost': {
//                        method: 'POST',
//                        url: '/blog',
//
//                    }
                });
            },
            returnOne: function () {
                var blogData = {
                    'title': '1',
                    'email': '1@1.com',
                    'author': '1',
                    'body': '1',
                    'date': '1'
                };
                return blogData;
            },

            returnAuthorOne: function () {
                var authorBlogs = {
                    'author': '1',
                    'titles': ['1', '2', '3']
                };
                return authorBlogs;
            },

            getPostBlog: function (title, author, body, date) {
                var postJson = {
                    'title': title,
                    'author': author,
                    'body': body,
                    'date': date
                };
                console.log(postJson);
                return $http.post('/blog', postJson);
            },

            getbloglist: function(author_id) {
                return $http({
                    url:'/bloglist/:author_id',
                    method: 'GET',
                    params: {author_id: author_id}
                });
            }
        };
        return service;
    }
);

//'use strict';
//
//angular.module('mean.system').factory('blogService', ['$q','$http','$resource', function($q, $http, $resource) {
//    return $resource('localhost:3000', {}, {
//        'allblogs': {
//            method: 'GET',
//            url: '/blog'
//            //isArray: true
//        }
//    });
//}]);
