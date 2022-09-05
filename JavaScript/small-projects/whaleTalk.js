// Translates phrases or sentences into Whale language that's sung in the ocean.

let input = 'Hi there, you!';
const vowels = ['a', 'e', 'i', 'o', 'u'];
let resultArray = [];

for (i=0; i < input.length; i++) {
  if (input[i] === 'e') {
    resultArray.push(input[i]);
  }
  if (input[i] === 'u') {
    resultArray.push(input[i]);
  }
  for (z=0; z < vowels.length; z++) {
    if (input[i] === vowels[z]) {
      // console.log(input[i]);
      resultArray.push(input[i]);
    }
  }
}
console.log(resultArray.join('').toUpperCase());
