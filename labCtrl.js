var app = angular.module('comboApp');

app.controller('labCtrl', function($scope, fizzBuzzService){

  $scope.doFizzBuzz = function(input){

    $scope.result = fizzBuzzService.getFizzBuzz(input);
    console.log($scope.result);

  };

});
