

// var img = document.getElementById('walkingCat');

// img.style.position = 'absolute';
// img.style.top = '0px';
// img.style.left = '0px';
// img.style.right = '0px';

// var catWalkLeft = function() {
//     // var oldTop = parseInt(img.style.top);
//     // var newTop = oldTop + 1;
//     var oldLeft = parseInt(img.style.left);
//     var newLeft = oldLeft + 1;

//     // img.style.top = newTop + 'px';
//     img.style.left = newLeft +'px';


//     if (parseInt( img.style.left ) >= (window.innerWidth - 250)) {
//       console.log('stopping!');
//         clearInterval(timerID);
//     }
// };

// var catWalkRight = function() {

//     // var oldTop = parseInt(img.style.top);
//     // var newTop = oldTop + 1;
//     var oldRight = parseInt(img.style.left);
//     var newRight = oldRight - 1;

//     // img.style.top = newTop + 'px';
//     img.style.left = newRight +'px';

// };


// var timerID = setInterval(catWalkLeft, 10);



//**************************************************

// // var background = document.body.style.backgroundImage= "url('images/PacManbackground.png')";

// var img = document.getElementById('walkingCat');
// var backdrop = document.getElementById('background');

// // var screenWidth = window.innerWidth;
// // catWalk.style.width = screenWidth/3+'px';

// img.style.position = 'absolute';
// img.style.top = '20px';
// img.style.left = '30px';

// var catMovement = +2;

// var catWalk = function() {

// // var screenWidth = window.innerWidth;
// // img.style.width = screenWidth/20+'px';
// // background.style.width = screenWidth+'px';

//   img.style.left = parseInt(img.style.left) + catMovement + 'px';
//   // console.log('catMovement', catMovement, 'left', img.style.left );

//   if ( parseInt(img.style.left) <= 0 ) {
//     catMovement = +2;
//     img.style.webkitTransform = "scaleX(+1)"
//   } else if ( parseInt(img.style.left) >= 300) {
//     catMovement = -2;
//     img.style.webkitTransform = "scaleX(-1)"
//   }
// }


// // //================MAZE CODE===============
// // var catMovements = +10;

// // var catMan = function() {
// //   img.style.left = parseInt(img.style.left) + catMovements + 'px';
// //   var counter;
// //   if (parseInt(img.style.left) >= 300 ) {
// //     counter = 1;
// //     catMovements = -2;
// //   };

// //  // if ( counter === 1 ) {
// //  //    catMovements = +2;
// //  //  };



// // };


// // var makeKittyMove = setInterval(catMan, 10);

// var makeCatWalk = setInterval(catWalk, 20);






//========================================================
//**DON'T TOUCH THIS, IT WORKS!**

// var background = document.body.style.backgroundImage= "url('images/PacManbackground.png')"

// var img = document.getElementById('walkingCat');

// img.style.position = 'absolute';
// img.style.top = '0px';
// img.style.left = '0px';

// var catMovement = +2;

// var catWalk = function() {

//   img.style.left = parseInt(img.style.left) + catMovement + 'px';
//   console.log('catMovement', catMovement, 'left', img.style.left );

//   if ( parseInt(img.style.left) <= 0 ) {
//     catMovement = +2;
//     img.style.webkitTransform = "scaleX(+1)"
//   } else if ( parseInt(img.style.left) >= window.innerWidth - 270) {
//     catMovement = -2;
//     img.style.webkitTransform = "scaleX(-1)"
//   }
// }


// var makeCatWalk = setInterval(catWalk, 20);


//**************************************************
//**ALSO DON'T TOUCH THIS:
//**THIS MAKES THE BACKGROUND AND CAT SIZE UP AND DOWN**

// var background = document.body.style.backgroundImage= "url('images/PacManbackground.png')";

var img = document.getElementById('walkingCat');
var backdrop = document.getElementById('background');

// var screenWidth = window.innerWidth;
// catWalk.style.width = screenWidth/3+'px';

img.style.position = 'absolute';
img.style.top = window.innerWidth/3.4 + 'px';
img.style.left = '0px';

var catMovement = +2;

var catWalk = function() {

var screenWidth = window.innerWidth;
// background.style.width = screenWidth/3+'px';
img.style.width = screenWidth/20+'px';
background.style.width = screenWidth+'px';

  img.style.left = parseInt(img.style.left) + catMovement + 'px';
  // console.log('catMovement', catMovement, 'left', img.style.left );

  if ( parseInt(img.style.left) <= 0 ) {
    catMovement = +2;
    img.style.webkitTransform = "scaleX(+1)"
  } else if ( parseInt(img.style.left) >= screenWidth - 20) {
    catMovement = -2;
    img.style.webkitTransform = "scaleX(-1)"
  }
}


var makeCatWalk = setInterval(catWalk, 20);