function isLeapYear(year) {
    return year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0);
}
function daysOfYear(year) 
{  
  return isLeapYear(year) ? 366 : 365;
}



alert(daysOfYear(2020))

// This Program shows whether the given year is Leap or Not.
