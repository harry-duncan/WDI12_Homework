
// // So it's basically
// // for ( keyName in objects )  {}
// // So it could be for number in numbers
// // Where keyName is just a temporary name for the keys you're accessing
// // for ( keyName in objects )  {}



// // if (lines.[].indexof(start) < lines.[].indexof(end){}


// // You can make the for in loop return a string which is the key name

// // Then in there you could do

// // lines[keyName]

// // So you can do like var keyName = findLine(startLine);

// // Just a thought -- could try in my final function to push all of the results of the fucnction into one array and then print that by combining separate varables // THOOUGHT



// Train lines object // lines.lineN[1] call var name - then key - then array position 

var lines = { 
			lineN: ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'],
			lineL: ['8th street', '6th', 'Union Square', '3rd', '1st'],
			line6: ['Grand Central', '33rd', '28th street', '23rd street', 'Union Square', 'Astor Place']
};

// This is the function to travel from one station to another on one line in any direction // This works 

// This is currently hard coded to work with the lineN array // I need to beable to call the value in key to make this work for all lines so I can use it on any line independantly before i then use it in my final function

var travel = function(start, end){
	var trip = [];
		// debugger;
	if (lineN.indexOf(start) < lineN.indexOf(end)){
		for(var i = lineN.indexOf(start); i < lineN.indexOf(end); i++){
			if (i !== lineN.indexOf(end)){			 // this will be useful for when im changing multiple lines
				trip.push(lineN[i]);
			}
		} 
		console.log('From ' + start + ' You will need to travel through ' + trip + ' to get to ' + end);
	} 	else {
			for(var i = lineN.indexOf(end); i < lineN.indexOf(start); i++){
			console.log('stuff')
			if (i !== lineN.indexOf(start)){ // this will be useful for when im changing multiple lines
			trip.push(lineN[i]);
			}
		}
		console.log('You must travel through these stops' + trip);
	}
	return trip;
}; 

// Test calling travel() // This works 

travel('Times Square','8th')

// This is the function to detect if you need to change at Union Square // This works 

var change = function(startLine, startStop, endLine, endStop){
	if (startLine !== endLine){
		console.log('you need to change at Union Square')
	} else {
		console.log('enjoy your trip')
	}
};

change(lineN, 'Times Square', line6, 'Grand Central')  // This works 


// This is the function to travel to any station from any station  

var journey = function(startStation, endStation){
	var result = [];
	if (startStation === endStation){
		console.log('Please choose another end destination')
	} else if (){
		
	}

	// this will need to bring the start station and end station into the function and then first detect change at union if needed // this will be an if statement calling my detectChange function // if else 

	// i need to print the first line stops first 

	//i need to then print change if needed 

	// then i need to print your journey continues through these other stations on the other line 

	// then i need to tell you how painful your journey is and how many stations youre going to have to travel through
};

journey('Times Square', 'Times Square')


// var obj = { a: 'a', 
// 			b: 'b', 
// 			c: 'c' }

// var check = function(letter){
// 	var result = [];
//     for (key in obj) { 
//        if (obj[key] === letter){
//           result.push(letter)
//        } 
//   }
// }




// var detectVowel = function(letter){
// 	if ( letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u'){
// 		return true;
// 	} else {
// 		return false;
// 	}
// }

// detectVowel('a')
// detectVowel('b')


// var transfer = function(name1, cashMoney, name2){ 
// 			withdraw(name1, cashMoney);
// 			deposit(name2, cashMoney);
// 			console.log(name1 + ' lent $' + cashMoney + ' to this broke ass mofo ' + name2);
// };


















