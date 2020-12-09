function numberInRange(num1, num2) 
  {
    let number1 = prompt("Enter the First Number");
    let number2 = prompt("Enter the Second Number");

  if ((num1 >= 50 && num2 <= 99) || (num1 >= 10 && num2 <= 99))
  {
    return true;
  } 
  else 
  {
    return false;
  }
}

let result = document.getElementById("txtdisplay").innerHTML ="The Given Numbers Falls in range of 50 - 99 ? " +  numberInRange(number1, number2);
