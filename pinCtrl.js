var app = angular.module('comboApp');

app.controller('pinCtrl', function($scope, $http, pinFactory) {

    pinFactory.setPosts().then(function() {

        $scope.posts = pinFactory.getPosts();
        console.log($scope.posts);
    });
    console.log('test');
});

app.directive('pintitle', function() {

  return {
    restrict: 'E',
    replace: true,
    template: '<h1> Inspired Pinterest Art</h1>'
  }

});
