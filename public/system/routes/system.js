'use strict';

//Setting up route
angular.module('mean.system').config(['$stateProvider', '$urlRouterProvider',
        function($stateProvider, $urlRouterProvider) {
            // For unmatched routes:
            $urlRouterProvider.otherwise('/');

            // states for my app
            $stateProvider
                .state('home', {
                    url: '/',
                    templateUrl: '/system/views/index.html'
                })
//               .state('auth', {
//                    url: '/authorblog/1',
//                  templateUrl: '/system/views/index.html'
//               })
                .state('theBlog', {
                    url: '/blog/:author_Id/:blog_id',
                    templateUrl: '/system/views/blog.html'
                })
                .state('blogTitles', {
                    url: '/bloglist/:authorId',
                    templateUrl: '/system/views/authorsblog.html'

                });
        }
    ])
    .config(['$locationProvider',
        function($locationProvider) {
            $locationProvider.hashPrefix('!');
        }
    ]);
