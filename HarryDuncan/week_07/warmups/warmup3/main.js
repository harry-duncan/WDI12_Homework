// Atbash Cipher
// The Atbash cipher is a simple substitution cipher that relies on transposing all the letters in the alphabet such that the resulting alphabet is backwards. The first letter is replaced with the last letter, the second with the second-last, and so on.

// An Atbash cipher for the Latin alphabet would be as follows:

// Plain:  abcdefghijklmnopqrstuvwxyz
// Cipher: zyxwvutsrqponmlkjihgfedcba
// It is a very weak cipher because it only has one possible key, and it is a simple monoalphabetic substitution cipher. However, this may not have been an issue in the cipher's time.

// Examples

// Encoding "test" gives "gvhg"
// Decoding "gvhg" gives "test"


// keys: {
//   'a': z, 'b': y, 'c': x,'d': w,
//   'e': v, 'f': u, 'g': t,'h': s,
//   'i': r, 'j': q, 'k': p,'l': o,
//   'm': n, 'n': m, 'o': l,'p': k,
//   'q': j, 'r': i, 's': h,'t': g,
//   'u': f, 'v': e, 'w': d,'x': c,
//   'y': b, 'z': a
// },


// var encode = function (word){
// 	var cypher = [];
// 	for (var i = 0; i < word.length; i++) {
// 		word[i]
// 	};
// };

var atbash = {

	keys: {
  'a': 'z', 'b': 'y', 'c': 'x','d': 'w',
  'e': 'v', 'f': 'u', 'g': 't','h': 's',
  'i': 'r', 'j': 'q', 'k': 'p','l': 'o',
  'm': 'n', 'n': 'm', 'o': 'l','p': 'k',
  'q': 'j', 'r': 'i', 's': 'h','t': 'g',
  'u': 'f', 'v': 'e', 'w': 'd','x': 'c',
  'y': 'b', 'z': 'a'
	},
	encode: function (word){
		debugger;
		var cypher = [];
		for (var i = 0; i < word.length; i++) {
			letter = word[i];
			for (var i = 0; i < atbash.keys.length; i++) {
				if (letter === atbash.keys[i]){
					cypher.push(keys[i]);
					console.log(cypher);
				}
			};
		}
	},
	decode: function (word){

	}
};

/////////////// Jacks soloution ////////////////////////////

var LETTERS = "abcdefghijklmnopqrstuvwxyz";

var REVERSED_LETTERS = LETTERS.split("").reverse().join("");

var encode = function (str){
	str = str.toLowerCase();
	var encodedText = "";
	for (var i = 0; i < str.length; i++){
		var letter = str[i];
		var indexOfChar = LETTERS.indexOf(letter);
		var reverseChar = REVERSED_LETTERS.charAt(indexOfChar);
		encodedText += reverseChar
	}
	return encodedText;
}

