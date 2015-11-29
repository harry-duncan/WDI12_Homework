$(document).ready(function(){
  var acc = {
    savings: 0,
    checking: 0,
    getTotal: function(){
      return this.savings + this.checking;
    }
  };

  var transaction = function(){
    var $accountNode = $(this).closest(".account"); // account div
    var accountType = $accountNode.attr("id");  // checking / savings
    var $inputNode = $accountNode.find("input[type='text']");
    var amt = $inputNode.val(); // amount user wants to withdraw/deposit
    var transactionType = $(this).val();  // withdraw / deposit
    var $balance = $accountNode.find(".balance");   // account balance display
    var otherAccountType = (accountType === "savings") ? "checking" : "savings";
    var $otherBalance = $("#" + otherAccountType).find(".balance");

    // input validation
    if (!isNumber(amt)){
      $inputNode.focus().addClass("zero").removeClass("zero", "slow");
      return;
    }else{
      amt = +amt;
    }

    if (transactionType === "Withdraw"){
      if (acc[accountType] >= amt){
        acc[accountType] -= amt;
      }else if (acc.getTotal() >= amt){
        var diff = amt - acc[accountType];
        acc[accountType] = 0;
        acc[otherAccountType] -= diff;
        $otherBalance.text("$" + acc[otherAccountType].toFixed(2));
      }
    }else if (transactionType === "Deposit"){
      acc[accountType] += amt;
    }

    if (acc[accountType]){
      $balance.removeClass('zero');
    }else{
      $balance.addClass('zero');
    }
    if (acc[otherAccountType]){
      $otherBalance.removeClass('zero');
    }else{
      $otherBalance.addClass('zero');
    }
    $balance.text("$" + acc[accountType].toFixed(2));

    console.log([$(this).val(), "savings:", acc.savings, "checking:", acc.checking, "balance:", acc.getTotal()].join(" "));
  };

  var isNumber = function(str){
    return str && !isNaN(str);
  };

  $("#checking-deposit").on("click", transaction);
  $("#savings-deposit").on("click", transaction);
  $("#checking-withdraw").on("click", transaction);
  $("#savings-withdraw").on("click", transaction);
});