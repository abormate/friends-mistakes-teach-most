/*
.map() works in a similar manner to .forEach()— the major difference is that .map() returns a new array.
*/

const numbers = [1, 2, 3, 4, 5]; 
 
const bigNumbers = numbers.map(number => {
  return number * 10;
});
