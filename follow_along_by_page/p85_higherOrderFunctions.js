
function greaterThan(n) {
  return m => m > n;
}

function repeat(n, action) {
  for (let i = 0; i < n; i++) {
    action(i)
  }
}

let greaterThan100 = greaterThan(100);

function noisy(f) {
  return (...args) => {
    console.log('calling with', args);
    let result = f(...args);
    console.log("called with", args, ", returned ", result);
    return result;
  };
}
noisy(Math.max)(4, 3, 2, 1);

function unless(test, then) {
  if (!test) then();
}
repeat(3, n => {
  unless(n % 2 === 1, () => {
    console.log(`${n} is even.`)
  });
})