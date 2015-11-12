/*

The Geometrizer 
Calculate properties of a circle, using the definitions here.

Store a radius into a variable.
Calculate the circumference based on the radius, and output "The circumference is NN".
Calculate the area based on the radius, and output "The area is NN".

*/

var radius = 3;
var pi = Math.PI;  // 22/7

var circumference = 2 * pi * radius;

console.log("The circumference is " +circumference);

var area = Math.pow ((pi * radius),1);
console.log("The area is " + area);