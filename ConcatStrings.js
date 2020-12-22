const string1 = prompt('Enter a string1: ');
const string2 = prompt('Enter a string2: ');

function concatStrings(str1, str2) {
    str1 = str1.substring(1, str1.length);
    str2 = str2.substring(1, str2.length);
    return str1 + str2;
  }

  alert(concatStrings(string1, string2));
