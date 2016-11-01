var object = require('../src/object.js');

it('should return an array with objects own keys', function() {
  expect(object.keys({age:15, city:'London', name:undefined})).toEqual(['age', 'city', 'name']);
});

it('should return an array with objects own keys without inherited properties', function() {
  function Test(name) {
    this.name = name;
  }
  Test.prototype.age = 15;
  expect(object.keys(new Test('Jon'))).toEqual(['name']);
});

it('should return an array with objects own properties and inherited properties', function() {
  function Test(name) {
    this.name = name;
  }
  Test.prototype.age = 15;
  expect(object.allKeys(new Test('Jon'))).toEqual(['name', 'age']);
});

it('should conbert an object into a list of key velue pairs', function() {
  expect(object.pairs({1: 'Test', 2 : 55, 'Three': undefined})).toEqual([['1', 'Test'], ['2', 55], ["Three", undefined]]);
});
