function checkNumberSumFifty(num1, num2){
    let number1 = prompt("Enter the First Number");
    let number2 = prompt("Enter the Second Number");
    if(num1 == 50 || num2 == 50){
        return true;
    }else if(num1 + num2 == 50){
        return true;
    }
    else{
        return false;
    }
    // return ((num1 == 50 || num2 == 50) || (num1 + num2 == 50));
 }

let result = document.getElementById("txtdisplay").innerHTML = checkNumberSumFifty(number1, number2);
