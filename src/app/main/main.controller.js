// (function() {
//   'use strict';
//
//   angular
//     .module('schoolwebapp')
//     .controller('MainController', MainController);
//
//   /** @ngInject */
//   function MainController($timeout, webDevTec, toastr) {
//     var vm = this;
//
//     vm.awesomeThings = [];
//     vm.classAnimation = '';
//     vm.creationDate = 1450281156557;
//     vm.showToastr = showToastr;
//
//     activate();
//
//     function activate() {
//       getWebDevTec();
//       $timeout(function() {
//         vm.classAnimation = 'rubberBand';
//       }, 4000);
//     }
//
//     function showToastr() {
//       toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
//       vm.classAnimation = '';
//     }
//
//     function getWebDevTec() {
//       vm.awesomeThings = webDevTec.getTec();
//
//       angular.forEach(vm.awesomeThings, function(awesomeThing) {
//         awesomeThing.rank = Math.random();
//       });
//     }
//   }
// })();

//this service is store the username and password for the next page
myApp.service('credentials',function(){
    this.username = "";
    this.password = "";
})
myApp.controller('MainController',['$state','credentials',function($state,credentials){
          var vm = this;
          // vm.username = credentials.username;
          // vm.password = credentials.password;

          vm.login = function(){

              console.log(vm.username);
              console.log(vm.password);
              if(vm.username && vm.password === "guru")
              {
                          $state.go('mainscreen');

              }
              else{
                alert('Login Failed');
                vm.username = "";
                vm.password="";
              }
          }

}]);
