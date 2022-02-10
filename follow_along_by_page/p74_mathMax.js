
function max(...nums) {
  let result  = -Infinity;
  for(let number of nums) {
    if (number > result) result = number;
  }
  return result;
}


console.log(max('zed', 'bob', 'tim', 'Al'))