// Scrabble Score
// Write a JS function that, given a word, computes the scrabble score for that word.

// It should look like the following:

// Scrabble.score("cabbage")
// # => 14
// Letter Values

// Letter                           Value
// A, E, I, O, U, L, N, R, S, T       1
// D, G                               2
// B, C, M, P                         3
// F, H, V, W, Y                      4
// K                                  5
// J, X                               8
// Q, Z                               10
// Extensions (we won't tell you how to implement this!)

// You can play a :double or a :triple letter.
// You can play a :double or a :triple word.



 var scores = { 
 		'a': 1,
		'e': 1,
		'i': 1,
		'o': 1,
		'u': 1,
		'l': 1,
		'n': 1,
		'r': 1,
		's': 1,
		't': 1,
		'd': 2,
		'g': 2,
		'b': 3,
		'c': 3,
		'm': 3,
		'p': 3,
		'f': 4,
		'h': 4,
};












var score = function(word){
	var wordScore = 0;
	word = word.toLowerCase();
	for (var i = 0; i < word.length; i++) {
		var letter = word[i];
		var letterScores = scores[letter] || 0;
		wordScore += scores;
	};
	console.log('the score of the word ' + word + ' is ' + wordScore + '.')
	return wordScore;
}





score('a')










// var scrabble = function(word){
// 	var result = splitWord(word);
// 	for (var i = 0; i < array.length; i++) {
// 		if (array.length[i] = 'a' || 'e' || 'i' || 'o' || 'u' || 'l' || 'n' || 'r' || 's' || 't' );
// 		return result = 1;
// 	}
// }


// var array = [];
// var splitWord = function(word){
// 	var result = word.split('')
// 	// var array = [];
// 	console.log(result)
// 	return array.push(result);
// }


// scrabble('arry')

// array














