
// Write a function that computes the dominant writing direction in a string
// of text. Remember that each script object has a direction property that can
// be "ltr" (left to right), "rtl" (right to left), or "ttb" (top to bottom).
// The dominant direction is the direction of a majority of the characters
// that have a script associated with them. The characterScript and countBy
// func- tions defined earlier in the chapter are probably useful here.
require('./05_higher_order/code/scripts.js')

function characterScript(code) {
  for (let script of SCRIPTS) {
    if (script.ranges.some(([from, to]) => {
      return code >= from && code < to;
 })) {
   return script;
} }
return null;
}

function countBy(items, groupName) {
  let counts = [];
  for (let item of items) {
    let name = groupName(item);
    let known = counts.findIndex(c => c.name == name);
    if (known == -1) {
      counts.push({name, count: 1});
    } else {
      counts[known].count++;
    }
}
  return counts;
}


//console.log(characterScript(121)); // → {name: "Latin", ...}

function dominantDirection(text) {
  text = text.split(' ')
  let result = [];
  for (let char of text) {
    let language = characterScript(char.codePointAt())
    if (language === null) {
      language = characterScript(char.charCodeAt())
    }
    if (language !== null) result.push(language.direction)
}
console.log(result)
}

dominantDirection("Hello");
// → ltr
console.log(dominantDirection("Hey مساء الخير"));
// → rtl