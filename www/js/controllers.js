angular.module('apartmentsify.controllers', ['ionic', 'apartmentsify.http_service', 'apartmentsify.user_service'])

  /*
  Controller for the discover page
  */
  .controller('DiscoverCtrl', function($scope, HttpService, $ionicLoading, User) {
    $ionicLoading.show({
      template: 'Loading...'
    });

    HttpService.getUsers().then(function(response) {
      $scope.properties = response.properties;
      $scope.currentProperty = angular.copy($scope.properties[0]);
      $ionicLoading.hide();
    });

    $scope.skip = function() {
      var randomIndex = Math.round(Math.random() * ($scope.properties.length - 1));
      $scope.currentProperty = angular.copy($scope.properties[randomIndex]);
    }

    $scope.favorite = function() {
      User.addPropertyToFavorites($scope.currentProperty);
    }
  })

  /*
  Controller for the favorites page
  */
  .controller('FavoritesCtrl', function($scope, User) {
    // get the list of our favorites from our user service
    $scope.favorites = User.favorites;

    $scope.removeProperty = function(property, index) {
      User.removePropertyFromFavorites(property, index);
    }
  })


  /*
  Controller for our splash page
  */
  .controller('SplashCtrl', function($scope) {})

  /*
  Controller for our tabs
  */
  .controller('TabsCtrl', function($scope) {})
