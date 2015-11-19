var line = {
	N: ["Times Square", "34th", "28th", "23rd", 
	"Union Square", "8th"],
	L: ["8th", "6th", "Union Square", "3rd", "1st"],
	"6": ["Grand Central", "33rd", "28th", "23rd", "Union Square",
	"Astor Place"],
};
//=========
//line finding
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
//==========
//The actual info we want

var trip = function ( stationOne, stationTwo ) {
//Ugh. More bugtesting on this to make this all work.
	var onePos = line[sharedLines[0]].indexOf(stationOne);
	var twoPos = line[sharedLines[0]].indexOf(stationTwo);
	var smallestIndex = Math.min( onePos, twoPos );
	var biggestIndex = Math.max( onePos, twoPos );
	var sharedLines = checkSameLine ( stationOne, stationTwo );
	if (onePos > twoPos ) {
		var betweenStations = sharedLines[0].slice(smallestIndex, biggestIndex)
		betweenStations = betweenStations.reverse();
	};
	if ( onePos < twoPos ) {
		var betweenStations = line[sharedLines[0]].slice(smallestIndex+1, biggestIndex+1)
	};
	return betweenStations
}


var journey = function ( stationOne, stationTwo) {
	var sharedLines = checkSameLine ( stationOne, stationTwo );
	if ( sharedLines.length > 0 ) {
		betweenStations = trip (stationOne, stationTwo);
	};




	if ( sharedLines.length <= 0 ) {
		//If we can write planTrip/logJourney into here
		//Then we can delete both
		//Hmm. We can just do the betweenStations twice and then join them.
		var firstLeg = trip (stationOne, "Union Square");
		var secondLeg = trip ("Union Square", stationTwo);

	};
		return betweenStations;
};