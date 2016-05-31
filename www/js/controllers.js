angular.module('apartmentsify.controllers', ['ionic', 'apartmentsify.http_service', 'apartmentsify.user_service'])

  /*
  Controller for the discover page
  */
  .controller('DiscoverCtrl', function($scope, HttpService, User, $ionicLoading, $timeout) {
    $ionicLoading.show({
      template: 'Loading...'
    });

    HttpService.getUsers().then(function(response) {
      $scope.properties = response.properties;
      $scope.currentProperty = angular.copy($scope.properties[0]);
      $ionicLoading.hide();
    });

    $scope.favorite = function(bool) {
      // set the variable for the correct animation sequence
      $scope.currentProperty.rated = bool;
      $scope.currentProperty.hide = true;

      if(bool) User.addPropertyToFavorites($scope.currentProperty);

      // $timeout to allow animation to complete before changing to the next product
      $timeout(function() {
        var randomIndex = Math.round(Math.random() * ($scope.properties.length - 1));
        $scope.currentProperty = angular.copy($scope.properties[randomIndex]);

      }, 250);
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
