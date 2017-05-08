var app = angular.module('comboApp', ['ngRoute', 'ngAnimate']);


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
