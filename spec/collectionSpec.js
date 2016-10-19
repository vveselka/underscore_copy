var collection = require('../src/collections.js');

it('should produces a new array of values by mapping each value in array through a transformation function', function() {
  expect(collection.map([2,4,6], function(num) {
    return num*10;
  })).toEqual([20,40,60]);
});


it('should produces a new array of values by mapping each property value in object through a transformation function', function() {
  expect(collection.map({'1': 525, 'two': 100, 'end': -41}, function(num) {
    return num*2;
  })).toEqual([1050,200,-82]);
});


it('should produces a new array of values by mapping each property key in object through a transformation function', function() {
  expect(collection.map({1: 525, 2: 100, 3: -41}, function(num, key) {
    return key*5;
  })).toEqual([5,10,15]);
});
