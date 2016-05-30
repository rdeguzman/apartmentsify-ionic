angular.module('apartmentsify.controllers', ['ionic', 'apartmentsify.services'])

  /*
  Controller for the discover page
  */
  .controller('DiscoverCtrl', function($scope, HttpService, $ionicLoading) {
    HttpService.getPost().then(function(response) {
      $scope.post = response;
    });

    $ionicLoading.show({
      template: 'Loading...'
    });

    HttpService.getUsers().then(function(response) {
      $scope.users = response;
      $ionicLoading.hide();
    });
  })

  /*
  Controller for the favorites page
  */
  .controller('FavoritesCtrl', function($scope) {
  })


  /*
  Controller for our splash page
  */
  .controller('SplashCtrl', function($scope) {})

  /*
  Controller for our tabs
  */
  .controller('TabsCtrl', function($scope) {})
