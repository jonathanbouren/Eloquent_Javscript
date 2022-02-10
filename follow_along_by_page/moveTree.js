const arr = [
  [0, 0, 1, 0, 0],
  [0, 0 ,0 , 0, 1],
  [1, 0, 0, 0, 0],
  [0, 0, 0, 1, 0],
]

//console.log(arr);

arr.forEach(sub => {
  sub.forEach((num, idx) => {
    let moved = false;
    if (num === 1 && moved === false) {
      if (sub[idx - 1] !== undefined) {
        [sub[idx], sub[idx - 1]] = [sub[idx - 1], sub[idx]]
        moved = true;
      } else {
        [sub[idx], sub[idx + 1]] = [sub[idx + 1], sub[idx]]
        moved = true;
      }
    }
  })
})

// console.log(arr);

// let letters = ['a', 'b', 'c']
// console.log(letters);
// [letters[0], letters[1]] = [letters[1], letters[0]]
// console.log(letters);






