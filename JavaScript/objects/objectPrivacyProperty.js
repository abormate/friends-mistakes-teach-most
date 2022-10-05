const robot = {
  _energyLevel: 100,
  recharge(){
    this._energyLevel += 30;
    console.log(`Recharged! Energy is currently at ${this._energyLevel}%.`)
  }
};

robot._energyLevel = 'high';

console.log(robot.recharge());

// JS doesn't have any built in way to prevent changing of property values. Instead it has naming conventions for these properties inside objects. Like appending oir prepending a property name with an underscore "_". Telling other developers not to change the set property name and value.
