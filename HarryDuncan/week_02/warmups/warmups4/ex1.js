// // Write a program that, given a word and a list of possible anagrams, selects the correct one(s).

// // In other words, given: "listen" and ["enlists" "google" "inlets" "banana"] the program should return "inlets".




var anagram = {
	haveSameLetters: function (word, candidate){
		word = word.split('').sort().join('');
		candidate = candidate.split('').sort().join('');
		return word === candidate;
	}
},

	areAnagrams: function(word, candidate) {
		if (anagram.haveSameLetters(word, candidate) && word !== candidate)
			return true;
	}


{
	matches: function ( word, candidates){
		var anagrams = [];
		for (var i = 0; i < candidates.length; i++) {
			var potentialWords = candidates[i];
			if (anagram.areAnagrams(word, potentialWords)) {
				anagrams.push(potentialWords)
			}
		};
	}
};



var word = "listen";

var potentialWords = ["enlist", "google","inlets", "banana"]




















































