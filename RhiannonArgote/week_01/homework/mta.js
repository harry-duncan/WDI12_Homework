var x = 0; // This is the initialize value
while (x < 5) { // This is the condition (in the parentheses)
    console.log(x);
    x = x + 1; // This is the update
}


var lineN = [ "Times Square", "34th", "28th", "23rd", "Union Square", "8th" ]

console.log(lineN[0]); // Logs Stop 1

var lineN = [ "Times Square", "34th", "28th", "23rd", "Union Square", "8th" ]
    for ( var i = 0; i < lineN.length; i++ ) {
    console.log( lineN[ i ] ); // Will log out all stations on line N
}

var lineL = ["8th", "6th", "Union Square", "3rd", "1st"];
    for ( var i = 0; i < lineL.length; i++ ) {
    console.log( lineL[ i ] ); // Will log out all stations on line L
}

var six = ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
    for ( var i = 0; i < six.length; i++ ) {
    console.log( six[ i ] ); // Will log out all stations on line six
}

console.log(lineL[2]); // Logs unionSquare on Line L
console.log(lineN[4]); // Logs unionSquare on Line N
console.log(six[4]); // Logs unionSquare on Line six

console.log(lineL[0]); // Logs first stop on Line L
console.log(lineN[0]); // Logs first stop on Line N
console.log(six[0]); // Logs first stop on Line six

var lineNUnionSquare = 4 // Logs where Union Square is on Line N
var lineLUnionSquare = 2 // Logs where Union Square is on Line L
var sixUnionSquare = 4 // Logs where Union Square is on Line six

console.log( N[ N.length - 1 ] ); // Logs last stop of N (the last element)
console.log( L[ L.length - 1 ] ); // Logs last stop of L (the last element)
console.log( six[ six.length - 1 ] ); // Logs last stop of six (the last element)

console.log(L[i]);

console.log( lineN.length ); // Returns total number of stops on the line N (6)
console.log( lineL.length ); // Returns total number of stops on the line L (5)
console.log( six.length ); // Returns total number of stops on the line six (6) 


for (var x = 0; x < 5; x = x + 1) { //going through the stations
    console.log( x ) //recording the number of stations
}



var unionSquare = 0;





/*

var subway = {
  "N" : [ "Times Square", "34th", "28th", "23rd", "Union Square", "8th" ],
  "L" : ["8th", "6th", "Union Square", "3rd", "1st"],
  "6" : ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
}

*/

console.log("hello");

var lines = {
  
  var bank = [
	{ name: "John", balance: 18},
	{ name: "Rhiannon", balance: 14},
	{ name: "Alex", balance: 12}
]

var globalResult;
function addNumbers( num1, num2 ) {
  globalResult = num1 + num2;
  console.log( "The global result is: " + globalResult );
}

for (var current = 100; current < 200; current++) {
    // current++ is the same current += 1 and current = current + 1
    // current-- also exists (minus 1)
    // Called syntactic sugar

    console.log('Testing ' + current);
    if (current % 7 == 0) {
        // The % stands for the modulus operator, it finds the remainder
        console.log('Found it! ' + current);
        break;
    }
}

while (x < 5) {
  console.log(x);
  x = x + 1;
}

for (var x = 0; x < 5; x = x + 1) {
    console.log( x )
}

var lines = [
{ line: "N", stops: "Times Square", "34th", "28th", "23rd", "Union Square", "8th"}
{ line: "N", stops: }
{ line: "N", stops: }

]

  'N': [ '8th', 'whatever', 'etc'],
  'L': ['7th', 'Union Square', 'etc'],
  '6': ['25th', 'Times Square', 'etc']
}

var n = [ "Times Square", "34th", "28th", "23rd", "Union Square", "8th" ]

for (var i = 0; i < n.length; i++) { 
	console.log(n[i])
};

var journey = function(first, end) {
	var start = n.indexOf(first);
	//for (var i = start; i < subway.length; i++) {
		console.log(n[end]);
	}
}

/*
var reverseJourney = function(line, start, end) {
	for (var i = end; i < subway.length; i--) {
		return subway[i];
	}

}

var changeLines = function()

for (var i =0; i < subway.length; i++) 

console.log(subway[1]);



/*

var chooseLine = function (line1, entry) {
	for (var i = 0; i < line1.length; i++) {
		if (line1[i].entry === entry) {
			var 
		}
	};
}

var planTrip = function (line1, entry, line2, exit) {


}

var depositMoney = function(name, num) {
    // Identify which account I need to work with
    for ( var i = 0; i < bank.length; i++ ) {
        if ( bank[i].name === name ) {
            var account = bank[i];
            account.balance += num;
            console.log( "You deposited " + num + ". Your account balance is now " + account.balance );
            return account.balance;
        }
    }

planTrip('N', 'Times Square', '6', '33rd');



/*
The program takes the line and stop that a user is getting on at and the line and stop that user is getting off at and prints the journey and the total number of stops for the trip in the console:

planTrip('N', 'Times Square', '6', '33rd'); // This is only a suggested function name and signature.

// console.log() shows output similar to this:
// "Your must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
// "Change at Union Square."
// "Your journey continues through the following stops: 23rd, 28th, 33rd."
// "7 stops in total."
*/