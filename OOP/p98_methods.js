//Methods are simply object properties that encapsulate a function.


let monitor = {};

monitor.patrol = function(action) {
  console.log(`The monitor is ${action}.`)
}

monitor.patrol('sleeping');
monitor.patrol('monitoring')
monitor.patrol('driving')

function report(line) {
  console.log(`The ${this.type} reports "${line}"`);
}

let soldier = {type: 'LNR Soldier', report};

let babushka = {type: 'Local Grandma', report};

soldier.report('the bar is open.');
babushka.report("it's my place in line mother fucker.")

report.call(soldier, 'i apologize profusely.')
report.call(babushka, 'I kill you.')

function lockDoors() {
  console.log(this.doors.map(d =>  d = ` door ${d} locked`))
}

lockDoors.call({doors: [1, 2, 3, 4]})