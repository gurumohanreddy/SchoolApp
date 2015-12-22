myApp.controller('managestudentcontroller',['$localStorage',function($localStorage){
        var managestudent = this;

        managestudent.initializenewstudent = function(){
          managestudent.newstudent = {};
        }

        managestudent.addstudent = function(){

          var filesSelected = document.getElementById("fileinput").files;
          if (filesSelected.length > 0) {
            var fileToLoad = filesSelected[0];
            var fileReader = new FileReader();
            var imageString;

            fileReader.onload = function(fileLoadedEvent) {
            imageString = fileLoadedEvent.target.result; // <--- data: base64
            managestudent.addReceipt(imageString);
            }
          fileReader.readAsDataURL(fileToLoad);

          }
          managestudent.addReceipt = function(imageString){
            managestudent.newstudent.studentpic = imageString;
            managestudent.storage.push(managestudent.newstudent);
             managestudent.initializenewstudent();
             $('#myModal').modal('toggle');
             console.log(managestudent.newstudent);

          }


        }




        managestudent.initializenewstudent();
        managestudent.students = [];
        $localStorage.storage = $localStorage.storage || [];
        managestudent.storage = $localStorage.storage;

}]);


// myApp.directive("fileInput",['$parse',function($parse){
//
//     return{
//       restrict: 'A',
//       link: function(scope,ele,attrs){
//           ele.bind('change',function(){
//             $parse(attrs.fileInput)
//             .assign(scope,ele[0].files)
//             scope.$apply()
//             console.log("tingu");
//           })
//       }
//     }
//
// }]);
