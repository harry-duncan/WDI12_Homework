// ANAGRAM WARMUP!
//
// We are going to approach it in the same way
//  Everything broken down into small functions
//  We keep everything related to Anagram functionality together
//
// Looking at it, I would like a bunch of functions...
//  Firstly, a matches function which receives a word and an array of words
//  Secondly, an areAnagrams function that does all the hard stuff behind the scenes
//  Thirdly, a hasSameLetters function
//
// We need to make sure these things are all working together

var Anagram = {
  hasSameLetters: function ( word, candidate ) {
    word = word.split("").sort().join("");
    candidate = candidate.split("").sort().join("");

    return word === candidate;
  },

  areAnagrams: function ( word, candidate ) {
    // Turn both word and candidate into lower case
    word = word.toLowerCase();
    candidate = candidate.toLowerCase();

    // We want to make sure they have the same letters
    // We want to make sure they aren't equal
    if ( Anagram.hasSameLetters(word, candidate)
         && word !== candidate ) {
      return true;
    }
    return false;
    // return Anagram.hasSameLetters(word, candidate) && word !== candidate;
  },

  matches: function ( word, candidates ) {
    var anagrams = [];
    for ( var i = 0; i < candidates.length; i++ ) {
      var potentialWord = candidates[i];
      if ( Anagram.areAnagrams( word, potentialWord ) ) {
        anagrams.push( potentialWord );
      }
    }
    console.log( anagrams );
    return anagrams;
  }
};

var word = "listen";
var potentialWords = [ "enlist", "INLETS", "preserve" ];
Anagram.matches( word, potentialWords );