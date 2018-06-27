// 'use strict';

// // Declare app level module which depends on views, and components
// angular.module('myApp', [
//   'ngRoute',
//   'myApp.view1',
//   'myApp.view2',
//   'myApp.version'
// ]).
// config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
//   $locationProvider.hashPrefix('!');

//   $routeProvider.otherwise({redirectTo: '/view1'});
// }]);

var redirectURLApp = angular.module('redirectURLApp', ['ngRoute','ngCookies']);
redirectURLApp.config(function($routeProvider) {
    $routeProvider
    .when("/billing",{
        template: "Welcome to Billing Tab"
    })
    .when("/services", {
        template: "Welcome to Services Tab",
    })
    .otherwise({
        template: "{{template}}",
        controller: "NavController"
    });

});

redirectURLApp.controller('NavigationController', function($scope, $route) {  
    $scope.activeTab = '';
    if(window.location.href.indexOf('billing')>0) {
        $scope.activeTab = 'billing';
    }
    else if(window.location.href.indexOf('services')>0) {
        $scope.activeTab = 'services';
    }
});

redirectURLApp.controller('NavController', function($scope, $route, $cookies, $location) {
    console.log("yes");
    $scope.template = "";
    if($location.path() === "/overview"){
    window.location.href = "http://localhost:4200/overview";
    } else {
        $scope.template = "Invalid route";
    }

});

    