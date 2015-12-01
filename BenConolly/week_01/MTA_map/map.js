

var line = {
	N: ["Times Square", "34th", "28th", "23rd", 
	"Union Square", "8th"],
	L: ["8th", "6th", "Union Square", "3rd", "1st"],
	"6": ["Grand Central", "33rd", "28th", "23rd", "Union Square",
	"Astor Place"],
};

//===================================================
//Determine how many stops the train will travel,
//and which direction that trains is travelling in.
//===================================================

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
	if ( lineX !== lineY ) {
		allStations = (logJourney(lineX, stationOne, "Union Square"));

		allStations =  allStations.concat((logJourney(lineY, "Union Square", station2)));

	} else {
		allStations = (logJourney(lineY, stationOne, station2));
	}
	console.log ("You travelled " + allStations.length + " stops, passing through " + allStations.join(", "))
}


//==================================
//Okay, what are we doing next?
//1: add an if to check if the station you are trying to get to is not on your branch
//2: go to union station, then switch branch go to the desired station
//3: Find nearest cross station, 

//=======================================
//Beyond this point are non-necessary exra stuff.

var whatLines = function (station) {
	var listLines = Object.keys(line);
	var theLines = []
	for (var i = 0; i < listLines.length; i++) {
		if (line [ listLines[i] ].indexOf(station) >= 0 ) {
			theLines.push(listLines[i]);
		};
	};
	return theLines
};


var checkSameLine = function (stationX, stationY) {
	var statXLines = whatLines(stationX);
	var statYLines = whatLines(stationY);
	var sharedLines = []
	if (statXLines.length < statYLines.length) {
		for (var i = 0; i < statYLines.length; i++) {
			if (statXLines.indexOf(statYLines[i]) >= 0) {
				sharedLines.push(statYLines[i]);
			};
		};
	} else if (statXLines.length >= statYLines.length) {
		for (var i = 0; i < statXLines.length; i++) {
			// console.log (statYlines.indexOf(statXLines[i]))
			if (statYLines.indexOf(statXLines[i]) >= 0) {
				sharedLines.push(statXLines[i]);
			};
		};
	};
		return sharedLines
};


//=====================================
//=====================================
//LogJourney 2 will take any two stations, and take you from one to the other via Union Square
//Next step is to make them if on different lines find the closest transfer.
//=====================================
//=====================================
var logJourney2 = function ( stationOne, stationTwo) {
	sharedLines = checkSameLine ( stationOne, stationTwo );
	// console.log (sharedLines);
	if ( sharedLines.length > 0 ) {
		// console.log(sharedLines);
		var onePos = line[sharedLines[0]].indexOf(stationOne);
		var twoPos = line[sharedLines[0]].indexOf(stationTwo);
		var smallestIndex = Math.min( onePos, twoPos );
		var biggestIndex = Math.max( onePos, twoPos );
		if (onePos > twoPos ) {
			var betweenStations = sharedLines[0].slice(smallestIndex, biggestIndex)
			betweenStations = betweenStations.reverse();
		};
		if ( onePos < twoPos ) {
			var betweenStations = line[sharedLines[0]].slice(smallestIndex+1, biggestIndex+1)
		};
	};
	if ( sharedLines.length <= 0 ) {
		planTrip( whatLines(stationOne), stationOne, whatLines(stationTwo), stationTwo )

	}
		return betweenStations;
	}



//==============================
//I feel like we are sooooo close to this working...
var closestTransfer = function (station, line) {
	
}
// Start from station, move through the array, until you find an object that is also in the second line array




//The super fancy function would take stations and figure out the closest shared line.
//This code would be incredibly clunky doing it.
//I can almost visualise a better way of doing such a search, but haven't figured it out.
//Can execute the code in response to the return of checkSameLine === []
//Could search var listLine[i], for recurring loop for all positions of that
//Then whether the corresponding object indexOfed to a station.
//No, you need to each time check not just the current station, but then the station on either side.








