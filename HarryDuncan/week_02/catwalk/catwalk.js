// Goku // powering up or some shit


var fadeGoku = document.getElementById('goku');
fadeGoku.style.opacity = 1.0;

var fadeAway = function() {
  fadeGoku.style.opacity = parseFloat(fadeGoku.style.opacity) - 0.1;
  console.log( fadeGoku.style.opacity );

  if (fadeGoku.style.opacity <= 0) {
    clearInterval(timerID);
    timerID = setInterval(fadeBack, 100);
  }
};

var fadeBack = function() {
  fadeGoku.style.opacity = parseFloat(fadeGoku.style.opacity) + 0.1;
  console.log( fadeGoku.style.opacity );
    
  if (fadeGoku.style.opacity >= 1) {
    clearInterval(timerID);
    timerID = setInterval(fadeAway, 100);
  }
}

var timerID = setInterval(fadeAway, 100);


// Original cat // Moving left and right // This works 


var moveCat = document.getElementById('original-cat');
var movement = 2;

moveCat.style.position = 'absolute';
moveCat.style.left = '0px';


var catMove = function() {
  var oldRight = parseInt(moveCat.style.left);
  var newRight = oldRight + movement;
  moveCat.style.left = newRight + 'px';
  var screensize = window.innerWidth - moveCat.width;
  if (parseInt(moveCat.style.left) >= screensize){
    movement = -2;
    moveCat.style.transform = "scaleX(-1)";
  } else if (parseInt(moveCat.style.left) <= 0){
    movement = 2;
    moveCat.style.transform = "scaleX(+1)";
  }
};

setInterval(catMove, 5);


// 






















