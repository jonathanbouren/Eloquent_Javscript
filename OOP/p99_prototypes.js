// you can use Object.getPrototypeOf(obj)

// Object.create(varName)  can be used to create objects


let protoMedic = {
  work(action) {
    console.log(`The ${this.type} medic is ${action}.`)
  }
}
// let remote = Object.create(protoMedic);
// remote.type = 'remote';
// remote.work('studying for a new job')

// constructor functions

function Medic(type) {
  this.type = type;
}
Medic.prototype.work = function (task) {
  console.log(`This ${this.type} medic is ${task}.`)
}

let ambulanceMedic = new Medic('ambulance');
let cctMedic = new Medic('cct')

ambulanceMedic.work('trying to stay sober')
cctMedic.work('being a twat')

//new class creation methods with constructor function

class Monitor {
  constructor(type) {
    this.type = type;
  }
  work(task) {
    console.log(`The ${this.type} monitor is ${task} `)
  }
  study(subject) {
    console.log(`The ${this.type} monitor is studying ${subject}`)
  }
}
let driver = new Monitor('transportation');
let humanDimensions = new Monitor('HD');
//driver.work('driving the car')
//humanDimensions.work('studying the situation')
let drone = new Monitor('aviation');
// drone.study('drone piloting')
Monitor.prototype.rest = function (activity) {
 console.log(`This ${this.type} monitor is ${activity}`)
}
driver.rest('drinking coffee')
drone.rest('having a whiskey')
Monitor.prototype.job = 'monitoring';

console.log(drone.job)
drone.job = 'using drone images to search for weapons.'

console.log(drone.job)
Monitor.prototype.toString = function () {
  return `${'aeiou'.includes(this.type[0].toLowerCase()) ? 'An': 'A'} ${this.type} monitor.`;
}
console.log(String(drone))
console.log(String(driver))

Monitor.prototype.personnel = {};
drone.personnel.teamLead = 'Dave';
drone.personnel.pilot = 'Ian';

console.log(drone.personnel);

const toStringSymbol = Symbol('toString');
Array.prototype[toStringSymbol] = function() {
  console.log(`${this.length} liters of gasoline.`)
}

console.log([1, 2, 3][toStringSymbol]())

