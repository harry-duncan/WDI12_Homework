var img = document.getElementById('bill');

img.style.position = 'absolute';
img.style.top = '0px';


var watchBillFall = function() {
  var oldTop = parseInt(img.style.top);
  var newTop = oldTop + 1;
  img.style.top = newTop + 'px';
};

setInterval(watchBillFall, 50);



var img = document.getElementById('bill');
img.style.opacity = 1.0;

var delta = -0.1;

var fadeToggle = function() {
  img.style.opacity = parseFloat(img.style.opacity) + delta;
  console.log( 'delta', delta, 'opacity', img.style.opacity );

  if (img.style.opacity <= 0) {
    delta = 0.1;
  } else if (img.style.opacity >= 1) {
    delta = -0.1;
  }
};


setInterval(fadeToggle, 500);
