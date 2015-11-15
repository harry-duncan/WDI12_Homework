
// So it's basically
// for ( keyName in objects )  {}
// So it could be for number in numbers
// Where keyName is just a temporary name for the keys you're accessing
// for ( keyName in objects )  {}



// if (lines.[].indexof(start) < lines.[].indexof(end){}


// You can make the for in loop return a string which is the key name

// Then in there you could do

// lines[keyName]

// So you can do like var keyName = findLine(startLine);

// Just a thought -- could try in my final function to push all of the results of the fucnction into one array and then print that by combining separate varables // THOOUGHT

var obj = { a: 'a', 
			b: 'b', 
			c: 'c' }

var check = function(letter){
	var result = [];
    for (key in obj) { 
       if (obj[key] === letter){
          result.push(letter)
       } 
  }
}




var detectVowel = function(letter){
	if ( letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u'){
		return true;
	} else {
		return false;
	}
}

detectVowel('a')
detectVowel('b')


var transfer = function(name1, cashMoney, name2){ 
			withdraw(name1, cashMoney);
			deposit(name2, cashMoney);
			console.log(name1 + ' lent $' + cashMoney + ' to this broke ass mofo ' + name2);
};


















