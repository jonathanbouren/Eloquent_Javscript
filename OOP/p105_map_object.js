let ages = {
  Boris: 35,
  Jorgen: 67,
  Eva: 39,
}

console.log(`Boris is ${ages.Boris} years old.`)

console.log(`Is Juans age known?`, 'Juan' in ages)

let eyes = new Map();
eyes.set('Sasha', 'green /blue');
eyes.set('Jonathan', 'blue');
eyes.set('Taco', 'black');

console.log(`Taco has ${eyes.get('Taco')} eyes.`)


// the Map properties, map.set(key, value) , map.get(key) and map.has(key) 