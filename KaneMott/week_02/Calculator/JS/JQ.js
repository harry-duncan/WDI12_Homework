
var square = document.getElementById('square-input');
var halve = document.getElementById('half-input');
var fraction = document.getElementById('percent1-input');
var whole = document.getElementById('percent2-input');
var radius = document.getElementById('area-input');
var button = document.querySelectorAll('button');

var solution = document.getElementById('solution');


var squareIt = function (){
	var input = square.value;
	var result = input*input;
	solution.innerHTML = input+" squared is "+result;
	return result;
}

button[0].addEventListener('click', squareIt)

var halveIt = function (){
	var input = halve.value;
	solution.innerHTML = "Half of "+input+" is "+input/2+".";	
	return input/2;
}

button[1].addEventListener('click', halveIt)

var fractionMe = function (){
	var result = whole.value/fraction.value;
	solution.innerHTML = whole.value+" divided by "+fraction.value+" pieces would be "+result+".";
	return result;
}

button[2].addEventListener('click', fractionMe)

var radiusMe = function(){
	var result = Math.PI*(radius.value*radius.value);
	solution.innerHTML = "The area of a circle that has a radius of "+radius.value+" is "+result+".";
	return result;
}

button[3].addEventListener('click', radiusMe)

