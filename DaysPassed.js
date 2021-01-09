function daysPassed(dt) {
    var current = new Date(dt.getTime());
    var previous = new Date(dt.getFullYear(), 0, 1);
  
    return Math.ceil((current - previous + 1) / 86400000); // ceil rounds up a number.
  }

alert(daysPassed(new Date(2020, 10, 27)))


