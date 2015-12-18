myApp.service('homescreenservice',function(){

            this.getdata = function(){
              var data = [
                {
                  'title': 'Manage Student',
                  'link': 'managestudent'
                },
                {
                  'title':'Manage Class',
                  'link': 'manageclass'
                },
                {
                  'title':'Teachers',
                  'link': 'teachers'
                },
                {
                  'title': 'Parents',
                  'link': 'parents'
                },
                {
                  'title': 'Features',
                  'link': 'features'
                },
                {
                  'title': 'Notifications',
                  'link':'notifications'
                }
              ];

              return data;
            }

});
