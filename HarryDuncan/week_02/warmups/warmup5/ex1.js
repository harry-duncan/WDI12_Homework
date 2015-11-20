// DNA is represented by an alphabet of the following symbols: 'A', 'C', 'G', and 'T'.

// Each symbol represents a nucleotide, which is a fancy name for the particular molecules that happen to make up a large part of DNA.

// Shortest intro to biochemistry EVAR:

// twigs are to birds nests as
// nucleotides are to DNA and RNA as
// amino acids are to proteins as
// sugar is to starch as
// oh crap lipids
// I'm not going to talk about lipids because they're crazy complex.

// So back to nucleotides.

// There are 5 types of nucleotides. 4 of these occur in DNA: A, C, G, and T. 4 occur in RNA: A, C, G, U.

// There are no other nucleotides.

// Make sure that you validate it has nucleotides!

// Find how many of each nucleotides are in a string that you pass in to a function

	// DNA: ['A', 'C', 'G', 'T'],
	// RNA: ['A', 'C', 'G', 'U'],

// var nucleotide = {

	// splitter: function (string){
	// var result = string.split("");
	// var newResult = [];
	// for (var i = 0; i < result.length; i++){
	// 	newResult.push(result[i]);	
	// } return result;
	// },

// 	match: function(string, letter){
// 	string = string.toLowerCase();
// 	letter = letter.toLowerCase();
// 	if (string.splitter(string)){
// 		for (var i = 0; i < result.push(string.length; i++) {
// 			result.push(string[i])
// 		};
// 	}

// 	},

// };

// nucleotide.splitter('harry');


// Were going to need an object - call that nucleotides

// we need a count method 

// we need a count all method


var nucleotides = {

	count: function(string, nucleotide){
	var nucleotideCount = 0;
	var string = string.split('')
	for (var i = 0; i < string.length; i++) {
		var character = string[i];
		if (character === nucleotide){
			nucleotideCount += 1;
		}

	}; return nucleotideCount;
	},

	countAll: function(string){
		var aCount = nucleotides.count(string, 'A');
		var cCount = nucleotides.count(string, 'C');
		var tCount = nucleotides.count(string, 'T');
		var gCount = nucleotides.count(string, 'G');

		return {
			'A' : nucleotides.count(string, 'A'),
			'C' : nucleotides.count(string, 'C'),
			'T' : nucleotides.count(string, 'T'),
			'G' : nucleotides.count(string, 'G')
		};
	}
};

nucleotides.countAll('ATCGATCG','A');




















