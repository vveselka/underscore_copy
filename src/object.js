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

module.exports = {
  keys: keys,
  allKeys: allKeys,
}
