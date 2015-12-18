myApp.service('homescreenservice',function(){

            this.getdata = function(){
              var data = [
                {
                  'title': 'Manage Student'
                },
                {
                  'title':'Manage Class'
                },
                {
                  'title':'Teachers'
                },
                {
                  'title': 'Parents'
                },
                {
                  'title': 'Features'
                },
                {
                  'title': 'Notifications'
                }
              ];

              return data;
            }

});
