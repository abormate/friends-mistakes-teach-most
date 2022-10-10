/*
Along with getter methods, we can also create setter methods which reassign values of existing properties within an object. Let’s see an example of a setter method:
*/

const person = {
  _age: 37,
  set age(newAge){
    if (typeof newAge === 'number'){
      this._age = newAge;
    } else {
      console.log('You must assign a number to age');
    }
  }
};
