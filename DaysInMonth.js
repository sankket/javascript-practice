let num1 = prompt("Enter Month");
let num2 = prompt("Enter Year");

let getDaysInMonth = function(month,year) {
  
    return new Date(year, month+1, 0).getDate();
  };

alert("Days in given month : " +getDaysInMonth(num1,num2))
