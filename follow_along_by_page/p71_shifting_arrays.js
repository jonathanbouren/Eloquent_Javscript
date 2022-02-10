let first = 'wake up';

let todoList = ['do something', 'stop doing it', 'do something else'];

function remember(task) {
  todoList.push(task);
}

function getTask() {
  return todoList.shift();
}

function rememberUrgently(task) {
  todoList.unshift(task);
}

console.log(todoList);
remember(first);
console.log(todoList);
let checkList = getTask();
console.log(todoList);
console.log(checkList) 
rememberUrgently('drink coffee')
console.log(todoList);