var redirectURLApp = angular.module('redirectURLApp', []);

app.controller('RedirectURLController', function($scope, $window) {
    $scope.name = 'Anil';
    $scope.RedirectToURL = function() {
    var host = $window.location.host;
    var landingUrl = "http://www.google.com";
    alert(landingUrl);
    $window.location.href = landingUrl;
    };
});