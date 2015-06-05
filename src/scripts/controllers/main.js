'use strict';

/**
 * @ngdoc function
 * @name tinkApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tinkApp
 */
 angular.module('tinkApp')
 .controller('MainCtrl', function ($scope, $rootScope, $location, $anchorScroll, tinkApi) {


  // Show or hide sidenav
  $scope.$on('$locationChangeStart', function() {
    // if($location.path() === '/') {
    //   // Close the sidenav
    //   if($scope.sidenavToggle.visible === true) {
    //     tinkApi.sideNavToggleToggle.closeById('sideNav1');
    //   }
    //   // Hide the sidenav toggle
    //   $scope.sidenavToggle.visible = false;
    // } else {
    //   $scope.sidenavToggle.visible = true;
    // }

  });

  // Scope variables
  // $scope.sidenavToggle = {
  //   visible: false
  // };

  // Function that replaces anchor scroll
  $scope.scrollTo = function scrollTo(id) {
    $location.hash(id);
    $anchorScroll();
  };

  // $scope.openMenu = function(){
  //   if($location.$$path !== '/') {
  //     tinkApi.sideNavToggleToggle.openById('sideNav1');
  //   }
  // };

  // $scope.closeMenu = function(){
  //   if($location.$$path !== '/') {
  //     tinkApi.sideNavToggleToggle.closeById('sideNav1');
  //   }
  // };

});
