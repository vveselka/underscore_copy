var array = require('../src/array.js');

describe("A suite", function() {
  it("should return first element of array", function() {
    expect(array.first([5,2])).toBe(5);
  });

  it('should return first 3 elements of array', function() {
    expect(array.first([5,2,3,6,9], 3)).toEqual([5,2,3]);
  });

  it('should return an error', function() {
    expect(array.first([1,2],3)).toBe("n should be less than array's length and more than 0");
  });

  it('should return everything but the last entry of the array', function() {
    expect(array.initial([4,5,6])).toEqual([4,5]);
  });

  it('should return array exluding the last 2 elements ', function() {
    expect(array.initial([4,1,2,0], 2)).toEqual([4,1]);
  });

  it('should return an error', function() {
    expect(array.initial([1], 2)).toBe("n should be less than array's length and more than 0");
  });

  it('should return a copy of the array with all falsy values removed', function() {
    expect(array.compact([1, false, null, 2,5, undefined])).toEqual([1,2,5]);
  });

  it('should return a copy of the array with all falsy values removed', function() {
    expect(array.compact([1, 0 , 4])).toEqual([1,4]);
  });
  it('shoulf return the union of the passed-in arrays', function() {
    expect(array.union([1], [1, 2], [8, 1, 8])).toEqual([1,2,8]);
  });

});
