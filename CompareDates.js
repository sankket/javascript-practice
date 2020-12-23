    function datesCompare(){
    let dt1 = new Date('10/31/2020');  
    let dt2 = new Date('11/25/2020'); 
    if (dt1.getTime() < dt2.getTime()) 
        document.write("date1 is lesser than date2"); 
    else if (g1.getTime() > dt2.getTime()) 
        document.write("date1 is greater than date2"); 
    else
        document.write("both are equal"); }

    let result = document.getElementById("txtdisplay").innerHTML = datesCompare();
