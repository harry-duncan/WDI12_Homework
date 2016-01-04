// Accumulate
// For example, given the collection of numbers:

// 1, 2, 3, 4, 5
// And the operation:

// square a number
// Your code should be able to produce the collection of squares:

// 1, 4, 9, 16, 25
// Optional Extras

// Square Root a Number
// Cube a number
// Even and Odd
// Or return an object containing all of those things:

// {
//   original: [1, 2, 3, 4, 5],
//   squares: [...],
//   squareRoots: [...],
//   cubes: [...],
//   evenAndOdd: [true, false, true]
// }
// Restrictions

// Keep your hands off that collect/map/fmap/whatchamacallit functionality provided by your standard library!

// Solve this one yourself using other basic tools instead.


var nums = [1, 2, 3, 4, 5];

var workout = function (nums){
	result = [];
	for (var i = 0; i < nums.length; i++) {
		x = nums[i] * nums[i];
		result.push(x);
	};
	return result;
};

console.log('something');

var trueOrFalse = fucntion (arr){
	var res = [];
	for (var i = 0; i < arr.length; i++) {
		var even = arr[i] % 2 === 0;
		res.push(even);
	};
};