// Exercises: Animation
// The Cat Walk

// Who needs Milan when you have JavaScript?

// Start with this webpage, which has a single img tag of an animated GIF of a cat walking.

// Create a new Javascript file and link to it with a script tag at the bottom.
// Create a variable to store a reference to the img.
// Change the style of the img to have a "left" of "0px", so that it starts at the left hand of the screens.
// Create a function called catWalk() that moves the cat 10 pixels to the right of where it started, 
//by changing the "left" style property.
// Call that function every 50 milliseconds. Your cat should now be moving across the screen from left to right. Hurrah!

// Bonus #1: When the cat reaches the right-hand of the screen, 
//restart them at the left hand side ("0px"). So they should keep walking from left to right across the screen, forever and ever.

// Bonus #2: When the cat reaches the right-hand of the screen, 
//make them move backwards instead. They should keep walking back and forth forever and ever.

// Bonus #3: When the cat reaches the middle of the screen, 
//replace the img with an image of a cat dancing, keep it dancing for 10 seconds, 
//and then replace the img with the original image and have it continue the walk.

	
		var time1;
		var flg=0;	//二重起動防止フラグ
		var x=100;	// cat spped!
		document.getElementById("pic").style.left = "0px";
		
 
		function moveImg() {
			if(flg==1){

				//flgが1ならば、処理を中断
				return;
			} else {
				//flgがゼロならば、flgに１を代入して処理を継続
				flg=1;
				document.getElementById("pic").src = "http://www.anniemation.com/clip_art/images/cat-walk.gif";
			}

				//if(x < window.innerWidth){

				time = setInterval( function () {
					
						var cat = document.getElementById("pic");
						cat.style.left = parseInt(cat.style.left) + x + "px";
		 
						document.getElementById("debug").innerHTML = cat.style.left;//猫の左端の、画面左端からの距離。

						if ( parseInt(cat.style.left) + cat.width >= window.innerWidth ){
							cat.style.transform = "scaleX(-1)";

							x = -100;
						
						}　else if ( parseInt(cat.style.left) <= 0 ) {
							cat.style.transform = "scaleX(1)";
							
							x = 100;
						
						}　

				},200)
				
		};
 
		function stopImg() {
			//タイマー処理を解除し、flgにゼロを代入
			clearInterval(time);
			document.getElementById("pic").src = "http://livedoor.4.blogimg.jp/baku_soku/imgs/9/8/987f167d.gif";
			flg=0;	
			
		};



// function showimg1(){
// document.getElementById("pic").src = "http://livedoor.4.blogimg.jp/baku_soku/imgs/9/8/987f167d.gif";
// };

// function showimg2(){
// document.getElementById("pic").src = "http://www.anniemation.com/clip_art/images/cat-walk.gif";
// };





