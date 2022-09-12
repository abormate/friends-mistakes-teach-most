// Higher order functions are functions that take in other functions as values for their arguments. These sub-functions are called Call back functions.

const addTwo = num => {
  return num + 2;
}

const checkConsistentOutput = (func, val) => {
  let checkA = val + 2;
  let checkB = func(val);
  return checkA === checkB ? func(val) : 'inconsistent results';
}

console.log(checkConsistentOutput(addTwo, 12));

// Outputs if num +2 is always what is expected through a Higher order function
