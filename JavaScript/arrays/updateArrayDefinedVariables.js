// JavaScript arrays, depending on how they are defined, whether with a "let" or "const" variable classes -- also will vary with how much you can update or change their values. 

let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];

const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];

condiments[0] = 'Mayo';
console.log(condiments);

condiments = ['Mayo'];
console.log(condiments);

utensils[3] = 'Fork';
console.log(utensils);
