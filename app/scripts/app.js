(function() {

  'use strict';

  angular.module('LoadingBar', [
    'chieffancypants.loadingBar',
    'ngAnimate'
  ]).
  config(function(cfpLoadingBarProvider) {
    cfpLoadingBarProvider.includeSpinner = false;
  }).
  controller('LoadingBarCtrl', function ($scope, $http, $timeout, cfpLoadingBar) {
    $scope.start = function() {
      cfpLoadingBar.start();
    };

    $scope.complete = function () {
      cfpLoadingBar.complete();
    };

    // fake the initial load so first time users can see it right away:
    $scope.start();
    $scope.fakeIntro = true;

    $timeout(function() {
      $scope.complete();
      $scope.fakeIntro = false;
    }, 300);
  });

})();
