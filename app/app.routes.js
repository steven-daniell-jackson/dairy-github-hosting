var app = angular.module('appRoutes',['ngRoute']);

app.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider
        .when('/', {
            redirectTo: '/home',
            templateUrl: 'app/views/home.html',
        })
        .when('/home', {
            templateUrl: 'app/views/home.html',
            controller: 'MainController'
        })
        .when('/latest_work', {
            templateUrl: 'app/views/latest_work.html',
            controller: 'LatestWorkCtrl'
        })
        .when('/overview', {
            templateUrl: 'app/views/overview.html',
            controller: ''
        })
        .when('/archive', {
            templateUrl: 'app/views/archive.html',
            controller: 'ArchiveCtrl'
        })
        .when('/about-me', {
            templateUrl: 'app/views/about.html',
            controller: ''
        })
        .when('/contact', {
            templateUrl: 'app/views/contact.html',
            controller: ''
        })
        .when('/login', {
            templateUrl: 'app/views/login.html',
            controller: 'LoginCtrl'
        })
        .when('/new-entry', {
            templateUrl: 'app/views/add-new-task.html',
            controller: 'addNewTaskCtrl'
        })
        .when('/archive/2016', {
            templateUrl: 'app/views/archive2016.html',
            controller: 'ArchiveCtrl'
        })
        .when('/archive/2016/:monthFilter', {
            templateUrl: 'app/views/archiveListing.html',
            controller: 'ArchiveCtrl'
        })
        .when('/archive/2015', {
            templateUrl: 'app/views/archive2015.html',
            controller: 'ArchiveCtrl'
        })
        .when('/archive/2015/:monthFilter', {
            templateUrl: 'app/views/archiveListing.html',
            controller: 'ArchiveCtrl'
        })
        .when('/search', {
            templateUrl: 'app/views/search.html',
            controller: 'SearchCtrl'
        })
        .otherwise({
            redirectTo: '/404',
            templateUrl: 'app/views/404.html',
            controller: ''
        });
    }]);