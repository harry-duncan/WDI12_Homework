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

// 5 types of nucleotides, 4 occur in DNA: A, C, G, T, 4 occur in RNA: A, C G U. 

// There are no other nucleotides


// var nucleotideCheck = {

//    hasSameLetters: function ( letters, candidate ) {
//     letters = letters.split("").sort().join("");
//     candidate = candidate.split("").sort().join("");

//     return letters === candidate;
//    },

//   areNucleotides: function( letters, candidate) {
//     //Turn both word and candidate into lowercase
//     letters = letters.toLowerCase();
//     candidate = candidate.toLowerCase();

//     if( dnaAndRna.hasSameLetters(letters, candidate) && letters !== candidate ) {
//       return true;
//     }
//     return false;
//   },

//   correctLetter: function ( letters, candidates ) {
//     var potLetters = [];
//     for (var i = 0; i < letters.length; i++) {
//       var potentialNuc = letters[i];
//       if (nucleotideCheck.areNucleotides( letters, potentialNuc) ) {
//         potLetters.push( potentialNuc );
//       }
//     }
//     console.log( potLetters );
//     return potLetters;
//   }

// };

// var potentialNucleotide = ['A', 'C', 'G', 'T', 'U'];

// var letters = ["AZTSCGT"]


// nucleotideCheck.correctLetter( letters, potentialNucleotide );


// var string = "ATCGATCGAAA";
// Nucleotide.count( string, "A" ); // should return 5
// Nucleotide.count( string, "T" ); // should return 2
// Nucleotide.count( string, "C" ); // should return 2 
// Nucleotide.count( string, "G" ); // should return 2

// // EXTENSION!

// Nucleotide.countAll( string );
// // Returns { A: 5, T: 2, C: 2, G: 2 }

// var string = "ATCGATCGAAAR";


// var Nucleotide = {

//   count: function( string ) {
//   var letters = [];
//   for (var i = 0; i < string.length; i++)
//     var everyLetter = string[i];
//     letters.push( everyLetter );
//       console.log(letters);
//   }
// };


//  // Nucleotide.count( string, "A" );
//  Nucleotide.count( string );


//^^^^^^That shit doesn't work. Is a sad panda. All pandas are sad.

//===============================================

//JACKS WAY:

//We are going to need an object - call that Nucleotides

//We need a count method
//We need a count all method

var Nucleotides = {

  count: function( string, nucleotide ) {
    var nucleotideCount = 0;
    
    for (var i = 0; i < string.length; i++) {
      var character = string[i];
      if (character === nucleotide) {
        nucleotideCount += 1;
      }
    }
    return nucleotideCount;
  },


  countAll: function( string ) {
    var aCount = Nucleotides.count( string, "A" );
    console.log( aCount );
  }
};

Nucleotides.count( "ATCGATCTTTG", "T" );