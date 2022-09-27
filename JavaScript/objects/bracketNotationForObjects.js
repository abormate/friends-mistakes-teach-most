// defines an object with various properties then assigns a property value from the previously defined object unto a variable
 
let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  'Active Mission' : true,
  homePlanet : 'Earth', 
  numCrew: 5
 };

let propName =  'Active Mission';

// Write your code below
const isActive = spaceship['Active Mission'];
console.log(spaceship[propName]);

// isActive variable gets assigned to the value of property Active Mission which is "true"
// last console log writes the value of variable propName and calls it inside the bracket notation which initially invokes the object Spaceship
