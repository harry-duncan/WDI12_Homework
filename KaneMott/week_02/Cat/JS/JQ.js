var catWalk = document.getElementById('walkCat');
catWalk.style.position= 'absolute'; 
catWalk.style.left = '0px'; 
catWalk.style.top = '0px'; 

var moveLeft = +10;

var move = function() {

var x = window.innerWidth;
var y = window.innerHeight;

  catWalk.style.left = parseInt(catWalk.style.left) + moveLeft+'px';
  // console.log(parseInt(catWalk.style.left));
  if (parseInt(catWalk.style.left) <= 0) {
    moveLeft = +10;
     catPace++;
    catWalk.style.webkitTransform = 'scaleX(+1)';
  } else if (parseInt(catWalk.style.left) >= (x-270)) {
  	catWalk.style.webkitTransform = 'scaleX(-1)';
    moveLeft = -10;
  }


//FUN BEGIN HERE.
  if (catPace === 6){
  	clearInterval(walkStart);
    catWalk.src = "./Images/at-at_faceplant.gif"
    catWalk.style.webkitTransform = 'scaleX(-1)';
    catWalk.style.zIndex = '1';
    var kitKat = document.createElement("AUDIO");
    kitKat.src = './Audio/KeyboardCat(JumpstyleRemix).mp3';
    kitKat.play();
    setTimeout(FUNPLACE, 3500);
    setTimeout(kickit, 3500);
    
  }


};
var catPace = 0;
var walkStart = setInterval(move, 10);

//--------------------FUN ZONE-----------------------



var FUNPLACE = function () {
document.body.style.backgroundImage = "url('./images/rainbro.gif')";

catDance = document.createElement('img');
catDance.id = "kitty";
catDance.src = "./Images/CATDANCE.gif";

JDance = document.createElement('img');
JDance.id = "Joel";
JDance.src = "./Images/Jdance.gif";

catDanceToo = document.createElement('img');
catDanceToo.id = "kittytoo";
catDanceToo.src = "./Images/lX5wEnQ.gif";

catDanceThree = document.createElement('img');
catDanceThree.id = "kittythree";
catDanceThree.src = "./Images/VgJXN9S.gif";

headNod = document.createElement('img');
headNod.id = "headnod";
headNod.src = "./Images/AV3D9KG.gif";

whoa = document.createElement('img');
whoa.id = "whoa";
whoa.src = "./Images/Cat-eyes-dilate.gif";

catWalk.src = "./Images/CATDANCE.gif"
document.body.appendChild(whoa);
document.body.appendChild(catDance);
document.body.appendChild(JDance);
document.body.appendChild(catDanceToo);
document.body.appendChild(catDanceThree);
document.body.appendChild(headNod);
var eyez = document.getElementById('whoa');
eyez.style.position = "absolute;"
eyez.style.left = "800px";
eyez.style.top = "200px";

}
whoa = document.createElement('img');
whoa.id = "whoa";
whoa.src = "./Images/Cat-eyes-dilate.gif";
var whoa = document.getElementById('whoa');
var spinme = +1;
var randomX;
var randomY;
var kickit = function ()
{setInterval(moverandom, 30)};
var moverandom = function() {

var x = window.innerWidth;
var y = window.innerHeight;
randomX = (Math.floor((Math.random() * 100) + -50));
randomY = ((Math.floor((Math.random() * 100) + -50)));
spinme = spinme+spinme;
console.log(spinme)
whoa.style.webkitTransform = "rotate("+spinme+"deg)";

  catWalk.style.left = parseInt(catWalk.style.left) + randomX+'px';
  // console.log(parseInt(catWalk.style.left));
  if (parseInt(catWalk.style.left) < 0) {
    catWalk.style.left = '0px';
    catWalk.style.webkitTransform = 'scaleX(+1)';
  } else if (parseInt(catWalk.style.left) >= (x)) {
    catWalk.style.webkitTransform = 'scaleX(-1)';
    catWalk.style.left = '0px';
  }

  catWalk.style.top = parseInt(catWalk.style.top) + randomY+'px';
  // console.log(parseInt(catWalk.style.left));
  if (parseInt(catWalk.style.top) <= 0) {
    catWalk.style.top = '30px';
    catWalk.style.webkitTransform = 'scaleX(+1)';
  } else if (parseInt(catWalk.style.top) >= (y)) {
    catWalk.style.webkitTransform = 'scaleX(-1)';
    catWalk.style.top = '30px';
  }
}


