
var app = angular.module('comboApp');

app.controller('pinCtrl', function($scope, $http) {
    
    console.log('test');
    
    $http({
//        method: 'GET',
//        url: "https://ismaelc-pinterest.p.mashape.com/cellhaze/boards",
//        headers: {
//            'X-Mashape-Key'': 'LFaT0hiXenmshmpUhHJQ9Xb30xvAp1pvB1qjsnW9uKxVrNLH9J',
//            'Accept': 'application/json'
//        }
//    }).then(function successfulCallback(response) {
//        console.log(response);
//    }, function(error) {
//        console.log(error);
//    });

        method: 'GET',
        url: 'https://yoda.p.mashape.com/yoda?sentence=You+will+learn+how+to+speak+like+me+someday.++Oh+wait.',
        headers: {
            'X-Mashape-Key': 'udLszi6d52mshWMsXgiMvyf7si9Vp1Tg6GPjsndahqJSbycTSY',
            Accept: 'text/plain'
        }
    }).then(function successfulCallback(response) {
        
        console.log(response);
    }, function(error) {
        console.log(error);
    });
  
})

