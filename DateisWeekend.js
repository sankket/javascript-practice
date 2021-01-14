function dateisWeekend(){
let givenDate=new Date("2020-1-1");
let currentDay = givenDate.getDay();
let dateIsInWeekend = (currentDay === 6) || (currentDay === 0);
if(dateIsInWeekend==true){
   alert("The given date "+givenDate+" is a Weekend");
} else {
   alert("The given date " +givenDate+"is a not a Weekend");
}
}

alert(dateisWeekend())
