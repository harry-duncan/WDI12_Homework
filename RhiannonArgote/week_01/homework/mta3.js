var lines = {
	"N" : [ "Times Square", "34th", "28th", "23rd", "Union Square", "8th" ],
	"L" : ["8th", "6th", "Union Square", "3rd", "1st"],
	"6" : ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
}

var firstTrip = function(line, entry, exit) {

var entryPoint = (lines.indexOf(entry)); //returns index position of entry

var exitPoint = (lines.indexOf(exit)); // returns index position of exit

var lineStops = (lines[line]) // array of stations in chosen line - can console.log chosenLine to get list of stations
console.log(lineStops);


if (exitPoint > entryPoint) { // going forwards direction
for ( var i = entryPoint; i < exitPoint; i++ ) {
    var stopsPassed =  lineStops[i];
console.log("You must travel through the following stops on the " + line1 + ": "  + lineStops + "."); //this is logging all 3 lines repeated with a different station right now - need to fix

 }
}

else if (exitPoint < entryPoint) { //going backwards direction
for ( var i = entryPoint; i > exitPoint; i-- ) {
    var stopsPassed =  lineStops[i];
console.log("You must travel through the following stops on the " + line1 + ": "  + stopsPassed + "."); //this is logging all 3 lines repeated with a different station right now - need to fix
    }    
}
};

var secondTrip = function(line2, exit) {

var startLine = line2;
var lineStops = lines[ startLine ];
var entryPoint = lineStops.indexOf("UnionSquare"); //returns index position of entry (always Union Square if there are 2 lines)
var exitPoint = lineStops.indexOf(exit); // returns index position of exit

var numofStops1 = function(entryPoint, exitPoint) {
if (exitPoint > entryPoint) { // going forwards direction
for ( var i = entryPoint; i < exitPoint; i++ ) {
    var stopsPassed =  lineStops[i];
console.log("Your journey continues through the following stops "  + stopsPassed + "."); //this is logging all 3 lines repeated with a different station right now - need to fix 
 }
}

else if (exitPoint < entryPoint) { //going backwards direction
for ( var i = entryPoint; i > exitPoint; i-- ) {
    var stopsPassed =  lineStops[i];
console.log("Your journey continues through the following stops " + stopsPassed + "."); //this is logging all 3 lines repeated with a different station right now - need to fix
    }    
}
};

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

console.log("You must travel through the following stops on the " + line1 ": "  + 34th, 28th, 23rd, Union Square + ".") //need to add function for console log of stops
console.log("Change at Union Square.") // need to log this if line1 !== line2
console.log("Your journey continues through the following stops: " +  23rd, 28th, 33rd + ".") // need to console log the stops on line2
console.log( numofStops + "stops in total") // need to log the total number of stops on both lines