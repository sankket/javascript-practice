function diffInDates(){
    date1 = new Date('11/28/2020');
    date2 = new Date('11/21/2020');

    const difference_time = Math.abs(date2 - date1);

    const difference_days = Math.ceil(difference_time/(1000*3600*24)); //Milliseconds in a day.
    
    return difference_days;

}

alert(diffInDates())

