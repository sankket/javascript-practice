let monthName = function(date){
    list = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
      return mlist[date.getMonth()];
    };

alert(monthName(new Date("31/12/2020")));
