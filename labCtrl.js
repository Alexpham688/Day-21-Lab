var app = angular.module('comboApp');

app.controller('labCtrl', function($scope, fizzBuzzService){

  $scope.doFizzBuzz = function(input){

    $scope.result = fizzBuzzService.getFizzBuzz(input);

    console.log($scope.result);

  };


  app.directive('labView', function() {

    return {
      restrict: 'E',
      replace: true,
      template: '<p> {{ result }} </p>'
    }
  });
  });
