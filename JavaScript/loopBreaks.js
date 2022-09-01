const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious Z", "Tupac"];

// Write your code below
for (let i=0; i < rapperArray.length; i++) {
  console.log(rapperArray[i]);
  if (rapperArray[i] === 'Notorious Z') {
    break;
  }
}
console.log("And that's all folks!")
