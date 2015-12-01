// The sum of the squares of the first ten natural numbers is,

// 1**2 + 2**2 + ... + 10**2 = 385

// The square of the sum of the first ten natural numbers is,

// (1 + 2 + ... + 10)**2 = 55**2 = 3025

// Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 - 385 = 2640.

// Make it so that it doesn't just work for the number 10.

// Difference.ofSquares( 10 );

// SUM OF SQUARES
// 1 * 1 = 1
// 2 * 2 = 4
// 3 * 3 = 9
// 4 * 4 = 16
// 5 * 5 = 25
// 6 * 6 = 36
// 7 * 7 = 49
// 8 * 8 = 64 
// 9 * 9 = 81
// 10 * 10 = 100


// var sumOfSquares = function(number){
// 	// debugger;
// 	var result = 0;
// 	for (var i = 0; i <= number; i++){
// 		var result = result + (i * i);		
// 	}; 
// 	console.log(result);
// };

// sumOfSquares(10);



// // SQUARE OF SUMS
// // 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 = 55

// squareOfSum = function(number){
// 	var result = 0;
// 	for (var i = 0; i < number; i++){
// 		var result = result + (i + 1);
// 	};
// 	console.log(result);
// };

// squareOfSum(10);



// 55 * 55

// 2 ** 1 = 2 * 1 
// 2 ** 2 = 2 * 2
// 2 ** 3 = 2 * 2 * 2
// 2 ** 4 = 2 * 2 * 2 * 2

// var difference = function(number){
// 	var result = 0;
// 	for (var i = 0; i < number; i++) {
// 		var result = 
// 	};
// };







var squares = {
	sumOfSquares: function(max){
	// debugger;
	var result = 0;
	for (var i = 0; i <= max; i++){
		var result = result + (i * i);		
	}; 
	console.log(result);
	return result;
	},
	squareOfSum: function(max){
	var result = 0;
	for (var i = 0; i < max; i++){
		var result = result + (i + 1);
	};
	console.log(result);
	return result * result;
	},
	difference: function(max){
	var squareOfSum = squares.squareOfSum(max);
	var sumOfSquares = squares.sumOfSquares(max);
	return squareOfSum - sumOfSquares;
	}
};





















