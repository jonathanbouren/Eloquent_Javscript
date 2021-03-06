// Write a function arrayToList that builds up a list structure like the one
// shown when given [1, 2, 3] as argument. Also write a listToArray function
// that produces an array from a list. Then add a helper function prepend,
// which takes an element and a list and creates a new list that adds the
// element to the front of the input list, and nth, which takes a list and a
// number and returns the element at the given position in the list (with zero
// referring to the first element) or undefined when there is no such element.

function arrayToList(arr) {
  let result = {}; // The empty list is declared
  if (Array.isArray(arr)) { // If the input is an array
    let currentList = result; //currentList is set to result which is a list
    for (let item of arr) { // for each item in the array
      let newList = {
        value: item,
        rest: null,
      }
      if (typeof currentList.rest === 'undefined') {
        result = newList;
      } else {
        currentList.rest = newList;
      }
      currentList = newList;
    }
  }
  return result;
}

console.log(arrayToList([1, 2, 3]))

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20