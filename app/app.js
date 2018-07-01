var redirectURLApp = angular.module('redirectURLApp', ['ngRoute','ngCookies']);
redirectURLApp.config(function($routeProvider) {
    $routeProvider
    .when("/billing",{
        templateUrl: "./templates/billing.html"
    })
    .when("/services", {
        templateUrl: "./templates/services.html"
    })
    .when("/profile", {
        templateUrl: "./templates/profile.html"
    })
    .when("/interactions", {
        templateUrl: "./templates/interactions.html"
    })
    .when("/actions-offers", {
        templateUrl: "./templates/actions-offers.html"
    })
    .otherwise({
        template: "{{template}}",
        controller: "NavController"
    });

});

redirectURLApp.controller('NavigationController', function($scope, $route, $cookies, $location) {  
    $scope.activeTab = '';
    console.log("Angular 1 >> " + $location.search().name + " >> " + $location.search().data);
    if(window.location.href.indexOf('billing')>0) {
        $scope.activeTab = 'billing';
    }
    else if(window.location.href.indexOf('services')>0) {
        $scope.activeTab = 'services';
    }
    else if(window.location.href.indexOf('profile')>0) {
        $scope.activeTab = 'profile';
    }
    else if(window.location.href.indexOf('interactions')>0) {
        $scope.activeTab = 'interactions';
    }
    else if(window.location.href.indexOf('actions-offers')>0) {
        $scope.activeTab = 'actions-offers';
    }
    $cookies.ban = "12345678912";
    $cookies.legacy = "true";
});

redirectURLApp.controller('NavController', function($scope, $route, $cookies, $location) {
    $scope.template = "";
    if($location.path() === "/overview"){
        window.location.href = "http://localhost:4200/#/overview?" + ($cookies.ban && "ban=" + $cookies.ban) + ($cookies.legacy && "&legacy=" + (!$cookies.legacy));
    } else {
        $scope.template = "Invalid route";
    }

});

    