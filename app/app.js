var redirectURLApp = angular.module('redirectURLApp', ['ngRoute', 'ngCookies']);

redirectURLApp.controller('RedirectURLController', ['$cookies', '$scope', function($cookies, $scope) {
    //this.$cookies = $cookies;
    $cookies.newCookie = "sample test";
   console.log($cookies.newCookie);
}]);
