var N = ["timesSquare", "34th", "028th", "023rd", "unionSquare", "08th"];
var L = ["8th", "6th", "union_Square", "3rd", "1st"];
var six = ["grand_Central","33rd", "28th", "23rd", "unionSquare","astorPlace"];

// Three Simple Trips

// timesSquare on the N Line to unionSquare on the N Line
// unionSquare on the N Line to timesSquare on the N Line
// timesSquare on the N Line to grand_Central on the 6 Line
// 	- timesSquare on the N Line to unionSquare on the N Line
// 	- unionSquare on the 6 Line to grand_Central on the 6 Line





// var planTrip = function (firstStat, UnionSquare, changeLine, finalStat){
	
// };


// var firstStat = function (entry){
// 	for (var i = 0; i < 5; i++){
// 		if(entry === N[i] ){
// 			return N[i];
// 		}else if (entry === L[i]){
// 			return L[i];
// 		}else if (entry === six[i]){
// 			return six[i];
// 		}else{
// 			console.log("Please enter a valid station");
// 		}

// 	};
// };

// firstStat("33rd");

var N = ["timesSquare", "34th", "028th", "023rd", "unionSquare", "08th"];
var L = ["8th", "6th", "Union_Square", "3rd", "1st"];
var six = ["grand_Central","33rd", "28th", "23rd", "unionSquare","astorPlace"];



function isInSameLine(from,to) {
	var a = null;
	var b = null;
	var diff = null;
	var minimumIndex = Math.min( from, to );
	var maximumIndex = Math.max( from, to );

  if(N.indexOf(from) > -1 && N.indexOf(to) > -1){
  	//from & to are on the line N
  		a = N.indexOf(from);
  		b = N.indexOf(to);
  		diff = Math.abs( b - a ); //or Math.abs(N.slice(from,to).length);
  		var revSlicN = N.slice(minimumIndex,maximumIndex).reverse.join(" , ");
  		var slicN = N.slice(minimumIndex,maximumIndex).join(" , ");
  		if (b - a < 0){
  			console.log("You have to take Time Square direction and stop in" + diff + "station(s), you will pass the following stations: "+revSlicN + ".")
		}else if (b - a > 0){
			console.log("You have to take 8th direction and stop in" + diff + "station(s), you will pass the following stations: " + slicN + ".")
		}else{
			console.log("You are already in the station you want to go!!");
		}
  
  		
  }else if((L.indexOf(from) > -1) && (L.indexOf(to) > -1)){
  	//from & to are on the line L
  		a = L.indexOf(from);
  		b = L.indexOf(to);
  		diff = Math.abs( b - a ); //or Math.abs(L.slice(from,to).length);
  		var revSlicL = L.slice(minimumIndex,maximumIndex).reverse.join(" , ");
  		var slicL = L.slice(minimumIndex,maximumIndex).join(" , ");
  		if (b - a < 0){
  			console.log("You have to take 8th direction and stop in" + diff + "station(s), you will pass the following stations: "+revSlicL + ".")
		}else if (b - a > 0){
			console.log("You have to take 1st direction and stop in" + diff + "station(s), you will pass the following stations: " + slicN + ".")
		}else{
			console.log("You are already in the station you want to go!!");
		}

  }else if ((six.indexOf(from) > -1) && (six.indexOf(to) > -1)){
  	//from & to are on the line six
  		a = six.indexOf(from);
  		b = six.indexOf(to);
  		diff = Math.abs( b - a ); //or Math.abs(six.slice(from,to).length);
  		var revSlicSix = six.slice(minimumIndex,maximumIndex).reverse.join(" , ");
  		var slicSix = six.slice(minimumIndex,maximumIndex).join(" , ");
  		if (b - a < 0){
  			console.log("You have to take Grand Central direction and stop in" + diff + "station(s), you will pass the following stations: "+revSlicSix + ".")
		}else if (b - a > 0){
			console.log("You have to take Astor Place direction and stop in" + diff + "station(s), you will pass the following stations: " + slicSix + ".")
		}else{
			console.log("You are already in the station you want to go!!");
		}

  }else{//has to go to Union Square
  	// if false --> Union Square.
  	//return false;
  		if(N.indexOf(from) > -1){
  			a = N.indexOf(from);
  			b = N.indexOf(unionSquare); //=4
  			var revSlicN = N.slice(minimumIndex,maximumIndex).reverse.join(" , ");
  			var slicN = N.slice(minimumIndex,maximumIndex).join(" , ");

  				if (b - a < 0){
  					console.log("You have to take Time Square direction and stop in" + diff + "station(s), you will pass the following stations: "+revSlicN + " to reach Union Square and changing line..")
				}else if (b - a > 0){
					console.log("You have to take 8th direction and stop in" +diff + "station(s), you will pass the following stations: " + slicN + " to reach Union Square and changing line..")
				}else{
					console.log("You are already in Union Square");
				};

  		}else if{
  				a = L.indexOf(from);
  				b = L.indexOf(unionSquare); //=4
  				var revSlicL = L.slice(minimumIndex,maximumIndex).reverse.join(" , ");
  				var slicL = L.slice(minimumIndex,maximumIndex).join(" , ");

  				if (b - a < 0){
  					console.log("You have to take 8th direction and stop in" + diff + "station(s), you will pass the following stations: "+revSlicL + " to reach Union Square and changing line.")
				}else if (b - a > 0){
					console.log("You have to take 1st direction and stop in" +diff + "station(s), you will pass the following stations: " + slicL + " to reach Union Square and changing line.")
				}else{
					console.log("You are already in Union Square");
				};
  		}else {
  				a = six.indexOf(from);
  				b = six.indexOf(unionSquare); //=4
  				var revSlicSix = six.slice(minimumIndex,maximumIndex).reverse.join(" , ");
  				var slicSix = six.slice(minimumIndex,maximumIndex).join(" , ");

  				if (b - a < 0){
  					console.log("You have to take Grand Central direction and stop in" + diff + "station(s), you will pass the following stations: "+revSlicSix + " to reach Union Square and changing line.")
				}else if (b - a > 0){
					console.log("You have to take 
					Astor Place and stop in" +diff + "station(s), you will pass the following stations: " + slicSix + " to reach Union Square and changing line.")
				}else{
					console.log("You are already in Union Square");
				};
  		};

  	};
  };
  







var goToUnion = function(from,union){

}
















