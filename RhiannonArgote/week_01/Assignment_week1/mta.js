var lines = {
	"N" : [ "Times Square", "34th", "28th", "23rd", "Union Square", "8th" ],
	"L" : ["8th", "6th", "Union Square", "3rd", "1st"],
	"6" : ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
}

var goTo = function(line1, station1, line2, station2) {

    var startLine = lines[line1];
    var endLine = lines[line2];
    var entryPoint = startLine.indexOf(station1);
    var exitPoint = endLine.indexOf(station2);
    var unionSquare1 = startLine.indexOf("Union Square");
    var unionSquare2 = endLine.indexOf("Union Square");

    if (line1 === line2 && entryPoint < exitPoint) {
        console.log("You must travel through the following stops on the " + line1 + ":");
        for (var i = entryPoint; i < exitPoint; i++) {
        	var stopsPassed = startLine[i];
        	var numStops = exitPoint - entryPoint;
            console.log( stopsPassed );
        }
        console.log("You travelled " + numStops + " stops");
    }

    if (line1 === line2 && entryPoint > exitPoint) {
        for (var i = entryPoint; i > exitPoint; i--) {
        	var stopsPassed = startLine[i]
        	var numStops = entryPoint - exitPoint;
        	console.log("You must travel through the following stops on the " + line1 + ": "  + stopsPassed + ".");
            console.log("You travelled " + numStops + " stops");
        }
    }
    
    if (line1 != line2 && entryPoint < unionSquare1) {

        for (var i = entryPoint; i < unionSquare1; i++) {
            var stopsPassed = startLine[i];
            var numStops = unionSquare1 - entryPoint;
            console.log("You must travel through " +  stopsPassed + " on the "+  line1);
        }
    }

    if (line1 != line2 && entryPoint > unionSquare1) {
        for (var i = entryPoint; i > unionSquare1; i--) {
            var stopsPassed = startLine[i];
            var numStops = entryPoint - unionSquare1;
            console.log("You must travel through stopsPassed on the "+  line1);
        }
    }

    if (line1 != line2 && exitPoint < unionSquare2) {
        for (var i = entryPoint; i < unionSquare2; i++) {
            var stopsPassed = startLine[i];
            var numStops = unionSquare2 - entryPoint;
            console.log("You must travel through stopsPassed on the "+  line1);
        }
    }

    if (line1 !== line2 && exitPoint > unionSquare2) {
        for (var i = exitPoint; i > unionSquare2; i--) {
            var stopsPassed = startLine[i];
            var numStops = entryPoint - unionSquare2;
            console.log("You must travel through " + stopsPassed + " on the "+  line2);
        }    
    }
}