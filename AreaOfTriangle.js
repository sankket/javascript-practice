// Find the Area of the triangle when the all the sides length are Given.
const side1 = 25;
const side2 = 64;
const side3 = 75;

const perimeter = (side1 + side2 + side3) / 2 ;

const Area = Math.sqrt(perimeter * (perimeter - side1) * (perimeter - side2) * (perimeter - side3) );

let result = document.getElementById("txtdisplay").innerHTML = "The Area of the Triangle is : " + Area;



