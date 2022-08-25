/*
What happens if we try to change an array inside a function? Does the array keep the change after the function call or is it scoped to inside the function?

*/

const flowers = ['peony', 'daffodil', 'marigold'];
 
function addFlower(arr) {
  arr.push('lily');
}
 
addFlower(flowers);
 
console.log(flowers); // Output: ['peony', 'daffodil', 'marigold', 'lily']
