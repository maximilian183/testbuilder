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
  //  Discover always has a prefix of 6011, 644-649, or 65, and a length of 16 or 19.

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

    function x() {
        return 0 === chaiSpyExpect.callCount || 0 === chaiSpyShould.callCount
    }
    function v(e, t) {
        return e = "number" == typeof e ? e.toString() : e,
        e + new Array(t + 1 - e.length).join("0")
    }
    function C() {
        return z && 0 === z.stats.pending && 0 === z.stats.failures && z.stats.passes === z.stats.tests
    }
    function E(e, t) {
        var o = {};
        return e.forEach(function(e) {
            t.forEach(function(t) {
                o[e] || (o[e] = {}),
                o[e][t] = !1
            })
        }),
        o
    }
    function M(e, t) {
        return e === t.slice(0, e.length)
    }
    function N(e, t) {
        var o = E(e, t);
        J.args.forEach(function(e) {
            e = e[0];
            for (var t in o)
                M(t, e) && o[t].hasOwnProperty(e.length) && (o[t][e.length] = !0)
        });
        for (var n in o)
            for (var r in o[n])
                if (!o[n][r])
                    return !1;
        return !0
    }
    function S(e) {
        return !!window.localStorage.getItem("testing:" + e)
    }
    function A(e) {
        window.localStorage.setItem("testing:" + e, !0)
    }
    function D() {
        return !!D || (D = !0,
        !1)
    }
    function j(e) {
        return !(!S(e) && !Q) || (Q = !0,
        !1)
    }

    function V() {
        return "Diner's Club" === detectNetwork("38345678901234") && "Diner's Club" === detectNetwork("39345678901234")
    }
    function T() {
        return N([38, 39], [14])
    }
    function P() {
        return "American Express" === detectNetwork("343456789012345") && "American Express" === detectNetwork("373456789012345")
    }
    function I() {
        return N([34, 37], [15])
    }
    function W() {
        return "Visa" === detectNetwork("4123456789012") && "Visa" === detectNetwork("4123456789012345") && "Visa" === detectNetwork("4123456789012345678")
    }
    function H() {
        return N([4], [13, 16, 19])
    }
    function Y() {
        return "MasterCard" === detectNetwork("5112345678901234") && "MasterCard" === detectNetwork("5212345678901234") && "MasterCard" === detectNetwork("5312345678901234") && "MasterCard" === detectNetwork("5412345678901234") && "MasterCard" === detectNetwork("5512345678901234")
    }
    function O() {
        return N([51, 52, 53, 54, 55], [16])
    }
    function U() {
        var e = [6011, 644, 645, 646, 647, 648, 649, 65]
          , t = !0;
        return e.forEach(function(e) {
            t = t && "Discover" === detectNetwork(v(e, 16)) && "Discover" === detectNetwork(v(e, 19))
        }),
        t
    }
    function F() {
        return N([6011, 644, 645, 646, 647, 648, 649, 65], [16, 19])
    }
    function L() {
        for (var e = !0, t = 12; t <= 19; t++)
            e = e && "Maestro" === detectNetwork(v("5018", t)) && "Maestro" === detectNetwork(v("5020", t)) && "Maestro" === detectNetwork(v("5038", t)) && "Maestro" === detectNetwork(v("6304", t));
        return e
    }
    function R() {
        return N([5018, 5020, 5038, 6304], [12, 13, 14, 15, 16, 17, 18, 19])
    }
    function K() {
        for (var e = !0, t = 16; t <= 19; t++) {
            for (var o = 622126; o <= 622925; o++)
                e = e && "China UnionPay" === detectNetwork(v(o, t));
            for (var o = 624; o <= 626; o++)
                e = e && "China UnionPay" === detectNetwork(v(o, t));
            for (var o = 6282; o <= 6288; o++)
                e = e && "China UnionPay" === detectNetwork(v(o, t))
        }
        return e
    }
    function q() {
        for (var e = [], t = 622126; t <= 622925; t++)
            e.push(t);
        for (var t = 624; t <= 626; t++)
            e.push(t);
        for (var t = 6282; t <= 6288; t++)
            e.push(t);
        return N(e, [16, 17, 18, 19])
    }
    function B() {
        var e = ["4903", "4905", "4911", "4936", "564182", "633110", "6333", "6759"]
          , t = [16, 18, 19]
          , o = !0;
        return e.forEach(function(e) {
            t.forEach(function(t) {
                o = o && "Switch" === detectNetwork(v(e, t))
                console.log(v(e, t));
            })
        }),
        o
    }
    function G() {
        return N([4903, 4905, 4911, 4936, 564182, 633110, 6333, 6759], [16, 18, 19])
    }
