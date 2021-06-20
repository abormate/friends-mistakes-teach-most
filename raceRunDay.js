let raceNumber = Math.floor(Math.random() * 1000);

// var defining if registered early or const
const registeredEarly = false;

// runner's age
const runnerAge = 18;

// check if adult and if registered early, add 1000 to their race number
if (runnerAge > 18) {
  raceNumber += 1000;
}

// check age and registration and notify of race schedule with race number
if (runnerAge > 18 && registeredEarly === true) {
  console.log(`Your race schedule starts at 9:30am. And your Race Number is: ${raceNumber}`);
}

else if (runnerAge > 18 && registeredEarly === false) {
  console.log(`Your race schedule starts at 11:00am. And your race number is: ${raceNumber}`);
}

else if (runnerAge < 18) {
  console.log('Your race schedule starts at 12:30pm' + ' ' + 'And your race number is:' + raceNumber)
}

else {
  console.log(`Please see us at the registration desk. Thanks!`)
}
