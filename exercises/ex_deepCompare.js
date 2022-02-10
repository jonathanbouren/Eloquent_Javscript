// Write a function deepEqual that takes two values and returns true only if
// they are the same value or are objects with the same properties, where the
// values of the properties are equal when compared with a recursive call to
// deepEqual. To find out whether values should be compared directly (use the
// === operator for that) or have their properties compared, you can use the
// typeof operator. If it produces "object" for both values, you should do a
// deep comparison. But you have to take one silly exception into account:
// because of a historical accident, typeof null also produces "object". The
// Object.keys function will be useful when you need to go over the prop-
// erties of objects to compare them.



function deepEqual(object1, object2) {
  function splitCompare(obj1, obj2) {
    for (let [key, value] of Object.entries(obj1)) {
      if (!obj2.hasOwnProperty(key)) return false;
    }
    return true;
  }
  for (let [key, value] of Object.entries(object1)) {
    if (!object2.hasOwnProperty(key)) {
      return false;
    }
    if (typeof value === 'object') {
      return splitCompare(object1[key],object2[key])
    }
  }
  return true;
}



let obj = { here: { is: "an" }, object: 2 };

console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, { here: 1, object: 2 }));
// → false
console.log(deepEqual(obj, { here: { is: "an" }, object: 2 }));
// → true