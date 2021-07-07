//use camel cases whereever possible and keep the function name meaningful.
function checkLastDigit(){
let num1 = prompt("Enter the First Number");
let num2 = prompt("Enter the Second Number");
let num3 = prompt("Enter the Third Number");

const result1 = num1 % 10;
const result2 = num2 % 10;
const result3 = num3 % 10;

if(result1 == result2 && result1 == result3) {
    let result = document.getElementById("txtdisplay").innerHTML=(`${num1}, ${num2} and ${num3} have the same last digit.`);
}
else {
    let result = document.getElementById("txtdisplay").innerHTML=(`${num1}, ${num2} and ${num3} dont have the same last digit.`);
}
}
