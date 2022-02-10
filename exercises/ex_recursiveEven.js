
recursiveEven = (num) => {
  let holder = num;
  if (num === 0) return `It was an even.`
  if (num === 1) return `It was an odd.`
  if (num < 0) return "I can't do that that Stan."
  return recursiveEven(num - 2)

}

console.log(recursiveEven(50))
console.log(recursiveEven(75))
console.log(recursiveEven(-1))