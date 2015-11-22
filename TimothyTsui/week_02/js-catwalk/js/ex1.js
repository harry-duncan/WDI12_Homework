window.onload = function(){
  console.log('cat');
  var cat = document.getElementById('cat');
  cat.style.left = Math.floor(-cat.width / 10) * 10 + 'px';
  console.log(cat.width);
  var delta = 10;
  animTime = 50;

  var initCatWalk = function(){
    cat.src = "http://www.anniemation.com/clip_art/images/cat-walk.gif";
    timerID = setInterval(catWalk, animTime);
  };

  var catWalk = function(){
    var midWindow = innerWidth / 2;
    var catLeft = parseInt(cat.style.left) + delta;
    cat.style.left = catLeft + 'px';
    var catMid = catLeft + cat.width / 2;
    console.log(catLeft, innerWidth, midWindow, animTime);
    if (catMid > midWindow - 5 && catMid < midWindow + 5){ // +5px/-5px of center
      clearInterval(timerID);
      cat.src = "http://media.giphy.com/media/Za7KwK4AMeFq/giphy.gif";
      timerID = setTimeout(initCatWalk, 10000);
    }
    if (catLeft >= innerWidth){
      delta = -10;
      cat.style.transform = "scaleX(-1)";
    }else if (catLeft <= -cat.width){
      delta = 10;
      cat.style.transform = "scaleX(1)";
    }
  };
  toggleCatBtn = document.getElementById('toggleCat');
  var toggleCat = function(){
    if (toggleCatBtn.innerHTML === "start"){
      initCatWalk();
      toggleCatBtn.innerHTML = "stop";
    }else{
      toggleCatBtn.innerHTML = "start";
      clearInterval(timerID);
    }
    console.log(toggleCatBtn); //toggleCatButton.value);
  };
  toggleCatBtn.addEventListener('click', toggleCat);

  fasterBtn = document.getElementById('faster');
  fasterBtn.addEventListener('click', function(){
    if (animTime >= 0){
      animTime -= 25;
      clearInterval(timerID);
      initCatWalk();
    }
  });
  slowerBtn = document.getElementById('slower');
  slowerBtn.addEventListener('click', function(){
    animTime += 25;
    clearInterval(timerID);
    initCatWalk();
  });
};