const sentence = ['sense.', 'make', 'all', 'will','This'];

let reverseArray = (array) => {
  let reversed = [];
  for (let i = array.length-1; i >= 0; i--) {
    reversed.push(array[i]);
  }
  return reversed;
};

console.log(reverseArray(sentence));
