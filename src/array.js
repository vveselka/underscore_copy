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

module.exports = {
  first: first,
  initial: initial,
};
