var app = angular.module('comboApp', ['ngRoute']);


app.controller('pinCtrl', function($scope, $http) {
});

app.controller('labCtrl', function($scope){
    console.log('working');
});

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
