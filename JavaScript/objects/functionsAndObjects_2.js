const robot = {
  model: '1E78V2',
  energyLevel: 100,
  provideInfo() {
    return 'I am ' + this.model + ' and my current energy level is ' + this.energyLevel
  }
};

console.log(robot.provideInfo());

// "this" keyword found above references the object from where the function was called. It allows you to access variables or keys with value from inside the JS object
