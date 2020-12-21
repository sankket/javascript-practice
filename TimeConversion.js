let num1 = prompt("Enter the Number");

function time_convert(num)
 { 
  var hours = Math.floor(num / 60);  
  var minutes = num % 60;
  return hours + "hours : " + minutes + "Minutes";         
}

let result = document.getElementById("txtdisplay").innerHTML = time_convert(num1);
