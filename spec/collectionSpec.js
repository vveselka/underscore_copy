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

it('should return the first value in array that passes a truth test', function() {
  expect(collection.find([4,2,85,11,5], function(n) {
    return n % 5 === 0;
  })).toBe(85);
});

it('should return the first key in object where value passes a truth test', function() {
  expect(collection.find({'David': 11, 'Elen': 22, 'Jon': 25}, function(n) {
    return n >= 25;
  })).toEqual('Jon');
});

it('should return undefined because no value passed a test', function() {
  expect(collection.find({'David': 11, 'Elen': 22, 'Jon': 25}, function(n) {
    return n > 25;
  })).toEqual(undefined);
});
