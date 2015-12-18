// (function() {
//   'use strict';
//
//   angular
//     .module('schoolwebapp')
//     .config(routerConfig);
//
//   /** @ngInject */
//   function routerConfig($stateProvider, $urlRouterProvider) {
//     $stateProvider
//       .state('home', {
//         url: '/',
//         templateUrl: 'app/main/main.html',
//         controller: 'MainController',
//         controllerAs: 'main'
//       });
//
//     $urlRouterProvider.otherwise('/');
//   }
//
// })();
myApp.config(function($stateProvider,$urlRouterProvider){
       $urlRouterProvider.otherwise('/');
       $stateProvider
       .state('home',{
         url:'/',
         templateUrl:'app/main/main.html',
         controller:'MainController',
         controllerAs:'main'
       })
       .state('mainscreen',{
         url:'/mainscreen',
         templateUrl:'app/components/mainscreen/mainscreen.html',
         controller:'mainscreencontroller',
         controllerAs:'mainscreen'
       });

});
