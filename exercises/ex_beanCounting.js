
countChar = (str, char) => {
  return str.split('').filter(x => x === char).length
}

console.log(countChar("Beans, Beans, the magical Brute", "B"))

console.log(countChar('this is probably a stupid way to test this damn method', 's'))
