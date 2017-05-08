var app = angular.module('comboApp', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider.when('/pin', {
        templateUrl: "pinView.html",
        controller: "pinCtrl"
    });
    $routeProvider.when('/lab', {
        templateUrl: "labView.html",
        controller: "labCtrl"
    });   
});