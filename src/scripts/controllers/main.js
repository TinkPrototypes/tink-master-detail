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
      category: 'Pasta',
      description: 'Trennette pasta al ceppo zitoni mafalde fettucelle scialatelli linguine occhi di lupo fiorentine agnolotti. Ziti quadrefiore zitoni creste di galli orzo fettucelle conchiglie gnocchi penne lisce gnocchi spaghettini pillus calamaretti gemelli pillus.',
      unread: true,
      icons: []
    },
    {
      title: 'Pasta ipsum dolor sit amet',
      type: 'eID',
      category: 'Pasta',
      description: 'Trennette pasta al ceppo zitoni mafalde fettucelle scialatelli linguine occhi di lupo fiorentine agnolotti. Ziti quadrefiore zitoni creste di galli orzo fettucelle conchiglie gnocchi penne lisce gnocchi spaghettini pillus calamaretti gemelli pillus.',
      unread: true,
      icons: []
    },
    {
      title: 'Pasta ipsum dolor sit amet',
      type: 'eID',
      category: 'Pasta',
      description: 'Trennette pasta al ceppo zitoni mafalde fettucelle scialatelli linguine occhi di lupo fiorentine agnolotti. Ziti quadrefiore zitoni creste di galli orzo fettucelle conchiglie gnocchi penne lisce gnocchi spaghettini pillus calamaretti gemelli pillus.',
      unread: true,
      icons: []
    },
    {
      title: 'Pasta ipsum dolor sit amet',
      type: 'eID',
      category: 'Pasta',
      description: 'Trennette pasta al ceppo zitoni mafalde fettucelle scialatelli linguine occhi di lupo fiorentine agnolotti. Ziti quadrefiore zitoni creste di galli orzo fettucelle conchiglie gnocchi penne lisce gnocchi spaghettini pillus calamaretti gemelli pillus.',
      unread: false,
      icons: []
    },
    {
      title: 'Pasta ipsum dolor sit amet',
      type: 'eID',
      category: 'Pasta',
      description: 'Trennette pasta al ceppo zitoni mafalde fettucelle scialatelli linguine occhi di lupo fiorentine agnolotti. Ziti quadrefiore zitoni creste di galli orzo fettucelle conchiglie gnocchi penne lisce gnocchi spaghettini pillus calamaretti gemelli pillus.',
      unread: false,
      icons: []
    },
    {
      title: 'Pasta ipsum dolor sit amet',
      type: 'eID',
      category: 'Pasta',
      description: 'Trennette pasta al ceppo zitoni mafalde fettucelle scialatelli linguine occhi di lupo fiorentine agnolotti. Ziti quadrefiore zitoni creste di galli orzo fettucelle conchiglie gnocchi penne lisce gnocchi spaghettini pillus calamaretti gemelli pillus.',
      unread: false,
      icons: []
    },
    {
      title: 'Pasta ipsum dolor sit amet',
      type: 'eID',
      category: 'Pasta',
      description: 'Trennette pasta al ceppo zitoni mafalde fettucelle scialatelli linguine occhi di lupo fiorentine agnolotti. Ziti quadrefiore zitoni creste di galli orzo fettucelle conchiglie gnocchi penne lisce gnocchi spaghettini pillus calamaretti gemelli pillus.',
      unread: false,
      icons: []
    },
    {
      title: 'Pasta ipsum dolor sit amet',
      type: 'eID',
      category: 'Pasta',
      description: 'Trennette pasta al ceppo zitoni mafalde fettucelle scialatelli linguine occhi di lupo fiorentine agnolotti. Ziti quadrefiore zitoni creste di galli orzo fettucelle conchiglie gnocchi penne lisce gnocchi spaghettini pillus calamaretti gemelli pillus.',
      unread: false,
      icons: []
    },
    {
      title: 'Pasta ipsum dolor sit amet',
      type: 'eID',
      category: 'Pasta',
      description: 'Trennette pasta al ceppo zitoni mafalde fettucelle scialatelli linguine occhi di lupo fiorentine agnolotti. Ziti quadrefiore zitoni creste di galli orzo fettucelle conchiglie gnocchi penne lisce gnocchi spaghettini pillus calamaretti gemelli pillus.',
      unread: false,
      icons: []
    },
    {
      title: 'Pasta ipsum dolor sit amet',
      type: 'eID',
      category: 'Pasta',
      description: 'Trennette pasta al ceppo zitoni mafalde fettucelle scialatelli linguine occhi di lupo fiorentine agnolotti. Ziti quadrefiore zitoni creste di galli orzo fettucelle conchiglie gnocchi penne lisce gnocchi spaghettini pillus calamaretti gemelli pillus.',
      unread: false,
      icons: []
    }
  ]

  $scope.openMenu = function(){
    tinkApi.sideNavToggleToggle.openById('sideNav1');
  };

  $scope.closeMenu = function(){
    tinkApi.sideNavToggleToggle.closeById('sideNav1');
  };

});
