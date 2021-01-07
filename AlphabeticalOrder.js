let str = prompt("Enter the String");

function alphabetInOrder(str) { 

    return str.split("").sort().join("");
         
}
alert(alphabetInOrder(str))

