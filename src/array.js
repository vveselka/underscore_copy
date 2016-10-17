function first(array, n) {
  if(n === undefined) return array[0];
  else {
    if(n > array.length || n < 1) {
      return "n should be less than array's length and more than 0";
    } else {
      var arrayWithFirstN = [];
      for(var i = 0; i < n; i++) {
        arrayWithFirstN.push(array[i]);
      }
      return arrayWithFirstN;
    }

  }
}

function initial(array, n) {
  if(n === undefined) return array.slice(0, array.length - 1);
  else if(n > array.length || n < 1) {
    return "n should be less than array's length and more than 0";
  } else {
    var arrayWithoutLastN = [];
    for(var i = 0; i < array.length - n; i ++) {
      arrayWithoutLastN.push(array[i]);
    }
    return arrayWithoutLastN;
  }
}

function compact(array) {
  var resultArry = [];
  array.forEach(function(el) {
    if(!(el === null || el === undefined || el === false || el === '' || el === 0 || el === NaN)) {
      resultArry.push(el);
    }
  });
  return resultArry;
}

function union(arrays) {
  var unitedArrays = [];
  for(var i = 0; i < arguments.length; i++) {
    arguments[i].forEach(function (el) {
      if(unitedArrays.indexOf(el) === -1) {
        unitedArrays.push(el);
      }
    });
  }
  return unitedArrays;
}

function flatten(array) {
  var result = [];
  function pushToResult(array) {
    for (var i = 0; i < array.length; i++) {
      if (array[i].constructor !== Array) {
        result.push(array[i]);
      } else {
        pushToResult(array[i]);
      }
    }
  }
  pushToResult(array);
  return result;
}


module.exports = {
  first: first,
  initial: initial,
  compact: compact,
  union: union,
  flatten: flatten,
};
