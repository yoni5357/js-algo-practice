/*
Create a function that takes an object and returns the keys and values as separate arrays.

Examples
keysAndValues({ a: 1, b: 2, c: 3 })
➞ [["a", "b", "c"], [1, 2, 3]]

keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" })
➞ [["a", "b", "c"], ["Apple", "Microsoft", "Google"]]

keysAndValues({ key1: true, key2: false, key3: undefined })
➞ [["key1", "key2", "key3"], [true, false, undefined]]
Notes
Remember to sort the keys.
*/

function keysAndValues( obj ) {
  let keys = [];
  let values = [];
  for(let key in obj){
    values.push(obj[key]);
    keys.push(key);
  }
  return [keys,values];
}

exports.solution = keysAndValues;