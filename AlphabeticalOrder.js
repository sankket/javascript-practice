let str = prompt("Enter the String");

function alphabetInOrder(str) { 

    return str.split("").sort().join("");
         
}
let result = document.getElementById("txtdisplay").innerHTML = alphabetInOrder(str);

