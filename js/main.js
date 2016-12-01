//Copyright Gina Fitzgerald 2016 each implementation
function each(collection, callbackFunction) {
  //determine if the collection is an array
  if  (Array.isArray(collection)) {
    for (var i = 0; i < collection.length; i++) {
      callbackFunction(collection[i]);
    }
    //else treat collection as object
  } else {
    for (var key in collection) {
      callbackFunction(collection[key]);
    }
  }
}
