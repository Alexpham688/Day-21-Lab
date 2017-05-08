
var app = angular.module('comboApp');

app.controller('pinCtrl', function($scope, $http) {
    

    $http({
        method: 'GET',
        url: "https://ismaelc-pinterest.p.mashape.com/cellhaze/boards",
        headers: {
            'Basic X-Mashape-Key': 'LFaT0hiXenmshmpUhHJQ9Xb30xvAp1pvB1qjsnW9uKxVrNLH9J',
            'Accept': 'application/json'
        }
    }).then(function successfulCallback(response) {
        console.log(response);
    }, function(error) {
        console.log(error);
    });
  


})