--

let greetAliens = (array) => {
  result = [];
  for (let i = 0; i < array.length; i++) {
    console.log('Oh, ' + array[i] + ', we humans offer our unconditional surrender!');
  }
  return result;
}

const aliens = ["Blorgous", "Glamyx", "Wegord", "SpaceKing"];

greetAliens(aliens);

// Sends greetings to several alien groups
