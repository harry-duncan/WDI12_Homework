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
var lineN = ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'];
var lineL = ['8th', '6th', 'Union Square', '3rd', '1st'];
var line6 = ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place'];
var trainMap = "\n" + lineN.join(' -- ').replace(/Union Square/, '\t\t\t') + '\t\t\t\t\t\t\tLINE N\n' +
"\t\t\t\t\t\t\t\t\t\t\\\t\t\t/\n" +
"\t\t\t\t\t\t\t" + lineL.join(' -- ') + "\t\t\t\tLINE L\n" +
"\t\t\t\t\t\t\t\t\t\t/\t\t\t\\\n" +
line6.join(' -- ').replace(/Union Square/, '\t\t\t') + "\t\t\t\t\tLINE 6\n\n";  // picture of the train map, works best in chrome


var planTrip = function(fromLine, fromStop, toLine, toStop){
  console.log(['START: line', fromLine, 'stop', fromStop, 'TO:', 'line', toLine, 'stop', toStop].join(' '));
  console.log(trainMap);
  var res = null;
  if (fromLine === toLine && fromStop === toStop || (fromStop === 'Union Square' && toStop === 'Union Square')){
    console.log("You don't need to take a train idiot");
    return;
  }
  if (fromLine !== toLine){ // need to switch lines
    res = getStops(fromLine, fromStop, 'Union Square');
    res = res.concat(getStops(toLine, 'Union Square', toStop));
  }else{ // single line travel
    res = getStops(toLine, fromStop, toStop);
  }
  printTrip(fromLine, toLine, res);
};

// retrieve line array from string
var getLine = function(line){
  var res = null;
  if (line === 'N'){
    res = lineN;
  }else if (line === 'L'){
    res = lineL;
  }else if (line === '6'){
    res = line6;
  }
  return res;
};

// get a subarray from 'line' array from 'fromStop' to 'toStop'.
// if fromStop comes after toStop, it returns the subarray in reverse order
// params
//    line - string
//    fromStop - string
//    toStop - string
// return
//    subarray of stops in right order
var getStops = function(line, fromStop, toStop){
  var res = null;
  line = getLine(line);
  var from = line.indexOf(fromStop);
  var to = line.indexOf(toStop);
  if (from < to){
    res = line.slice(from, to + 1);   // +1 to include last stop
  }else{
    res = line.slice(to, from + 1).reverse();
  }
  res.shift(); // don't need fromStop
  return res;
};

// helper function that prints the stops for the planTrip function
// startLine - string
// endLine - string
// trip - array computed from planTrip function
var printTrip = function(startLine, endLine, trip){
  var msg = "Your must travel through the following stops on the " + startLine +  " line: ";
  if (startLine !== endLine){
    var us = trip.indexOf('Union Square');
    msg += trip.slice(0, us + 1).join(', ') + '.' + '\nChange at union square.\n' +
          "Your journey continues through the following stops on the " + endLine +
          " line: " + trip.slice(us + 1).join(', ') + '.' + " # stops: " + trip.length;
  }else{
    msg += trip.join(', ') + '.';
  }
  console.log(msg);
}
// var t = planTrip('N', 'Times Square', 'N', '8th'); // single line forward all stops
// var t = planTrip('N', '8th', 'N', 'Times Square'); // single line backward all stops
// var t = planTrip('N', '34th', 'N', '23rd');        // single line forward partial stops
// var t = planTrip('N', '34th', 'N', '34th');        // same line and stop
// var t = planTrip('6', 'Grand Central', '6', 'Astor Place');    // line 6 all stops
// var t = planTrip('L', '8th', 'L', '1st');          // line L all stops
var t = planTrip('N', 'Times Square', '6', '33rd');  // diff lines forward then backward
// var t = planTrip('6', 'Astor Place', 'L', '8th');    // diff lines backwards
// var t = planTrip('6', 'Union Square', 'L', 'Union Square');  // diff lines same station
// var t = planTrip('L', '1st', 'N', '8th');               // diff lines backward then forward




