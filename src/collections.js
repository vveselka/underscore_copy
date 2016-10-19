function map(list, func) {
  var result = [];
  if(list.constructor === Array) {
    for(var i = 0, len = list.length; i< len; i++) {
      result.push(func(list[i]));
    }
  } else if(list.constructor === Object) {
    for(var pr in list) {
        result.push(func(list[pr], pr));
    }
  }
  return result;
}


function find(list, predicate) {
  if(list.constructor === Array) {
    for(var i = 0, len = list.length; i < len; i++) {
      if(predicate(list[i])) {
        return list[i];
      }
    } return undefined;
  } else if(list.constructor === Object) {
      for(pr in list) {
        if(predicate(list[pr])) {
          return pr;
        }
      }
      return undefined;
  }
}

module.exports = {
  map: map,
  find: find,
};
