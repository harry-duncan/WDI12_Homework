// var line = {
// 	N_line: ["Times Square", "34th", "28th", "23rd", 
// "Union Square", "8th"]
// }



// var specLine = function (thisLine) {
// 	return line.thisLine[0];
// };


// 34th, N_line
// var stationDiff = function(from, to) {
// 	if ( stationPos(N_line, from) )
// };


 


// var pickStation = function (thisLine, station) {
// 	for (var i = 0; i < thisLine.length; i++) {
// 		if (line[i] === station ) {
// 			return station;
// 		}
// 	};
// };









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
var betweenStations = function (lineX, stationOne, stationTwo) {
	// var line = N_line;
	var onePos = line[lineX].indexOf(stationOne);
	var twoPos = line[lineX].indexOf(stationTwo);
	console.log(onePos);
	console.log(twoPos);
	var stationDiff = null;
	var betweenStations = [];
	// var stationDir = null;
	// console.log(onePos);
	// console.log(twoPos);
	if (onePos > twoPos ) {
		// stationDir = "backward"
		stationDiff = onePos - twoPos;
		for (var i = onePos ; i > twoPos ; i--) {
			betweenStations.push(lineX[i])
		}
	} else if ( twoPos > onePos ) {
		// stationDir = "forward"
		stationDiff = twoPos - onePos;
		for (var i = onePos ; i < twoPos ; i++) {
			betweenStations.push(line[lineX][i])
			console.log(betweenStations)
			// console.log(stationDiff)

		}
	} else {
		stationDiff = "Stations either not found, or the same station"
	};
	return console.log("You must travel " + stationDiff + " stations, passing " + 
		betweenStations);
}



//Work out adding slice/split
//Eloquent javascript
//Speaking javascript




