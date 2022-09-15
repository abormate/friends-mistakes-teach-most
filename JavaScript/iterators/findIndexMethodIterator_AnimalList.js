// Animal List Array 

const animals = ['lemur', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];
const foundAnimal = animals.findIndex(animal => {
  return animal === 'elephant';
});

const startsWithS = animals.findIndex(animal => {
  return animal[0] === 's';
});

// first code block under definition of array for animals. Outputs animal array index for 'elephant'
// second code block, outputs the first animal on the array that begins with a letter 's'.
