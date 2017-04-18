/*
 * You'll eventually be given instructions how to use this file
 * If you want to use it before then, you'll have to figure it out yourself
 */

// You don't actually want to fill *this* value in on line 9, but you'll see
// other places in this file where you'll replace the FILL_ME_IN with a
// different value.

/*
  Diner's Club always starts with a 38 or 39 and has a length of 14. 
  American Express always starts with a 34 or 37 and has a length of 15
  Visa always has a prefix of 4 and a length of 13, 16, or 19.
  MasterCard always has a prefix of 51, 52, 53, 54, or 55 and a length of 16.
  Discover always has a prefix of 6011, 644-649, or 65, and a length of 16 or 19.
  Maestro always has a prefix of 5018, 5020, 5038, or 6304, and a length of 12-19.
  China UnionPay always has a prefix of 622126-622925, 624-626, or 6282-6288 and a length of 16-19.
  Switch always has a prefix of 4903, 4905, 4911, 4936, 564182, 633110, 6333, or 6759 and a length of 16, 18, or 19.
*/


//var FILL_ME_IN = 'Fill this value in';
 /*
describe('Introduction to Mocha Tests - READ ME FIRST', function() {
  // A Mocha test is just a function!
  // If the function throws an error when run, it fails.
  // If it doesn't throw an error when run, it doesn't fail. 
  // To read more about mocha, visit mochajs.org

  // Once you've read and understood this section, please comment it out. 
  // You will not be able to proceed with a failing test. 

  it('Throws an error so it fails', function() {
    throw new Error('Delete me!');
  });

  it('Doesn\'t throw an error, so it doesn\'t fail', function() {
    // This test doesn't really test anything at all! It will pass no matter what.
    var even = function(num){
      return num/2 === 0;
    }
    return even(10) === true;
  });

  // In tests, we want to compare the expected behavior to the actual behavior.
  // A test should only fail if the expected behavior doesn't match the actual.
  it('Throws an error when expected behavior does not match actual behavior', function() {
    var even = function(num){
      return num/2 === 0;
    }

    if(even(10) !== true) {
      throw new Error('10 should be even!');
    }
  });
});*/

describe('Diner\'s Club', function() {
  // Be careful, tests can have bugs too...
  (function(){
    var number = '38345678901234';
    it('has a prefix of 38 and a length of ' + number.length + ' with number: ' + number, function() {
      if (detectNetwork(number) !== 'Diner\'s Club') {
        throw new Error('Test failed');
      }
    });
    number = '39345678901234';
    it('has a prefix of 39 and a length of ' + number.length + ' with number: ' + number, function() {
      if (detectNetwork(number) !== 'Diner\'s Club') {
        throw new Error('Test failed');
      }
   
    });
  })()
});

describe('American Express', function() {
  // It can get annoying to keep typing the if/throw, so here is a
  // helper function to throw an error if the input statement isn't true. 
  var assert = function(isTrue) {
    if(!isTrue) {
      throw new Error('Test failed');
    }
  };

  (function(){
    var number = '343456789012345';
    it('has a prefix of 34 and a length of ' + number.length + ' with number: ' + number, function() {
      assert(detectNetwork(number) === 'American Express');
    });
    number = '373456789012345';
    it('has a prefix of 37 and a length of ' + number.length + ' with number: ' + number, function() {
      assert(detectNetwork(number) === 'American Express');
    });
  })()
});

describe('Visa', function() {
  // Chai is an entire library of helper functions for tests!
  // Chai provides an assert that acts the same as our previous assert.
  // Search the documentation to figure out how to access it. 
  //   http://chaijs.com/
  var assert = chai.assert;
  (function(){
 
    var number = '4123456789012';
    it('has a prefix of 4 and a length of ' + number.length + ' with number: ' + number, function() {
      assert(detectNetwork(number) === 'Visa');
    });
    number = '4123456789012345';
    it('has a prefix of 4 and a length of ' + number.length + ' with number: ' + number, function() {
      assert(detectNetwork(number) === 'Visa');
    });
    number = '4123456789012345678';
    it('has a prefix of 4 and a length o ' + number.length + ' with number: ' + number, function() {
      assert(detectNetwork(number) === 'Visa');
    });
  })()
});

describe('MasterCard', function() {
  // Chai lets you write more human-readable tests that throw helpful errors.
  // Expect syntax is one way to do this, but there are others. 
  // If you want to know more, check out the documentation. 
  //   http://chaijs.com/api/bdd/
  var expect = chai.expect;
  (function(){
    var number = '5112345678901234';
    it('has a prefix of 51 and a length of ' + number.length + ' with number: ' + number, function() {
      expect(detectNetwork(number)).to.equal('MasterCard');
    });
    
    number = '5212345678901234'
    it('has a prefix of 52 and a length of ' + number.length + ' with number: ' + number, function() {
      expect(detectNetwork(number)).to.equal('MasterCard');
    });
    
    number = '5312345678901234'
    it('has a prefix of 53 and a length of ' + number.length + ' with number: ' + number, function() {
      expect(detectNetwork(number)).to.equal('MasterCard');
    });
 

  // You can also use should instead of expect, which changes the style
  // slightly. It really doesn't matter which one you use - check out 
  // http://chaijs.com/guide/styles/ for more info, but it's important
  // to be consistent (unlike in this file, where we use BOTH expect
  // and should, but that's just for learning), so once you've gotten 
  // these tests to pass using should syntax, refactor your tests to 
  // use either expect or should, but not both. 
  
    number = '5412345678901234'
    it('has a prefix of 54 and a length of ' + number.length + ' with number: ' + number, function() {
      expect(detectNetwork(number)).to.equal('MasterCard');
    });
    
    number = '5512345678901234'
    it('has a prefix of 55 and a length of ' + number.length + ' with number: ' + number, function() {
      expect(detectNetwork(number)).to.equal('MasterCard');
    })
  })()
 
});

describe('Discover', function() {
  // Tests without a function will be marked as "pending" and not run
  // Implement these tests (and others) and make them pass!

  var assert = chai.assert;
  (function(){
    var number = '6011456789012345';
    it('has a prefix of 6011 and a length of ' + number.length + ' with number: ' + number, function(){
        assert(detectNetwork(number) === 'Discover');
    });

    number = '6011456789012345678'
    it('has a prefix of 6011 and a length of ' + number.length + ' with number: ' + number, function(){
      assert(detectNetwork(number) === 'Discover');
    });
  })()

//
  for (prefix=644; prefix<=649; prefix++){
    (function(prefix) {
      var number = prefix + '1234567890123';
       it('has a prefix of ' + prefix + ' and a length of ' + number.length + ' with number: ' + number, function(){assert(detectNetwork(number) === 'Discover');});
      number = prefix + '1234567890123456';
       it('has a prefix of ' + prefix + ' and a length of ' + number.length + ' with number: ' + number, function(){assert(detectNetwork(number) === 'Discover');});
    })(prefix)
  }
//
  (function() {  
    var number = '6511456789012345';
    it('has a prefix of 65 and a length of ' + number.length + ' with number: ' + number, function(){assert(detectNetwork(number) === 'Discover');});
    number = '6511456789012345678';
    it('has a prefix of 65 and a length of ' + number.length + ' with number: ' + number, function(){assert(detectNetwork(number) === 'Discover');});
  })()
});

describe('Maestro', function() {
  // Write full test coverage for the Maestro card
  var assert = chai.assert;

  var prefix = [5018, 5020, 5038, 6304];

  for (i=0; i<prefix.length; i++){
    for (length=12; length<=19; length++){
      (function(prefix, length){
        var number = prefix[i] + '12345678901234567890';
        number = number.slice(0,length);
        it('has a prefix of ' + prefix[i] + ' and a length of ' + number.length + ' with number: ' + number, function(){
          assert(detectNetwork(number) === 'Maestro');
        });
      })(prefix, length)
    }
  }
});

describe('China UnionPay', function(){
  var assert = chai.assert;

  for(prefix = 622126; prefix <= 622925; prefix++){ 
    for(length = 16; length <= 19; length++){
      (function(prefix, length){
        var number = prefix + '12345678901234567890';
        number = number.slice(0,length);
        it('has a prefix of ' + prefix + ' and a length of ' + number.length + ' with number: ' + number, function() {  
          assert(detectNetwork(number) === 'China UnionPay');
        });
      })(prefix, length)
    }
  }

  for(prefix = 624; prefix <= 626; prefix++){ 
    for(length = 16; length <= 19; length++){
      (function(prefix, length){
        var number = prefix + '12345678901234567890';
        number = number.slice(0,length);
        it('has a prefix of ' + prefix + ' and a length of ' + number.length + ' with number: ' + number, function() {
          assert(detectNetwork(number) === 'China UnionPay');
        });
      })(prefix,length)
    }
  }

  for(prefix = 6282; prefix <= 6288; prefix++){ 
    for(length = 16; length <= 19; length++){
      (function(prefix, length){
        var number = prefix + '12345678901234567890';
        number = number.slice(0,length);
        it('has a prefix of ' + prefix + ' and a length of ' + number.length + ' with number: ' + number, function() {
          assert(detectNetwork(number) === 'China UnionPay');
        });
      })(prefix, length)
    }
  }
});

describe('Switch', function(){
  var assert = chai.assert;

  var prefix = [4903, 4905, 4911, 4936, 564182, 633110, 6333, 6759];

  for(i=0; i<prefix.length; i++){
    for(length = 16; length <= 19; length++){
      (function(prefix, length){
        if(length!==17){
          var number = prefix[i] + '12345678901234567890';
          number = number.slice(0,length);
          it('has a prefix of ' + prefix[i] + ' and a length of ' + number.length + ' with number: ' + number, function() {
            assert(detectNetwork(number) === 'Switch');
          });
        };
      })(prefix, length)
    };
  };
});