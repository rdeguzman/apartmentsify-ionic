angular.module('apartmentsify.services', [])
  .factory('User', function() {
    var o = {
      favorites: []
    }

    o.addProductToFavorites = function(product) {
      // make sure there's a product to add
      if (!product) return false;

      // add to favorites array
      o.favorites.unshift(product);
    }

    o.removeProductFromFavorites = function(product, index) {
      // make sure there's a product to remove
      if (!product) return false;

      // remove from favorites array
      o.favorites.splice(index, 1);
    }
    return o;
  });

angular.module('apartmentsify.services', [])
.service('HttpService', function($http) {
   return {
     getPost: function() {
       // $http returns a promise, which has a then function, which also returns a promise.
       return $http.get('http://jsonplaceholder.typicode.com/posts/1')
         .then(function (response) {
           // In the response, resp.data contains the result. Check the console to see all of the data returned.
           console.log('Get Post', response);
           return response.data;
         });
     },

     getUsers: function() {
       // $http returns a promise, which has a then function, which also returns a promise.
       return $http.get('http://jsonplaceholder.typicode.com/users')
         .then(function(response) {
           // In the response, resp.data contains the result. Check the console to see all of the data returned.
           console.log('Get Users', response);
           return response.data;
        });
     }
   };
  })