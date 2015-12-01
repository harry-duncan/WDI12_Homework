// MTA Lab
// Objectives:

// Apply your knowledge of Javascript to solve a real world problem.
// Get really good at array manipulation.
// Activity

// Create a program that models a simple subway system.

//The program takes the line and stop that a user is getting on at and the line 
//and stop that user is getting off at 
//and prints the journey and the total number of stops for the trip in the console:

// planTrip('N', 'Times Square', '6', '33rd'); // This is only a suggested function name and signature.

// // console.log() shows output similar to this:
// // "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
// // "Change at Union Square."
// // "Your journey continues through the following stops: 23rd, 28th, 33rd."
// // "7 stops in total."

// There are 3 subway lines:
// The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
// The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
// The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.

// All 3 subway lines intersect at Union Square, but there are no other intersection points. 
//(For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, 
	//so you'll have to differentiate this when you name your stops in the arrays.)
// Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.

// Hints:
// using lots of index function.

// Work out how you would do it on paper first! Then start to explain that process in Javascript.
// Get the program to work for a single line before trying to tackle multiple lines.
// Don't worry about prompting the user for input. Hard code some values to get it working. 
//You can use prompt() later to make it more interactive.
// Consider diagramming the lines by sketching out the subway lines and their stops and intersection.
// The key to the lab is finding the index positions of each stop. (hint: indexOf())
// Make sure the stops that are the same for different lines have different names 
//(i.e. 23rd on the N and on the 6 need to be differentiated)

//WORKFLOW
// find index of getonstation(start station)
// calculate steps between start to Union Sqaure
// find index of destination(end)
// calculate stops between start to end(station)

var lines = {
				N: ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
 				L: ["8th", "6th", "Union Square", "3rd", "1st"],
 				"6": ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]

 			};

// get line1(start line) as array.
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
	// console.log(line);
	return line;///return line as array.
};


// get line2(end line) as array
var findLine2 = function(line2){

	var line;

	if (line2 === "N") {

		line = lines.N;
		//console.log(line.indexOf(startStation));
	} else if (line2 === "L"){

		line = lines.L;
		//console.log(line.indexOf(startStation));
	} else if (line2 === "6"){

		line = lines["6"];
		//console.log(line.indexOf(startStation));
	}
	// console.log(line);
	return line;///return line2 as array.
};


// get indexof starting station.
var getTrip1 = function(line1, station1) {
	
	var staLine1 = findLine1(line1); //return line as ARRAY from above function.
    return staLine1.indexOf(station1); // return indexof starting station.

};


// get index of end station line2
var getTrip2 = function(line2, station2) {
	
	var staLine2 = findLine2(line2); //return line as ARRAY from above function.
    return staLine2.indexOf(station2); // return indexof End station.

};


///get indexOf to Union Square on line1
var tripToUS = function(line1, station1){

	var indexOfus = findLine1(line1).indexOf("Union Square");
	return indexOfus;

};

//get indexOf Union Square on line2.
var indexUsOnLine2 = function(line2, station2){

	var indexOfUS = findLine2(line2).indexOf("Union Square"); 
	return indexOfUS;
	// console.log(indexOfUS);
};

// //get index of end station on line2.
// var indexEndOnline2 = function(line2, station2){

// 	var indexOfEnd = findLine2(line2).indexOf(station2);
// 	return indexOfEnd;
// }


///get final outputs.
var planTrip = function(line1, station1, line2, station2){

	var indexOfSta = getTrip1(line1, station1);
	var arrayOfSta = findLine1(line1);
	var indexOfEnd = getTrip2(line2, station2);
	var arrayOfEnd = findLine2(line2);
	var indexOfUsLine1 = tripToUS(line1, station1);
	var indexOfUsLine2 = indexUsOnLine2(line2, station2);

	// console.log(indexOfSta); // 4 
	// console.log(arrayOfSta); // ["8th", "6th", "Union Square", "3rd", "1st"]
	// console.log(indexOfEnd); // 5 
	// console.log(arrayOfEnd); // ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
	// console.log(indexOfUsLine1); //2 on line1
	// console.log(indexOfUsLine2);//4 on line2

	if(line1 === line2){

		if( indexOfEnd > indexOfSta ) { // Single line Forward

			var route = arrayOfSta.slice(indexOfSta + 1, indexOfEnd + 1); ///.slice(sta index, end index) end index is not included.
			console.log("You can stay " + line1 + " line" + " and just get off at " + station2 + ". Your route is " +  route);

			var totalStops = route.length; // 
			console.log(totalStops + " stops in total.");

		} else if ( indexOfSta > indexOfEnd ) { // Single line Backward

			var route = arrayOfSta.slice(indexOfEnd, indexOfSta); 
			var routeReverse = route.reverse();
			
			console.log("You can stay " + line1 + " line" + " and just get off at " + station2 + ". Your route is " +  routeReverse);

			var totalStops = route.length; // 
			console.log(totalStops + " stops in total.");

		}

		

	} else if (line1 !== line2){ 
		
		if( indexOfUsLine1 > indexOfSta ){ //line1 Forward to US

			if ( indexOfEnd > indexOfUsLine2) { // line2 Forwad from US

				var route1 = arrayOfSta.slice(indexOfSta +1 , indexOfUsLine1 + 1); ///.slice(sta index, end index)
					console.log("You must travel through the following stops on the " + line1 + " line: " +  route1);
					console.log("Change at Union Square");

				var route2 = arrayOfEnd.slice(indexOfUsLine2 + 1, indexOfEnd + 1); ///.slice(sta index, end index)
					console.log("Your journey continues through following stops on the " + line2 + " line: " +  route2);

				var totalStops = (route1.length + route2.length);
					console.log(totalStops + " stops in total.");

			} else { //line2 Backward from US (train has to go to reverse direction against index of array.)

				var route1 = arrayOfSta.slice(indexOfSta + 1, indexOfUsLine1 + 1); ///.slice(sta index, end index)
					console.log("You must travel through the following stops on the " + line1 + " line: " +  route1);
					console.log("Change at Union Square");

				var route2 = arrayOfEnd.slice(indexOfEnd, indexOfUsLine2);
				var route2Reverse = route2.reverse(); ///.slice(sta index, end index). s.lice内のindexも逆に。
					console.log("Your journey continues through following stops on the " + line2 + " line: " +  route2Reverse);

				var totalStops = (route1.length + route2.length); 
					console.log(totalStops + " stops in total.");

			}
			
		} else { // line1 backward + US + (forward or backward) 

			if ( indexOfEnd > indexOfUsLine2) { // line2 Forwad from US

				var route1 = arrayOfSta.slice(indexOfUsLine1, indexOfSta); ///.slice(sta index, end index)
				var route1Reverse = route1.reverse();
					console.log("You must travel through the following stops on the " + line1 + " line: " +  route1Reverse);
					console.log("Change at Union Square");

				var route2 = arrayOfEnd.slice(indexOfUsLine2 + 1, indexOfEnd + 1); ///.slice(sta index, end index)
					console.log("Your journey continues through following stops on the " + line2 + " line: " +  route2);

				var totalStops = (route1.length + route2.length);
					console.log(totalStops + " stops in total.");

			} else { //line2 Backward from US (train has to go to reverse direction against index of array.)

				var route1 = arrayOfSta.slice(indexOfUsLine1, indexOfSta); ///.slice(sta index, end index)
				var route1Reverse = route1.reverse();
					console.log("You must travel through the following stops on the " + line1 + " line: " +  route1Reverse);
					console.log("Change at Union Square");

				var route2 = arrayOfEnd.slice(indexOfEnd, indexOfUsLine2);
				var route2Reverse = route2.reverse();
					console.log("Your journey continues through following stops on the " + line2 + " line: " +  route2Reverse);

				var totalStops = (route1.length + route2.length); 
					console.log(totalStops + " stops in total.");


			}
			


		}

		
	}

};


// planTrip("L", "8th", "L", "3rd"); 						//OK line1 = line2,　Forward.
// planTrip("6", "Astor Place", "6", "33rd"); 				//OK line1 = line2, Backward.
// planTrip("L", "1st", "L", "6th"); 						//OK line1 = line2, Backward.
// planTrip("6", "Union Square", "6", "Grand Central"); 	//OK line1 != line2, Backward + Backward.
// planTrip("L", "8th", "6", "Astor Place"); 				//OK line1 != line2, Forward + Forward.
planTrip("N", "Times Square", "6", "33rd"); 				//OK line1 != line2, Forward + Backward.
// planTrip("L", "1st", "6", "Astor Place"); 				//OK line1 != line2, Backward + Forward.
// planTrip("L", "3rd", "N", "8th"); 						//OK line1 != line2, Backward + Forward.
// planTrip("L", "1st", "6", "Grand Central"); 				//OK line1 != line2, Backward + Backward.






// planTrip('N', 'Times Square', '6', '33rd'); // This is only a suggested function name and signature.
// // console.log() shows output similar to this:
// // "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
// // "Change at Union Square."
// // "Your journey continues through the following stops: 23rd, 28th, 33rd."
// // "7 stops in total."






