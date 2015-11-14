// MTA Lab
// Objectives:

// Apply your knowledge of Javascript to solve a real world problem.
// Get really good at array manipulation.
// Activity

// Create a program that models a simple subway system.

// The program takes the line and stop that a user is getting on at and the line and stop that user is getting off at and prints the journey and the total number of stops for the trip in the console:

// planTrip('N', 'Times Square', '6', '33rd'); // This is only a suggested function name and signature.

// // console.log() shows output similar to this:
// // "Your must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
// // "Change at Union Square."
// // "Your journey continues through the following stops: 23rd, 28th, 33rd."
// // "7 stops in total."


// There are 3 subway lines:

// The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
// The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
// The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.

// All 3 subway lines intersect at Union Square, but there are no other intersection points. (For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you'll have to differentiate this when you name your stops in the arrays.)



// Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.

// Get the program to work for a single line before trying to tackle multiple lines.

// The key to the lab is finding the index positions of each stop. (hint: indexOf())



// i need a function that will take in 4 peramiters --- starting station, ending station, starting stop, ending stop 

// this will be my function to take me to a destination // im going to need to store all the lines in an array and then ref the index of them to determine which line is being travesed 

// indexof() will l

var lineN = ['a','b','c','d','e'];

var travelForward = function(start, end){			// need to make a function that will call two trips --- station a STOP - STOP station b
	var trip = [];
		// debugger;
	if (lineN.indexOf(start) < lineN.indexOf(end)){
		for(var i = lineN.indexOf(start); i < lineN.indexOf(end); i++){
			if (i !== lineN.indexOf(end)){			 // this will be useful for when im channg multiple lines //
				trip.push(lineN[i]);
				console.log('you are passing throuh these stations' + trip);
			}
		} console.log('stuff');
	} else {
		for(var i = lineN.indexOf(end); i < lineN.indexOf(start); i++){
			console.log('stuff')
			if (i !== lineN.indexOf(start)){ // this will be useful for when im channg multiple lines // this will need else blah blah blah 
				trip.push(lineN[i]);
				console.log('you are passing throuh these mofo stations');
			}
		}
	}
	return trip;
}; 


travelForward('c','a')

// these are my train lines 

var lineN = []; // this needs the stops // Times Square, 34th, 28th, 23rd, Union Square, and 8th

var lineL = []; // this needs the stops // 8th street, 6th, Union Square, 3rd, and 1st

var line6 = []; // this needs the stops // Grand Central, 33rd, 28th street, 23rd street, Union Square, and Astor Place





// you will need to use indexof to store the value of a station into a variable to then compare thos variables in an 'if ' statement and then use slice to return




























