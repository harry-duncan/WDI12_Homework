

var line = {
	N: ["Times Square", "34th", "28th", "23rd", 
	"Union Square", "8th"],
	L: ["8th", "6th", "Union Square", "3rd", "1st"],
	// "6": ["Grand Central", "33rd", "28th", "23rd", "Union Square",
	// "Astor Place"],
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
var stationsBetween = function (lineX, stationOne, stationTwo) {
	// var line = N_line;
	var onePos = line[lineX].indexOf(stationOne);
	var twoPos = line[lineX].indexOf(stationTwo);
	var stationDiff = null;
	var betweenStations = [];
	if (onePos > twoPos ) {
		stationDiff = onePos - twoPos;
		// for (var i = onePos ; i > twoPos+1 ; i--) {
		// 	betweenStations.push(lineX[i])
		// }
		//Replacing the above with the below single line
		betweenStations = line[lineX].slice(onePos, twoPos)
		console.log(betweenStations)
		return betweenStations
	} else if ( twoPos > onePos ) {
		stationDiff = twoPos - onePos;
		for (var i = onePos ; i < twoPos+1 ; i++) {
			betweenStations.push(line[lineX][i])
			console.log(betweenStations)

		}
	} else {
		stationDiff = "Stations either not found, or the same station"
	};
	console.log("Between stations are " + betweenStations)
	// return betweenStations
}



//1: add an if to check if the station you are trying to get to is not on your branch

var planTrip = function (lineX, stationOne, lineY, station2) {
	var allStations = [];
	//It looks like the variable station2 is not being properly usedin the function
	//I have no idea why it will run it for stationOne, but not station2
			allStations.push((stationsBetween(lineX, "Union Square", station2)));

	if ( lineX !== lineY ) {



		// allStations.push((stationsBetween(lineX, stationOne, "Union Square")));
		// //The below code does not run properly. Even if placed earlier in the statement.
		// allStations.push((stationsBetween(lineY, "Union Square", stationTwo)));

	} //else {
	// 	stationsBetween(lineX, stationOne, stationTwo);
	// }
	console.log(allStations)
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

























