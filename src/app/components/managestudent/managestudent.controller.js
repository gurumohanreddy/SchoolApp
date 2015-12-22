myApp.controller('managestudentcontroller',['$localStorage',function($localStorage){
        var managestudent = this;

        managestudent.initializenewstudent = function(){
          managestudent.newstudent = {};
        }

        managestudent.addstudent = function(){
            managestudent.storage.push(managestudent.newstudent);
             managestudent.initializenewstudent();
             $('#myModal').modal('toggle');
             console.log(managestudent.newstudent);
        }


        managestudent.initializenewstudent();
        managestudent.students = [];
        $localStorage.storage = $localStorage.storage || [];
        managestudent.storage = $localStorage.storage;


}]);
