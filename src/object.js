function keys(object) {
  var keys = [];
  for(pr in object) {
    if(object.hasOwnProperty(pr)) {
      keys.push(pr);
    }
  }
  return keys;
}

function allKeys(object) {
  var allKeys = [];
  for(pr in object) {
    allKeys.push(pr);
  }
  return allKeys;
}

function pairs(object) {
  var keyValueList = [];
  for(pr in object) {
    if(object.hasOwnProperty(pr)) {
      keyValueList.push([pr, object[pr]]);
    }
  }
  return keyValueList;
}

module.exports = {
  keys: keys,
  allKeys: allKeys,
  pairs: pairs,
}
