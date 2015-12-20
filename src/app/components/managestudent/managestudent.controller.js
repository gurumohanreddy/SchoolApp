myApp.controller('managestudentcontroller',[function(){
        var managestudent = this;

        managestudent.initializenewstudent = function(){
          managestudent.newstudent = {};
        }
        managestudent.addstudent = function(){
            managestudent.students.push(managestudent.newstudent);
            managestudent.initializenewstudent();
            console.log(managestudent.students);
        }

        managestudent.initializenewstudent();
        managestudent.students = [];
        // managestudent.newstudent.studentname = "Tingu";


}]);
