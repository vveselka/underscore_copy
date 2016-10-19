function map(list, func) {
  var result = [];
  if(list.constructor === Array) {
    for(var i = 0; i< list.length; i++) {
      result.push(func(list[i]));
    }
  } else if(list.constructor === Object) {
    for(var pr in list) {
        result.push(func(list[pr], pr));
    }
  }
  return result;
}

module.exports = {
  map: map,
};
