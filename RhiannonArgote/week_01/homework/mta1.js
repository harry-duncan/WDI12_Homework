// Construct the data types

// Make your planTrip function that receives four parameters

// Make that work for going forward along a line
// 	1. console.log every station in the line first
// 		planTrip( "N", "Times Square", "N", "8th" ) - first station to the last station (Same Line)
// 	2. console.log from one station to another
// 		planTrip( "N", "34th", "N", "23rd" ) - some random station to some other random station (Same line)

// Make it work going backwards
// 	1. console.log every station in the line first
// 		planTrip( "N", "Times Square", "N", "8th" ) - first station to the last station (Same Line)
// 	2. console.log from one station to another
// 		planTrip( "N", "34th", "N", "23rd" ) - some random station to some other random station (Same line)






















var x = 0; // This is the initialize value
while (x < 5) { // This is the condition (in the parentheses)
    console.log(x);
    x = x + 1; // This is the update
}


console.log(lineN[0]); // Logs Stop 1

var lineN = [ "Times Square", "34th", "28th", "23rd", "Union Square", "8th" ]
    for ( var i = 0; i < lineN.length; i++ ) {
    console.log( lineN[ i ] ); // Will log out the "i-th" element
}

var lineL = ["8th", "6th", "Union Square", "3rd", "1st"];
    for ( var i = 0; i < lineL.length; i++ ) {
    console.log( lineL[ i ] ); // Will log out the "i-th" element
}

var six = ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
    for ( var i = 0; i < six.length; i++ ) {
    console.log( six[ i ] ); // Will log out the "i-th" element
}

var planTrip = function (line1, entry, line2, exit) {
    if (line1 === line2) {
    	var entryPoint = line1.indexOf(entry);
    	var exitPoint = line1.indexOf(exit);

	    for (var i = entryPoint; i < exitPoint; i++) { // - loop through to log stations
		    var result = line1.indexOf(exit) - line1.indexOf(entry);

		    console.log( lineN[i] );
		    // console.log("You must travel through the following stops on the " + line1 +":" + lineN[i]);
		    // return result;

		}
	} else if (line1 !== line2) {
        var firstHalf = line1.indexOf("Union Square") - line1.indexOf(entry);
        var secondHalf = line2.indexOf("Union Square") + line2.indexOf(entry);
        var totalStops = secondHalf + firstHalf;
    }
}

//"Your must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
// "Change at Union Square."
// "Your journey continues through the following stops: 23rd, 28th, 33rd."
// "7 stops in total."

//need to write function if !== line 2, that counts the stops to Union Square
//and then from Union square to the exit

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

console.log(lineN.indexOf("Union Square")); // returns the array position of US on line N
console.log(lineL.indexOf("Union Square")); // returns the array position of US on line L
console.log(six.indexOf("Union Square")); // returns the array position of US on line six
