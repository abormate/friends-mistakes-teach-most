// function defined beforehand and then first function is passed as a callback function for the forEach() higher-order function later on

function printGrocery(element){
  console.log(element);
}
 
groceries.forEach(printGrocery);
