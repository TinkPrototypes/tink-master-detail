'use strict';

/**
 * @ngdoc function
 * @name tinkApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tinkApp
 */
 angular.module('tinkApp')
 .controller('MainCtrl', function ($scope, $rootScope, tinkApi) {

  $scope.messages = [
    {
      title: 'Pasta ipsum dolor sit amet',
      type: 'eID',
      id:1,
      category: 'Pasta',
      description: 'Trennette pasta al ceppo zitoni mafalde fettucelle scialatelli linguine occhi di lupo fiorentine agnolotti. Ziti quadrefiore zitoni creste di galli orzo fettucelle conchiglie gnocchi penne lisce gnocchi spaghettini pillus calamaretti gemelli pillus.',
      unread: true,
      icons: []
    },
    {
      title: 'Pasta ipsum dolor sit amet',
      type: 'eID',
      id:2,
      category: 'Pasta',
      description: 'Trennette pasta al ceppo zitoni mafalde fettucelle scialatelli linguine occhi di lupo fiorentine agnolotti. Ziti quadrefiore zitoni creste di galli orzo fettucelle conchiglie gnocchi penne lisce gnocchi spaghettini pillus calamaretti gemelli pillus.',
      unread: true,
      icons: []
    },
    {
      title: 'Pasta ipsum dolor sit amet',
      type: 'eID',
      id:3,
      category: 'Pasta',
      description: 'Trennette pasta al ceppo zitoni mafalde fettucelle scialatelli linguine occhi di lupo fiorentine agnolotti. Ziti quadrefiore zitoni creste di galli orzo fettucelle conchiglie gnocchi penne lisce gnocchi spaghettini pillus calamaretti gemelli pillus.',
      unread: true,
      icons: []
    },
    {
      title: 'Pasta ipsum dolor sit amet',
      type: 'eID',
      id:4,
      category: 'Pasta',
      description: 'Trennette pasta al ceppo zitoni mafalde fettucelle scialatelli linguine occhi di lupo fiorentine agnolotti. Ziti quadrefiore zitoni creste di galli orzo fettucelle conchiglie gnocchi penne lisce gnocchi spaghettini pillus calamaretti gemelli pillus.',
      unread: false,
      icons: []
    },
    {
      title: 'Pasta ipsum dolor sit amet',
      type: 'eID',
      id:5,
      category: 'Pasta',
      description: 'Trennette pasta al ceppo zitoni mafalde fettucelle scialatelli linguine occhi di lupo fiorentine agnolotti. Ziti quadrefiore zitoni creste di galli orzo fettucelle conchiglie gnocchi penne lisce gnocchi spaghettini pillus calamaretti gemelli pillus.',
      unread: false,
      icons: []
    },
    {
      title: 'Pasta ipsum dolor sit amet',
      type: 'eID',
      id:6,
      category: 'Pasta',
      description: 'Trennette pasta al ceppo zitoni mafalde fettucelle scialatelli linguine occhi di lupo fiorentine agnolotti. Ziti quadrefiore zitoni creste di galli orzo fettucelle conchiglie gnocchi penne lisce gnocchi spaghettini pillus calamaretti gemelli pillus.',
      unread: false,
      icons: []
    },
    {
      title: 'Pasta ipsum dolor sit amet',
      type: 'eID',
      id:7,
      category: 'Pasta',
      description: 'Trennette pasta al ceppo zitoni mafalde fettucelle scialatelli linguine occhi di lupo fiorentine agnolotti. Ziti quadrefiore zitoni creste di galli orzo fettucelle conchiglie gnocchi penne lisce gnocchi spaghettini pillus calamaretti gemelli pillus.',
      unread: false,
      icons: []
    },
    {
      title: 'Pasta ipsum dolor sit amet',
      type: 'eID',
      id:8,
      category: 'Pasta',
      description: 'Trennette pasta al ceppo zitoni mafalde fettucelle scialatelli linguine occhi di lupo fiorentine agnolotti. Ziti quadrefiore zitoni creste di galli orzo fettucelle conchiglie gnocchi penne lisce gnocchi spaghettini pillus calamaretti gemelli pillus.',
      unread: false,
      icons: []
    },
    {
      title: 'Pasta ipsum dolor sit amet',
      type: 'eID',
      id:9,
      category: 'Pasta',
      description: 'Trennette pasta al ceppo zitoni mafalde fettucelle scialatelli linguine occhi di lupo fiorentine agnolotti. Ziti quadrefiore zitoni creste di galli orzo fettucelle conchiglie gnocchi penne lisce gnocchi spaghettini pillus calamaretti gemelli pillus.',
      unread: false,
      icons: []
    },
    {
      title: 'Pasta ipsum dolor sit amet',
      type: 'eID',
      id:10,
      category: 'Pasta',
      description: 'Trennette pasta al ceppo zitoni mafalde fettucelle scialatelli linguine occhi di lupo fiorentine agnolotti. Ziti quadrefiore zitoni creste di galli orzo fettucelle conchiglie gnocchi penne lisce gnocchi spaghettini pillus calamaretti gemelli pillus.',
      unread: false,
      icons: []
    }
  ]

  $scope.openMenu = function(){
    tinkApi.sideNavToggleToggle.openById('sideNavLeft');
  };

  $scope.closeMenu = function(){
    tinkApi.sideNavToggleToggle.closeById('sideNavLeft');
  };

});
