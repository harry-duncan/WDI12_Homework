

var line = {
	N: ["Times Square", "34th", "28th", "23rd", 
	"Union Square", "8th"],
	L: ["8th", "6th", "Union Square", "3rd", "1st"],
	"6": ["Grand Central", "33rd", "28th", "23rd", "Union Square",
	"Astor Place"],
};

//I wrote this function,
//but I do not think returning just the station name has any real value.
// var pickStation = function (line, station) {
// 	for (var i = 0; i < line.length; i++) {
// 		if (line[i] === station ) {
// 			return station;
// 		}
// 	};
// };


//Returns the station's position within its array
//arr.indexOf( " " )

// var stationPos = function (line, station) {
// 	line.indexOf(station)
// };

//===================================================
//Determine how many stops the train will travel,
//and which direction that trains is travelling in.
//===================================================

//add a line variable for when we stop hard-coding the line
var logJourney = function (lineX, stationOne, stationTwo) {
	// var line = N_line;
	var onePos = line[lineX].indexOf(stationOne);
	var twoPos = line[lineX].indexOf(stationTwo);
	// debugger;
	var smallestIndex = Math.min( onePos, twoPos );
	var biggestIndex = Math.max( onePos, twoPos );
	var betweenStations = line[lineX].slice(smallestIndex, biggestIndex);

	if (onePos > twoPos ) {
		betweenStations = betweenStations.reverse();
	};
	if ( onePos < twoPos ) {
		betweenStations = line[lineX].slice(smallestIndex+1, biggestIndex+1)
	};
	return betweenStations;
}


var planTrip = function (lineX, stationOne, lineY, station2) {
	var allStations = ["empty"];
	console.log(lineX, stationOne, lineY, station2)
	if ( lineX !== lineY ) {
		allStations = (logJourney(lineX, stationOne, "Union Square"));
		console.log(allStations);

		allStations =  allStations.concat((logJourney(lineY, "Union Square", station2)));
		console.log(allStations);

	} else {
		allStations = (logJourney(lineY, stationOne, station2));
		console.log(allStations)
	}
	console.log ("You travelled " + allStations.length + " stops, passing through " + allStations.join(", "))
}


//==================================
//Okay, what are we doing next?
//1: add an if to check if the station you are trying to get to is not on your branch
//2: go to union station, then switch branch go to the desired station





//Work out adding slice/split
//Eloquent javascript
//Speaking javascript


//schmancy it is to find the nearest cross path to chance at.
//Hack method, theck for a station in both arrays in both directions.
//Use that to 


var theLines = Object.keys(line);




var whatLines = function (station) {
	var theLines = Object.keys(line);
	// console.log(theLines);
	for (var i = 0; i < theLines.length; i++) {
		if (line [ theLines[i] ].indexOf(station) >= 0 ) {
			//We need to use i to determine an object name
			console.log (line[i]);
		};
		console.log(line[theLines])
	};
	console.log("Applicable")
};






// for ( var i = 0; i < objKeys.length; i++ ) {
//   var objCurrentKey = objKeys[ i ];
//   if ( obj[ objCurrentKey ] === "Female" ) {
//     console.log( objCurrentKey );
//   }
// }


//Object.Keys ( obj )


// var objKeys = Object.keys( obj );
undefined






