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

it('should return first element that matches key-value pairs listed in properties', function() {
  expect(collection.findWhere([{age:26, city:'London'}, {age:26, city:'NY', name:'Jon'}, {age:26, city:'NY', name:'Alex'}], {city: 'NY', age:26})).toEqual({age:26, city:'NY', name:'Jon'});
});

it('should return underfined', function() {
  expect(collection.findWhere([{age:15, city:'London'}, {age:25, city:'NY', name:'Jon'}, {age:26, city:'NY', name:'David'}], {age:26, city:'NY', name:'Ivan'})).toEqual(undefined);
});

it('should return an array with property values where property is city', function() {
  expect(collection.pluck([{age:15, city:'London'}, {age:25, city:'NY', name:'Jon'}, {age:26, city:'Kyiv', name:'David'}], 'city')).toEqual(['London', 'NY', 'Kyiv']);
});

it('should return an array with property values where property is city and not every object has city property', function() {
  expect(collection.pluck([{age:15, name:'Ivan'}, {age:25, city:'NY', name:'Jon'}, {age:26, city:'Kyiv', name:'David'}], 'city')).toEqual(['NY', 'Kyiv']);
});

it('should return an empty array because no object has property city', function() {
  expect(collection.pluck([{age:15, name:'Ivan'}, {age:25, name:'Jon'}], 'city')).toEqual([]);
});
