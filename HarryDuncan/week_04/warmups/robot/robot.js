// When robots come off the factory floor, they have no name.

// The first time you boot them up, a random name is generated, such as RX837 or BC811.

// Every once in a while we need to reset a robot to its factory settings, which means that their name gets wiped. The next time you ask, it gets a new name.

// For bonus points

// Did you get it working and is the code clean? If you want to, these are some additional things you could try:

// Random names means a risk of collisions. Make sure the same name is never used twice.




// Need a robot factory that creates objects 

// Need a random name function 

// Need a wipe name function 




// Jacks soloution 




var robot = {
	generateCharacters: function(length){
		var charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
		var characters = "";
		for (var i = 0; i < length; i++) {
			var randomNumber = Math.floor(Math.random() * 26);
			characters += charset[randomNumber]
		};
		console.log(characters);
		return characters;
	},
	generateNumbers: function(min, max){
		var randomNumber = Math.floor(Math.random() * (max - min) + min);
		return randomNumber;
	},
	create: function(){
		return {
			name: this.generateNumbers(2) + this.generateNumbers(100,999),
			reset: function(){
				console.log(this.name)
				this.name = robot.generateNumbers(2) + robot.generateNumbers(100,999),
				return this.name;
			}
		}
	},
};


































