// Loop breaks allow you to stop an ongoing loop prior to encountering a false value for its stopping condition. This is helpful if there is another condition that you're looking for to when to stop a loop

const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious Z", "Tupac"];

// Write your code below
for (let i=0; i < rapperArray.length; i++) {
  console.log(rapperArray[i]);
  if (rapperArray[i] === 'Notorious Z') {
    break;
  }
}
console.log("And that's all folks!");

// Outputs rapper list names until "Notorious Z" is encountered, which will then end the loop. 
