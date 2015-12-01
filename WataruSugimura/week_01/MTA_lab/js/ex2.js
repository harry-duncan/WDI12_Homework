

var lines = {
				N: ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
 				L: ["8th", "6th", "Union Square", "3rd", "1st"],
 				"6": ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]

 			};

var findLine1 = function(line1){
	var line;
	if (line1 === "N") {
		line = lines.N;
		//console.log(line.indexOf(startStation));
	} else if (line1 === "L"){
		line = lines.L;
		//console.log(line.indexOf(startStation));
	} else if (line1 === "6"){
		line = lines["6"];
		//console.log(line.indexOf(startStation));
	}
	//console.log(line);
	return line;///return line as array.
}

findLine1("6");