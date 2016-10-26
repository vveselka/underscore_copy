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

function findWhere(list, properties) {
  for(var i = 0, len = list.length; i < len; i++) {
    var isFound = true;
    for(pr in properties) {
      if(!(list[i].hasOwnProperty(pr) && list[i][pr] === properties[pr])){
        isFound = false;
      }
    }
    if(isFound) return list[i];
  }
  return undefined;
}

function pluck(list, propertyName) {
  var result = [];
  for(var i = 0, len = list.length; i < len; i++) {
    for(prop in list[i]) {
      if(list[i].hasOwnProperty(prop) && prop === propertyName){
        result.push(list[i][prop]);
      }
    }
  }
  return result;
}

module.exports = {
  map: map,
  find: find,
  findWhere: findWhere,
  pluck: pluck,
};
