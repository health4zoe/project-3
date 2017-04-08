const angular = require('angular');
require('angular-ui-router');

angular
  .module('project3', ['ui.router'])
  .config(uiRouterSetup);

uiRouterSetup.$inject = ['$stateProvider', '$urlRouterProvider'];

function uiRouterSetup($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('admin', {
      url: '/admin',
      template: '<admin></admin>'
    });
  $urlRouterProvider.otherwise('/');
}
