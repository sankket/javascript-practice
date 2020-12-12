function reverseString(str){
    let split = str.split("");

    let reverse = split.reverse();

    let join = reverse.join("");

    return join
}

let result = document.getElementById("txtdisplay").innerHTML = "Reverse of a String :" +reverseString("Sanket Godbole");


// program for string reversal.
