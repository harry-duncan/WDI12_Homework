// Serge Responds

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

// console.log("TESTING THE CONSOLE")


// var serge = {
//   "respondTo": ["Sure", "Woah, chill out!", "Fine. Be that way!", "Whatever."]
// };


// var sergeFunc = function( text ){
//     if ( text === null ) {
//       console.log(serge.respondTo[2])
//     };
//       for (i = 0; i <= text.length; i++) {
//         var letter = text.charAt(i);
//         if (letter === "?") {
//           console.log(serge.respondTo[0]);
//         }
//       };
//       for (k = 0; k <= text.length; k++) {
//         var character = text.charAt(k);
//         if (character === character.toUpperCase()){
//           console.log("TESTING UPPERCASE")
//         }
//       }; if (text === ""){ 
//         console.log(serge.respondTo[3]);
//       }

// };

// sergeFunc("rarasdfasdf");


//JACKS WAY:


//We need to have an object for this to work.

//Question mark at the end
//All caps
//Emtpy string
//Whatever - anything else

var Serge = {
  respondTo: function ( statement ) {
    if ( this.isQuestion( statement ) ) {
      console.log( "Sure." );
    } else if ( Serge.isEmpty( statement ) ) {
      console.log( "Fine. Be that way!" );
    } else if (Serge.isAllCaps( statement )) {
      console.log( "Woah, chill out!" );
    } else {
      console.log( "Whatever." );
    }
  },

  isEmpty: function (statement) {
    if ( !statement || statement.trim() === "" ) {
      return true;
    }
  },

  isAllCaps: function ( statement ) {
    return statement === statement.toUpperCase();
  },

  isQuestion: function ( statement ) {
    return statement.endsWith("?");
  }
};

Serge.respondTo( "Hello, is it me you're looking for?" )
Serge.respondTo( " " )
Serge.respondTo( "CAPS" )
Serge.respondTo( "Hasdflk" )

//Youre calling a function, inside of an object, using other functions inside of the same object.
