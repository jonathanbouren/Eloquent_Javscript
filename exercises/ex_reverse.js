

// Arrays have a reverse method that changes the array by inverting the order
// in which its elements appear. For this exercise, write two functions,
// reverseArray and reverseArrayInPlace. The first, reverseArray, takes an
// array as argument and produces a new array that has the same elements in
// the inverse order. The second, reverseArrayInPlace, does what the reverse
// method does: it modifies the array given as argument by reversing its
// elements. Neither may use the standard reverse method.

function reverse(arr) {
  let result = [];
  for (let element in arr) {
    result.unshift(arr[element]);
  }
  return result;
}
function reverseInPlace(arr) {
  let len = arr.length
  for (let i = len - 1 ; i >= 0; i--) {
    arr.push(arr[i])
    //console.log(arr)
  }
  arr.splice(0, arr.length / 2)
  return arr
}

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let nums2 = [5, 6, 7, 8, 9];
//console.log(reverse(nums));
//console.log(nums);
console.log(reverseInPlace(nums2) === nums2)
console.log(nums2)

