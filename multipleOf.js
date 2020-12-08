
function multiplesOf(num) 
{
  let number = prompt("Enter the  Number");
  if (num % 3 == 0 || num % 7 == 0) 
  {
    return true;
  } 
  else {
    return false;
  }
}

let result = document.getElementById("txtdisplay").innerHTML = "The Given Number is Multiple of 3 or 7 ? : "+ multiplesOf(number);

// in javascript always remember to give valid function and make it understandable.
// id name of the html element must be unique.
