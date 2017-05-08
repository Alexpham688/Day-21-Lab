var app = angular.module('comboApp');

app.factory('fizzBuzzService', function(){

return {
   getFizzBuzz: function(input){

       if(input % 15 === 0) {
         return "FizzBuzz"

     } if(input % 5 === 0) {
         return "Buzz"

     } if(input % 3 === 0) {
         return "Fizz"
     }

     return input;

   }
}

});
