'use strict';
angular.module('meal', [
  'ionic',
  'ngCordova',
  'ui.router',
  // TODO: load other modules selected during generation
])
    .config(function ($stateProvider, $urlRouterProvider) {

        // ROUTING with ui.router

        $stateProvider
        // this state is placed in the <ion-nav-view> in the index.html
            .state('meal', {
                url: '/meal',
                abstract: true,
                templateUrl: 'common/views/side-menu.html',
                controller: 'MenuCtrl as menu'
            })
            .state('meal.schedule', {
                url: '/schedule',
                views: {
                    'pageContent': {
                        templateUrl: 'meal/views/schedule.html',
                        controller: 'ScheduleMealCTRL as ctrl'
                    }
                }
            });
    });