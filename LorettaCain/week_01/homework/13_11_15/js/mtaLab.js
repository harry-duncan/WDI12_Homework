

// MTA Lab
// Objectives:

// Apply your knowledge of Javascript to solve a real world problem.
// Get really good at array manipulation.
// Activity

// Create a program that models a simple subway system.

// The program takes the line and stop that a user is getting on at and the line and stop that user is getting off at and prints the journey and the total number of stops for the trip in the console:

// planTrip('N', 'Times Square', '6', '33rd'); // This is only a suggested function name and signature.

// // console.log() shows output similar to this:
// // "Your must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
// // "Change at Union Square."
// // "Your journey continues through the following stops: 23rd, 28th, 33rd."
// // "7 stops in total."
// There are 3 subway lines:
// The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
// The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
// The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
// All 3 subway lines intersect at Union Square, but there are no other intersection points. (For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you'll have to differentiate this when you name your stops in the arrays.)
// Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.
// Hints:

// Work out how you would do it on paper first! Then start to explain that process in Javascript.
// Get the program to work for a single line before trying to tackle multiple lines.
// Don't worry about prompting the user for input. Hard code some values to get it working. You can use prompt() later to make it more interactive.
// Consider diagramming the lines by sketching out the subway lines and their stops and intersection.
// The key to the lab is finding the index positions of each stop. (hint: indexOf())
// Make sure the stops that are the same for different lines have different names (i.e. 23rd on the N and on the 6 need to be differentiated)



//EXAMPLE planTrip('N', 'Times Square', '6', '33rd')

//JOEL'S HINT: DO THIS

// var lines = {
//   N: [ '8th', 'whatever', 'etc'],
//   L: ['7th', 'Union Square', 'etc'],
//   '6': ['25th', 'Times Square', 'etc']
// }

//STEP TWO:
//Figure out how the fuck to do this: "Your must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."

//Object.keys(obj)   ...Object.keys(subLines)[0]
//subLines.N.indexOf('34th')

// Going backwards - use the index of, decide whether the start stop is earlier in the array than the end stop, if it is do the same for loop, if not, do the opposite, do a loop that goes down (-)

//   _____             _      _ __              ___     _                                            
//  |_   _|    _ _    (_)    | '_ \    o O O   | _ \   | |    __ _    _ _     _ _      ___      _ _  
//    | |     | '_|   | |    | .__/   o        |  _/   | |   / _` |  | ' \   | ' \    / -_)    | '_| 
//   _|_|_   _|_|_   _|_|_   |_|__   TS__[O]  _|_|_   _|_|_  \__,_|  |_||_|  |_||_|   \___|   _|_|_  
// _|"""""|_|"""""|_|"""""|_|"""""| {======|_| """ |_|"""""|_|"""""|_|"""""|_|"""""|_|"""""|_|"""""| 
// "`-0-0-'"`-0-0-'"`-0-0-'"`-0-0-'./o--000'"`-0-0-'"`-0-0-'"`-0-0-'"`-0-0-'"`-0-0-'"`-0-0-'"`-0-0-');


var subLines = {
  "N": [ 'Times Square', '34th', '28th', '23rd', 'Union Square', '8th'],
  "L": ['8th', '6th', 'Union Square', '3rd', '1st'],
  "6": ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place']
}

var initialStreetStop;
var departureStreetStop;
var finalDepartingLine;


var sameLine = function( theSameLine ){
  console.log( "ALL STOPS IN YOUR TRIP:" );


  if ( initialStreetStop <= departureStreetStop ) {

    for (var s = initialStreetStop; s <= departureStreetStop; s++ ) {
      console.log(subLines[theSameLine][s]);
    }

  }  else {

    for (var s = initialStreetStop; s >= departureStreetStop; s-- ) {
      console.log(subLines[theSameLine][s]);
    }

  }

};


var logToUnion = function( initialStation){
    console.log("\nALL STOPS TO UNION SQUARE:")

    if (initialStreetStop <= subLines[initialStation].indexOf('Union Square')) {

      for (var i = initialStreetStop; i <= subLines[initialStation].indexOf('Union Square'); i++ ) {
          console.log(subLines[initialStation][i]);
      }

    } else {

      for (var i = initialStreetStop; i >= subLines[initialStation].indexOf('Union Square'); i-- ) {
        console.log(subLines[initialStation][i]);
      }

    }
              
};

var logFromUnion = function( finalDestination ){
    console.log("\nCHANGE AT UNION SQUARE, CONTINUE YOUR JOURNEY ON LINE " + finalDepartingLine + " FROM UNION SQUARE:")

    if ( subLines[finalDestination].indexOf('Union Square') <= departureStreetStop) {

      for (var k = subLines[finalDestination].indexOf('Union Square') ; k <= departureStreetStop; k++ ) {
        console.log(subLines[finalDestination][k]);
      }

    } else {

      for (var k = subLines[finalDestination].indexOf('Union Square') ; k >= departureStreetStop; k-- ) {
        console.log(subLines[finalDestination][k]);
      }

    }
};

var compareInitialLineToFinalLine = function( initialLine, finalLine ) {
  // console.log( "\nCOMPARING LINES! \n\n" )
  // console.log( "initialLine: ", initialLine );
  // console.log( "finalLine: ", finalLine );

  if ( initialLine === finalLine ) {

    sameLine(initialLine);

  } else {

    logToUnion(initialLine);
    logFromUnion(finalLine);

  }

};

var planTrip = function(lineNameBoarding, lineStopBoarding, lineNameDeparture, lineStopDeparture) {

  initialStreetStop = subLines[lineNameBoarding].indexOf(lineStopBoarding);
  departureStreetStop = subLines[lineNameDeparture].indexOf(lineStopDeparture);
  finalDepartingLine = lineNameDeparture;


  console.log( "TRIP PLANNER! \n\n" )
  console.log( "Starting Line: ", lineNameBoarding );
  console.log( "Starting Location: ", lineStopBoarding );
  console.log( "Departure Line: ", lineNameDeparture );
  console.log( "Departure Location: ", lineStopDeparture );

  compareInitialLineToFinalLine( lineNameBoarding, lineNameDeparture );

};

// var logAllStations = function( subwayLine, boardingStation, departureStation ) {
//     // console.log(subwayLine, boardingStation, departureStation);
//     console.log( "\nALL STATIONS IN YOUR TRIP!\n\n" );
//     console.log( "subwayLine: ", subwayLine );

   
//     console.log( "subLines[" + subwayLine + "]: " )
//     console.log( subLines[subwayLine] );
// };


var startingLine = prompt("Please enter your starting subway line name:");
var startingStation = prompt("Please enter the name of the stop you are boarding from:");
var departureLine = prompt("Please enter your disembarking subway line name:");
var departureStation = prompt("Please enter the name of the stop you are departing from:");
planTrip( startingLine, startingStation, departureLine, departureStation );

// planTrip( "N", "28th", "6", "33rd" );

// planTrip(subLines.N [1], null, null, null);

//** CHANGE THIS TO THE USER PROMPT INFO LATER **//

// logAllStations('N', 'Times Square', '28th');

// compareInitialLineToFinalLine('N', 'L');


/**
1. Make a function that logs all the stations on one line between two stops.
2. Make a function that compares starting train line to your final train line, if they are the same - use function 1., if they are different use function 1 twice by stopping at union square and starting the next line at union square.
3. Make a function to count the number of stops between my stops. 
**/


//GOAL TONIGHT!: Make a duplicate that only uses the 'sameLine' function