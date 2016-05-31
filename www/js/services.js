

angular.module('apartmentsify.http_service', [])
.service('HttpService', function($http) {
   return {

     getUsers: function() {
       // $http returns a promise, which has a then function, which also returns a promise.
       return $http.get('http://apartmentsify.2rmobile.com/api/properties.json')
         .then(function(response) {
           // In the response, resp.data contains the result. Check the console to see all of the data returned.
           console.log('Get Properties', response);
           return response.data;
        });
     }
   };
  });

angular.module('apartmentsify.user_service', [])
  .factory('User', function() {
    var o = {
      favorites: []
    }

    o.addPropertyToFavorites = function(property) {
      // make sure there's a product to add
      if (!property) return false;

      // add to favorites array
      o.favorites.unshift(property);
    }

    o.removePropertyFromFavorites = function(property, index) {
      // make sure there's a product to remove
      if (!property) return false;

      // remove from favorites array
      o.favorites.splice(index, 1);
    }
    return o;
  });