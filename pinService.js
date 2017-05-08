var app = angular.module('comboApp');

    app.factory('pinFactory', function($http) {

    var posts = [];

    return {
       setPosts: function() {
           var promise =
           $http({
            method: 'GET',
            url: 'https://ismaelc-pinterest.p.mashape.com/cellhaze/boards',
            headers: {
                'X-Mashape-Key': 'udLszi6d52mshWMsXgiMvyf7si9Vp1Tg6GPjsndahqJSbycTSY',
                Accept: 'text/plain'
            }
        }).then(function successfulCallback(response) {

            posts = (response.data.body);

            console.log(posts);
            console.log(response);
        }, function(error) {
            console.log(error);
        });
           return promise;
       },

        getPosts: function() {
            return posts;
        }

    }

});
