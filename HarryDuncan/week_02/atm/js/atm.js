// #Title: ATM App

// ###Type:
// - Lab

// ###Summary
// - This lab will help you practice JavaScript functions and manipulating the DOM with jQuery.
// - You'll be selecting elements, manipulating HTML, and manipulating style along
// with building out the logic using JavaScript.

// ###Objectives:
// - DOM selection, appending, removal, updating

// ###Specification:

// * Keep track of the checking and savings balances somewhere // Done


// * Add functionality so that a user can deposit money into one of the bank accounts. // Done

// * Make sure you are updating the display and manipulating the HTML of the page // Done
// so a user can see the change. // Done

// * Add functionality so that a user can withdraw money from one of the bank accounts. // Done

// * Make sure you are updating the display and manipulating the HTML of the page
// so a user can see the change.

// * Make sure the balance in an account can't go negative. If a user tries to
// withdraw more money than exists in the account, ignore the transaction.

// * When the balance of the bank account is $0 the background of that bank account
// should be red. It should be gray when there is money in the account.

// * What happens when the user wants to withdraw more money from the checking
// account than is in the account? These accounts have overdraft protection, so if
// a withdrawal can be covered by the balances in both accounts, take the checking
// balance down to $0 and take the rest of the withdrawal from the savings account.
// If the withdrawal amount is more than the combined account balance, ignore it.

// * Make sure there is overdraft protection going both ways.

// * Are there ways to refactor your code to make it DRYer?

/////////////////////////////////////////////////////////////////////////////////////////////////////////


// Obj of account details 

var accounts = {
	checking: 0,
	savings: 0
};

console.log(accounts);



// Updates my accounts 

var screenBalance = function(){
	$('#savings-balance').html('$' + accounts.savings);
	$('#checking-balance').html('$' + accounts.checking);
};

screenBalance();

// These are the functions for the savings screen could use an || or operator to somehow make this work on both without writing it twice per account for fucks sake 

// Everything can go and DIE rawr! 

var savDeposit = function(){
	var deposit = parseInt($('#savings-amount').val());
	accounts.savings += deposit;
	screenBalance();
};

var savWithdraw = function(){
	var withdraw = parseInt($('#savings-amount').val());
	accounts.savings -= withdraw;
	screenBalance();
};

// These are the functions for the checking screen

var checkDeposit = function(){
	var deposit = parseInt($('#checking-amount').val());
	accounts.checking += deposit;
	screenBalance();
};

var checkWithdraw = function(){
	var withdraw = parseInt($('#checking-amount').val());
	accounts.checking -= withdraw;
	screenBalance();
};


var screenBalance = function(){
	$('#savings-balance').html('$' + accounts.savings);
	$('#checking-balance').html('$' + accounts.checking);
};


// $(document).ready(function(){
// $('#savings-deposit').click(savDeposit());
// $('#savings-withdraw').click(savWithdraw());
// $('#checking-deposit').click(checkDeposit());
// $('#checking-withdraw').click(checkWithdraw());
// });




