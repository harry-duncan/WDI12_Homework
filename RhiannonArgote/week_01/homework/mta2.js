var lines = {
	"N": [ "Times Square", "34th", "28th", "23rd", "Union Square", "8th" ],
	"L": ["8th", "6th", "Union Square", "3rd", "1st"],
	"6": ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
};

var firstTrip = function(line1, entry, exit) {

var lineStops = lines[ line1 ];
var entryPoint = lineStops.indexOf(entry); //returns index position of entry
var exitPoint = lineStops.indexOf(exit); // returns index position of exit

if (exitPoint > entryPoint) {
for ( var i = entryPoint; i < exitPoint; i++ ) {
    var stopsPassed =  lineStops[i];
console.log("You must travel through the following stops on the " + line1 + ": "  + stopsPassed + "."); //this is logging all 3 lines repeated with a different station right now - need to fix
 }
}

else if (exitPoint < entryPoint) {
for ( var i = entryPoint; i > exitPoint; i-- ) {
    var stopsPassed =  lineStops[i];
console.log("You must travel through the following stops on the " + line1 + ": "  + stopsPassed + "."); //this is logging all 3 lines repeated with a different station right now - need to fix
    }    
}
};

firstTrip("N", "34th", "Times Square");

var secondTrip = function(line2, exit) {

var lineStops = lines[line2];
var entryPoint = lineStops.indexOf("UnionSquare"); //returns index position of entry (always Union Square if there are 2 lines)
var exitPoint = lineStops.indexOf(exit); // returns index position of exit

if (exitPoint > entryPoint) {
for ( var i = entryPoint; i < exitPoint; i++ ) {
    var stopsPassed =  lineStops[i];
console.log("You must travel through the following stops on the " + line2 + ": "  + stopsPassed + "."); //this is logging all 3 lines repeated with a different station right now - need to fix
 }
}

else if (exitPoint < entryPoint) {
for ( var i = entryPoint; i > exitPoint; i-- ) {
    var stopsPassed =  lineStops[i];
console.log("You must travel through the following stops on the " + line2 + ": "  + stopsPassed + "."); //this is logging all 3 lines repeated with a different station right now - need to fix
    }    
}
};



secondTrip("L", "1st");

var numStops2 = function(line1, entry, line 2, exit) {

var startLine = lines.indexOf(line1); 
var lineSelecion = lines[ startLine ];
var entryPoint = lineStops.indexOf(entry); //returns index position of entry
var exitPoint = lineStops.indexOf(exit); // returns index position of exit

if (line1 === line2 && entry < exit) {
	var numofStops = exitPoint - entryPoint;
}

else if (line1 === line2 && entry > exit) {
	var numofStops = entryPoint - exitPoint;
}

}

function planTrip(line1, startStation, line2, endStation)  {
  if (line1 !== line2) {
    firstTrip(line1, startStation, "Union Square")
    secondTrip(line2, "Union Square", endStation)
  } else {
    firstTrip(line1, startStation, endStation)
  }
}