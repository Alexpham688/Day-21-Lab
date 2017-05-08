var app = angular.module('comboApp');

app.controller('pinCtrl');

$http({method: 'GET',
       url: "https://ismaelc-pinterest.p.mashape.com/cellhaze/boards", 
       headers: {
    'Authorization': 'Basic X-Mashape-Key: LFaT0hiXenmshmpUhHJQ9Xb30xvAp1pvB1qjsnW9uKxVrNLH9J',
    Accept: 'application/json'   
}).then(function successfullCallback(response) {
           console.log(response);
       });
