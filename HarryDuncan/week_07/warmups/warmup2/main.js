// Triangles
// The program should return whether it a triangle is equilateral, isosceles or scalene. The program should also raise an error if the triangle cannot exist.

// Extensions:

// Return the area and diameter as well
// Hint

// The sum of the lengths of any two sides of a triangle always exceeds the length of the third side, a principle known as the triangle inequality.

var triangleTest = function(a, b, c){
	if (a + b > c && b + c > a && c + a > b){
		if (a === b && a === c && b === c){
			console.log("This is an Equilateral Triangle");
		} else if (a === b || a === c || b === c){
			console.log("This is a Isosceles Triangle");
		} else {
			console.log("This is a Scalene Triangle");
		}
	} else {
		console.log("This Triangle doesn't exist");
	}
};

triangleTest(10,10,10);
triangleTest(15,15,10);
triangleTest(10,15,20);
triangleTest(10,47,10);




