// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long
  var oneNoPrefix = cardNumber.slice(0,1);
  var twoNoPrefix = cardNumber.slice(0,2);
  var threeNoPrefix = cardNumber.slice(0,3);
  var fourNoPrefix = cardNumber.slice(0,4);
  var sixNoPrefix = cardNumber.slice(0,6);
  var length = cardNumber.length;
  var network = null;

  // Once you've read this, go ahead and try to implement this function, then return to the console.
  if ((sixNoPrefix>=622126 && sixNoPrefix<=622925) || (threeNoPrefix>=624 && threeNoPrefix<=626) ||
   		(fourNoPrefix>=6282 && fourNoPrefix<=6288)){
  	if (length >= 16 && length <= 19){
  		network = 'China UnionPay';
  	}
  }else if (fourNoPrefix==6011 || (threeNoPrefix>=644 && threeNoPrefix<=649) || twoNoPrefix==65){
  	if (length == 16 || length == 19){
  		network = 'Discover';
  	}
  }else if (fourNoPrefix==5018 || fourNoPrefix==5020 || fourNoPrefix==5038 || fourNoPrefix==6304){
  	if (length >= 12 && length <=19){
  		network = 'Maestro';
  	}
  }else if (fourNoPrefix==4903 || fourNoPrefix==4905 || fourNoPrefix==4911 || fourNoPrefix==4936 ||
  			sixNoPrefix==564182 || sixNoPrefix==633110 || fourNoPrefix==6333 || fourNoPrefix==6759){
  	if (length==16 || length==18 || length==19){
  		network = 'Switch';
  	}
  }else if (twoNoPrefix==51 || twoNoPrefix==52 || twoNoPrefix==53 || twoNoPrefix==54 || twoNoPrefix==55){
  	if (length == 16){
  		network = 'MasterCard';
  	}
  }else if (twoNoPrefix==38 || twoNoPrefix==39){
  	if (length == 14){
  		network = 'Diner\'s Club';
  	}
  }else if (twoNoPrefix==34 || twoNoPrefix==37){
  	if (length == 15){
  		network = 'American Express';
  	}
  }else if (oneNoPrefix==4){
  	if (length == 13 || length == 16 || length == 19){
  		network = 'Visa';
  	}
  }


  return network;
};
