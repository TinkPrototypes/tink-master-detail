'use strict';

/**
 * @ngdoc overview
 * @name tinkApp
 * @description
 * # tinkApp
 *
 * Main module of the application.
 */
 angular
 .module('tinkApp', [
   'ngAnimate',
   'ngCookies',
   'ngResource',
   'ngRoute',
   'ngMessages',
   'ngSanitize',
   'ngTouch',
   'tink.tinkApi',
   'tink.navigation'
   ])
 .config(function ($routeProvider) { /*, $locationProvider */
  $routeProvider
  .when('/', {
    templateUrl: 'views/main.html'
  })
  .when('/:cat', {
    templateUrl: 'views/main.html'
  })
  .otherwise({
    redirectTo: '/'
  });

  // $locationProvider.html5Mode({
  //   enabled: true,
  //   requireBase: false
  // });
  // $locationProvider.hashPrefix('!');
});

// .directive( 'emHeightTarget', function() {
//     return {
//         link: function( scope, elem, attrs ) {

//             scope.$watch( '__height', function( newHeight, oldHeight ) {
//                 elem.attr( 'style', 'margin-top: ' + (58 + newHeight) + 'px' );
//             } );
//         }
//     }
// } )

// /*
//  * Checks every $digest for height changes
//  */
// .directive( 'emHeightSource', function() {

//     return {
//         link: function( scope, elem, attrs ) {

//             scope.$watch( function() {
//                 scope.__height = elem.height();
//             } );
//         }
//     }

// } );
