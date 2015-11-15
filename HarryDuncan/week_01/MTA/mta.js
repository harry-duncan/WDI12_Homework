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


// Train lines object // lines.lineN[1] call var name - then key - then array position // NOT USING THIS RIGHT NOW

var lines = { 
			lineN: ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'],
			lineL: ['8th street', '6th', 'Union Square', '3rd', '1st'],
			line6: ['Grand Central', '33rd', '28th street', '23rd street', 'Union Square', 'Astor Place']
};

// Train lines array

// var lineN = ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th']; 
// var lineL = ['8th street', '6th', 'Union Square', '3rd', '1st']; 
// var line6 = ['Grand Central', '33rd', '28th street', '23rd street', 'Union Square', 'Astor Place'];

// This is the function to travel from one station to another on one line in any direction // This works 


var travel = function(start, end){
	var trip = [];
		// debugger;
	if (lineN.indexOf(start) < lineN.indexOf(end)){
		for(var i = lineN.indexOf(start); i < lineN.indexOf(end); i++){
			if (i !== lineN.indexOf(end)){			 
				trip.push(lineN[i]);
			}
		} 
		console.log('From ' + start + ' You will need to travel through ' + trip + ' to get to ' + end);
	} 	else {
			for(var i = lineN.indexOf(end); i < lineN.indexOf(start); i++){
			console.log('stuff')
			if (i !== lineN.indexOf(start)){
			trip.push(lineN[i]);
			}
		}
		console.log('You must travel through these stops' + trip);
	}
	return trip;
}; 

// Test calling travel() HERE // This works 

// travel('Times Square','8th')

// This is the function to detect if you need to change at Union Square // This works 

var change = function(startLine, endLine,){
	if (startLine !== endLine){
		console.log('you need to change at Union Square')
	} else if {
		console.log('enjoy your trip');
	}
};

// Test calling change() HERE // This works

// change(lineN, 'Times Square', line6, 'Grand Central')  // This works 


// This is the function to travel to any station from any station  

var journey = function(startStation, endStation){
	var trip = [];
	if (startStation === endStation){
		console.log('Please choose another end destination');
	} else{
		travel(startStation, endStation);
		change(startStation, endStation);
		trevel(startStation, endStation);
	}
	// this will need to bring the start station and end station into the function and then first detect change at union if needed // this will be an if statement calling my detectChange function // if else 

	// i need to print the first line stops first 

	//i need to then print change if needed 

	// then i need to print your journey continues through these other stations on the other line 

	// then i need to tell you how painful your journey is and how many stations youre going to have to travel through
};

// journey('Times Square', 'Times Square')
// journey('Times Square','8th')
// journey('8th street','1st')
// journey('Grand Central','Astor Place')



// var lineN = ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th']; 
// var lineL = ['8th street', '6th', 'Union Square', '3rd', '1st']; 
// var line6 = ['Grand Central', '33rd', '28th street', '23rd street', 'Union Square', 'Astor Place'];

// var travel = function(start, end){
// 	var trip = [];

// 	if (start = start) {

// 		if (lineN.indexOf(start) < lineN.indexOf(end)){
// 			for(var i = lineN.indexOf(start); i < lineN.indexOf(end); i++){
// 				if (i !== lineN.indexOf(end)){			 
// 					trip.push(lineN[i]);
// 				}
// 			} 
// 			console.log('From ' + start + ' You will need to travel through ' + trip + ' to get to ' + end);
// 		} 	else {
// 				for(var i = lineN.indexOf(end); i < lineN.indexOf(start); i++){
// 				console.log('stuff')
// 				if (i !== lineN.indexOf(start)){
// 				trip.push(lineN[i]);
// 				}
// 			}
// 			console.log('You must travel through these stops' + trip);
// 		} return trip;

// 	} else if {
// 		if (line6.indexOf(start) < line6.indexOf(end)){
// 		for(var i = line6.indexOf(start); i < line6.indexOf(end); i++){
// 			if (i !== line6.indexOf(end)){			 
// 				trip.push(line6[i]);
// 			}
// 		} 
// 		console.log('From ' + start + ' You will need to travel through ' + trip + ' to get to ' + end);
// 	} 	else {
// 			for(var i = line6.indexOf(end); i < line6.indexOf(start); i++){
// 			console.log('stuff')
// 			if (i !== line6.indexOf(start)){
// 			trip.push(line6[i]);
// 			}
// 		}
// 		console.log('You must travel through these stops' + trip);
// 	}
// 	return trip;

// 	} else {
// 		if (lineL.indexOf(start) < lineL.indexOf(end)){
// 		for(var i = lineL.indexOf(start); i < lineL.indexOf(end); i++){
// 			if (i !== lineL.indexOf(end)){			 
// 				trip.push(lineL[i]);
// 			}
// 		} 
// 		console.log('From ' + start + ' You will need to travel through ' + trip + ' to get to ' + end);
// 	} 	else {
// 			for(var i = lineL.indexOf(end); i < lineL.indexOf(start); i++){
// 			console.log('stuff')
// 			if (i !== lineL.indexOf(start)){
// 			trip.push(lineL[i]);
// 			}
// 		}
// 		console.log('You must travel through these stops' + trip);
// 	}
// 	return trip;
// 	}
// };

// travel('Times Square','8th')
// travel('8th street','1st')
// travel('Grand Central','Astor Place')










// var change = function(startLine, startStop, endLine, endStop){
// 	var trip = [];
// 	if (startLine !== endLine){
// 		console.log('you need to change at Union Square')
// 	} else if {
// 		console.log('enjoy your trip')
// 	} else{
// 			if (lines.indexOf(startStop) < lines.indexOf(endStop)){
// 		for(var i = lines.indexOf(start); i < lines.indexOf(end); i++){
// 			if (i !== lines.indexOf(end)){			 
// 				trip.push(lines[i]);
// 			}
// 		} 
// 		console.log('From ' + start + ' You will need to travel through ' + trip + ' to get to ' + end);
// 	} 	else {
// 			for(var i = lines.indexOf(endStop); i < lines.indexOf(startStop); i++){
// 			console.log('stuff')
// 			if (i !== lines.indexOf(startStop)){
// 			trip.push(lines[i]);
// 			}
// 		}
// 		console.log('You must travel through these stops' + trip);
// 	}
// 	return trip;
// 	}

// };


// change('lineN','Times Square', 'line6', '33rd')







































