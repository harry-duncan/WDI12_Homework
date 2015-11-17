





//Waaaay better to have the letter on left, score on right.
//Looks like more typing but actually better
//This is because less forloops needed
var Scrabble = {
	values: {
	1: ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"],
	2: ["D", "G"],
	3: ["B", "C", "M", "P"],
	4: ["F", "H", "V", "W", "Y"],
	5: ["K"],
	8: ["J", "X"],
	10: ["Q", "Z"],
	},
};



var wordTotal = function (word) {
	array = word.split("");
	for (var i = 0; i < array.length; i++) {
		// console.log (array[i])
		for (var l = 0; l < Scrabble.values.length; i++) {
			// if ( Scrabble.values[l].indexOf(array[i] ) {
			// 	console.log (array[i] + " is worth " Scrabble.values[l] )
			// };
		};
	};
};