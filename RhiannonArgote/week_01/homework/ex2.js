/*

Part 1, Rectangle

Given the following a rectangle object like the one below, write the following functions:

isSquare - Returns whether the rectangle is a square or not
area - Returns the area of the rectangle
perimeter - Returns the perimeter of the rectangle
var rectangle = {
  length: 4,
  width: 4
};

*/

var rectangle = {
  length: 4,
  width: 10,
};


var isSquare = function(obj) {
if (rectangle.length === rectangle.width) {
	return true;
}	
else { 

	return false;
}

};

var area = function (obj) {
	var area = obj.length * obj.width;
	return area;

};

var perimeter = function (obj) {
	var perimeter = (obj.length * 2) + (obj.width * 2);
	return perimeter;
};