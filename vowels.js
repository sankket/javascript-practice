const string = prompt('Enter a string: ');

function vowelsCount(str) { 
    const count = str.match(/[aeiou]/gi).length; //gi is used for case sensitive searching.

    return count;
}


let result = document.getElementById("txtdisplay").innerHTML ="The Count of the vowels in a given string : "+ vowelsCount(string);

