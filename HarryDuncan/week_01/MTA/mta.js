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


// Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.

// The key to the lab is finding the index positions of each stop. (hint: indexOf())


////////////////////////////////////////////


// Train lines array

var lineN = ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th']; 
var lineL = ['8th street', '6th', 'Union Square', '3rd', '1st']; 
var line6 = ['Grand Central', '33rd', '28th street', '23rd street', 'Union Square', 'Astor Place'];

// Train lines object // lines.lineN[1] call var name - then key - then array position 

var lines = { 
			lineN: ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'],
			lineL: ['8th street', '6th', 'Union Square', '3rd', '1st'],
			line6: ['Grand Central', '33rd', '28th street', '23rd street', 'Union Square', 'Astor Place']
};

// This is the function to travel from one station to another on one line in any direction // This works 

// This is currently hard coded to work with the lineN array // I need to beable to call the value in key to make this work for all lines so I can use it on any line independantly before i then use it in my final function

var travel = function(start, end){
	var trip = [];
		// debugger;
	if (lineN.indexOf(start) < lineN.indexOf(end)){
		for(var i = lineN.indexOf(start); i < lineN.indexOf(end); i++){
			if (i !== lineN.indexOf(end)){			 // this will be useful for when im changing multiple lines
				trip.push(lineN[i]);
			}
		} 
		console.log('From ' + start + ' You will need to travel through ' + trip + ' to get to ' + end);
	} 	else {
			for(var i = lineN.indexOf(end); i < lineN.indexOf(start); i++){
			console.log('stuff')
			if (i !== lineN.indexOf(start)){ // this will be useful for when im changing multiple lines
			trip.push(lineN[i]);
			}
		}
		console.log('You must travel through these stops' + trip);
	}
	return trip;
}; 

// Test calling travel() // This works 

travel('Times Square','8th')

// This is the function to detect if you need to change at Union Square // This works 

var change = function(startLine, startStop, endLine, endStop){
	if (startLine !== endLine){
		console.log('you need to change at Union Square')
	} else {
		console.log('enjoy your trip')
	}
};

change(lineN, 'Times Square', line6, 'Grand Central')  // This works 


// This is the function to travel to any station from any station  

var journey = function(startStation, endStation){
	var result = [];
	if (startStation === endStation){
		console.log('Please choose another end destination')
	} else if (){
		
	}

	// this will need to bring the start station and end station into the function and then first detect change at union if needed // this will be an if statement calling my detectChange function // if else 

	// i need to print the first line stops first 

	//i need to then print change if needed 

	// then i need to print your journey continues through these other stations on the other line 

	// then i need to tell you how painful your journey is and how many stations youre going to have to travel through
};

journey('Times Square', 'Times Square')












