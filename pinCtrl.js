var app = angular.module('comboApp');

app.controller('pinCtrl', function($scope, $http, pinFactory) {
    
    pinFactory.setPosts().then(function() {
        
        $scope.posts = pinFactory.getPosts();
        console.log($scope.posts);
        
    });
    
    
    console.log('test');
  
})

