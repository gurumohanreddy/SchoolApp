// myApp.controller('mainscreencontroller',['webDevTec',function(webDevTec){
//             this.tingu = [];
//             getthings();
//             function getthings(){
//               this.tingu = webDevTec.getTec();
//               console.log(tingu);
//             }
//             this.name ="Tingu"
// }]);

myApp.controller('mainscreencontroller',['homescreenservice',function(homescreenservice){
            var mainscreen = this;
            mainscreen.screens = [];
            function getthings(){
              mainscreen.screens = homescreenservice.getdata();
            }
            getthings();
}]);
