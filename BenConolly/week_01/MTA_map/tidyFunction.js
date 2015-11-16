var line = {
	N: ["Times Square", "34th", "28th", "23rd", 
	"Union Square", "8th"],
	L: ["8th", "6th", "Union Square", "3rd", "1st"],
	"6": ["Grand Central", "33rd", "28th", "23rd", "Union Square",
	"Astor Place"],
};
//=========
//repeatedFunctions
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
			if (statYLines.indexOf(statXLines[i]) >= 0) {
				sharedLines.push(statXLines[i]);
			};
		};
	};
		return sharedLines
};

var trip = function ( stationOne, stationTwo ) {
	var sharedLines = checkSameLine ( stationOne, stationTwo );
	var onePos = line[sharedLines[0]].indexOf(stationOne);
	var twoPos = line[sharedLines[0]].indexOf(stationTwo);
	var smallestIndex = Math.min( onePos, twoPos );
	var biggestIndex = Math.max( onePos, twoPos );
	if (onePos > twoPos ) {
		var betweenStations = line[sharedLines[0]].slice(smallestIndex, biggestIndex)
		betweenStations = betweenStations.reverse();
	};
	if ( onePos < twoPos ) {
		var betweenStations = line[sharedLines[0]].slice(smallestIndex+1, biggestIndex+1)
	};
	return betweenStations
}

//==========
//The actual info we want
var journey = function ( stationOne, stationTwo) {
	var sharedLines = checkSameLine ( stationOne, stationTwo );
	if ( sharedLines.length > 0 ) {
		var wholeJourney = trip (stationOne, stationTwo);
	};
	if ( sharedLines.length <= 0 ) {
		var firstLeg = trip (stationOne, "Union Square");
		var secondLeg = trip ("Union Square", stationTwo);
		var wholeJourney = firstLeg.concat(secondLeg);
	};
	//What is being returned needs to be more useful, just an array
	//Does not log where you change if you are changing.
		return wholeJourney;
};