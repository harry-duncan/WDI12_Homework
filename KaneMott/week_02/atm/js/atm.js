

var $checkingInput = $("#checking-amount"); 
var $savingsInput = $("#savings-amount"); 


var transaction = {

	cDeposit: function (){
	var $checkingInput = parseInt($("#checking-amount").val());
	var $inCheck = parseInt($('#checking-balance').text().replace('$',''));
	var newSum = $inCheck + $checkingInput;
	$('#checking-balance').text("$"+newSum)
	return newSum;
	},

	cWithdraw: function(){
	var $checkingInput = parseInt($("#checking-amount").val());
	var $inCheck = parseInt($('#checking-balance').text().replace('$',''));
	var $savingsInput = parseInt($("#savings-amount").val());
	var $inSavings = parseInt($('#savings-balance').text().replace('$',''));
	var newSum = null;


		// If the withdrawal will take the account below zero
		if ( ( $inCheck - $checkingInput ) < 0) {

			// check of withdrawing the total of both accounts overdraws - if not, do that.
			if ( ($inSavings - ($checkingInput - $inCheck )) >= 0 ){
				newSum = $inSavings - ($checkingInput - $inCheck);
				// newSum is our total funds with the deposit taken out, original account set to zero and the remainder is put in the second account.
				$('#checking-balance').text("$0")
				$('#savings-balance').text("$"+newSum)
				return newSum;
			}
			
		// if it won't overdraw, do the transaction.
		} else {
		newSum = $inCheck - $checkingInput;
		$('#checking-balance').text("$"+newSum);
		return newSum;
		};
	},


	sDeposit: function (){
	var $savingsInput = parseInt($("#savings-amount").val());
	var $inSavings = parseInt($('#savings-balance').text().replace('$',''));
	var newSum = $inSavings + $savingsInput;
	$('#savings-balance').text("$"+newSum)
	return newSum;
	},

	sWithdraw: function(){
	var $checkingInput = parseInt($("#checking-amount").val());
	var $inCheck = parseInt($('#checking-balance').text().replace('$',''));
	var $savingsInput = parseInt($("#savings-amount").val());
	var $inSavings = parseInt($('#savings-balance').text().replace('$',''));
	var newSum = null;

		// If the withdrawal will take the account below zero
		if ( ( $inSavings - $savingsInput ) < 0) {
			// check of withdrawing the total of both accounts overdraws - if not, do that.
			if ( ($inCheck - ($savingsInput - $inSavings )) >= 0 ){
				newSum = $inCheck - ($savingsInput - $inSavings);
				// newSum is our total funds with the deposit taken out, original account set to zero and the remainder is put in the second account.
				$('#savings-balance').text("$0")
				$('#checking-balance').text("$"+newSum)
				return newSum;
			}
			
		// if it won't overdraw, do the transaction.
		} else {
		newSum = $inSavings - $savingsInput;
		$('#savings-balance').text("$"+newSum);
		return newSum;
		};
	},

	// Changes the background depending on whether our account is at zero or not.
	isNull: function(){
		if (parseInt($('#savings-balance').text().replace('$','')) === 0){
			$('#savings-balance').css("background-color", "red")
		} else { $('#savings-balance').css("background-color", "#E3E3E3") }

		if (parseInt($('#checking-balance').text().replace('$','')) === 0){
			$('#checking-balance').css("background-color", "red")
		} else { $('#checking-balance').css("background-color", "#E3E3E3") }
	}

};

transaction.isNull();

// Click withdraw and deposits for Checking.

$("#checking-deposit").click(function(){
	if (($checkingInput.val() != "")&& (jQuery.isNumeric($checkingInput.val()))){
	transaction.cDeposit()
	transaction.isNull();
	}
});

$("#checking-withdraw").click(function(){
	if (($checkingInput.val() != "")&& (jQuery.isNumeric($checkingInput.val()))){
		transaction.cWithdraw()
		transaction.isNull();
	}
});

// Click withdraw and deposits for Savings.

$("#savings-deposit").click(function(){
	if (($savingsInput.val() != "")&& (jQuery.isNumeric($savingsInput.val()))){
		transaction.sDeposit()
		transaction.isNull();
	}
});

$("#savings-withdraw").click(function(){
	if (($savingsInput.val() != "")&& (jQuery.isNumeric($savingsInput.val()))){
		transaction.sWithdraw()
		transaction.isNull();
	}
});
