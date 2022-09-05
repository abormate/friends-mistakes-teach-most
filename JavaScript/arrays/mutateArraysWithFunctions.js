// When you pass an array into a function, if the array is mutated inside the function, that change will be maintained outside the function as well.

const concept = ['arrays', 'can', 'be', 'mutated'];

function changeArr(arr){
  arr[3] = 'MUTATED';
}

changeArr(concept);

console.log(concept);

function removeElement(newArr) {
  newArr.pop()
};

removeElement(concept);

console.log(concept);
