/*
Scrabble Score
Write a JS function that, given a word, computes the scrabble score for that word.

It should look like the following:

Scrabble.score("cabbage")
# => 14
Letter Values

Letter                           Value
A, E, I, O, U, L, N, R, S, T       1
D, G                               2
B, C, M, P                         3
F, H, V, W, Y                      4
K                                  5
J, X                               8
Q, Z                               10
Extensions (we won't tell you how to implement this!)

You can play a :double or a :triple letter.
You can play a :double or a :triple word.
*/

// var subLines = {
//   "N": [ 'Times Square', '34th', '28th', '23rd', 'Union Square', '8th'],
//   "L": ['8th', '6th', 'Union Square', '3rd', '1st'],
//   "6": ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place']
// }

//subLines.N.indexOf('34th')

// var scrabbleOptions = {
//   "A": [1],
//   "B": [3],
//   "C": [3],
//   "D": [2],
//   "E": [2],
//   "F": [4],
//   "G": [2],
//   "H": [4],
//   "I": [1],
//   "J": [8],
//   "K": [5],
//   "L": [1],
//   "M":

//   "1": [ 'A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T' ],
//   "2": [ 'D', 'G' ],
//   "3": [ 'B', 'C', 'M', 'P' ],
//   "4": [ 'F', 'H', 'V', 'W', 'Y' ],
//   "5": [ 'K' ],
//   "8": [ 'J', 'X' ],
//   "10": [ 'Q', 'Z' ]
// }
// var testing1= scrabbleOptions['10'];

// var totalScore;

// //If A is called, add one point to total score



// var addingLetters = function(x){
//   // var letterPicked = scrabbleOptions[1].indexOf[x];
//   console.log("ADDING LETTERS")
//   if (x === "A"){
//     totalScore = + 1;
//   }
//   console.log(totalScore);
// };

// addingLetters('A');

// console.log(scrabbleOptions["10"].indexOf["Z"]);


//JACKS WAY:

//Modelling our data
//Need something to score


var letterScores = {'a': 1, "'e'":1, 'i':1, 'o':1, 'u':1, 'l':1, 'n':1, 'r':1, 's':1, 't':1, 'd':2, 'g':2, 'b':3, 'c':3, 'm':3, 'p':3, 'f':4, 'h':4, 'v':4, 'w':4, 'y':4, 'k':5, 'j':8, 'x':8, 'q':10, 'z':10 };

  var score = function (word) {
    var wordScore = 0;
    word = word.toLowerCase();
    

    for (var i = 0; i < word.length; i++ ) {
      var letter = word[i];
      var letterScore = letterScores[ letter ] || 0;
      wordScore += letterScore;
    };

    console.log( "The score of the word " + word + " is " + wordScore + "." );
    return wordScore;
  }

  score("ampers&");