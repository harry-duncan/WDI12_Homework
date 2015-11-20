// Anagram Detector
// Write a program that, given a word and a list of possible anagrams, selects the correct one(s).

// In other words, given: "listen" and ["enlists" "google" "inlets" "banana"] the program should return "inlets".

  //  function compare (a, b) {
  // y = a.split("").sort();
  // z = b.split("").sort();
  // if(y.length==z.length) {
  //  for (i=0; i<y.length; i++) {
  //   if (y[i]!==z[i]){
  //    console.log(a + " and " + b + " are not anagrams!");
  //    return false;
  //   }
  //  }
  //  return true;
  // } else { return false;}}


//MY WAY:(WHICH DOESNT COMPLETEY WORK)


// var choices = ["enlists", "google", "inlets", "banana"];

// var anagram = function(){
//   var guessedWord = document.getElementById("guessedWord").value;
  
//   for (var i = 0; i < choices.length; i++) {
//     var sorting = choices[i]
    
//       var splitingChoices = sorting.split("").sort();
//       var splittingGuessedWord = guessedWord.split("").sort();

//         if(splitingChoices.length === splittingGuessedWord.length) {
//           for(var y = 0; y < splitingChoices.length; y++) {
//             if(splitingChoices[y] !== splittingGuessedWord[y]) {
//               console.log(guessedWord + " and " + sorting + " are not anagrams!");
//               return false;
//             }
//           }
//           return true;
//         } 
//   };

// };


//JACKS WAY

var Anagram = {

  hasSameLetters: function (word, candidate ) {
    word = word.split("").sort().join("");
    candidate = candidate.split("").sort().join("");
    
    return word === candidate;
  },

  areAnagrams: function(word, candidate) {
    // Turn both word and candidate into lowercase
    word = word.toLowerCase();
    candidate = candidate.toLowerCase();

    // We want to make sure they have the same letters
    // We wnat to make sure they aren't equal
    if( Anagram.hasSameLetters(word, candidate) && word !== candidate ) {
      return true;
    }
    return false;
  },

  // return Anagram.hasSameLetters(word, candidate) && word !== candidate;
  // Can use it this way too, instaed of the above.

  matches: function ( word, candidates ) {
    var anagrams = [];
    for (var i = 0; i < candidates.length; i++) {
      var potentialWord = candidates[i];
      if ( Anagram.areAnagrams(word, potentialWord) ) {
        anagrams.push( potentialWord );
      }
    }
    console.log( anagrams );
    return anagrams;
  }
};

var word = "listen";

var potentialWords = [ "enlist", "google", "INLETS", "banana"];

Anagram.matches( word, potentialWords );