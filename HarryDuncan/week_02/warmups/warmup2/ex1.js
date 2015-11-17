// <!-- Serge Responds

// Serge answers 'Sure.' if you ask him a question.

// He answers 'Woah, chill out!' if you yell at him (ALL CAPS).

// He says 'Fine. Be that way!' if you address him without actually saying anything.

// He answers 'Whatever.' to anything else.

// To call the function, we want to be able to do something like this - Serge.respondTo( "Some string here" )

// What do you need to do?

// Make your HTML and JS files
// Make sure you work with an object to get this working - remember to keep your functions small!
// Figure out the appropriate response
// If you are flying through, do something cool with the CSS or work more on the homework from last night


//  -->



// var serge = {
// 	yell: 'Whoa chill out',
// 	nothing: 'Fine, be that way',
// 	anything: 'whatever'
// }




// var sergeResponds = function(question){
// 	var response = [];
// 	for (var i = 0; i < serge.length; i++) {
// 		var answer = serge[i];
// 		responseIterator: for (var question in serge){
// 			if (serge[i].indexOf(question) === question ){
// 				response.push[i];
// 			}
// 		}
// 	}
// 	console.log('serge says ' + response + ' to ' + question + '.')

// }

// sergeResponds('yell')
// sergeResponds('nothing')
// sergeResponds('question')




// We need to have an object for this to work and we need to have lots of little methods

// Question mark at the end
// All caps
// Empty sting 
// Whatever 

var serge = {
	respondTo: function ( statement ){
		console.log( statement )
	}

	isQuestion: function ( statement ){
		return statement.endsWith("?")
	}
}



















