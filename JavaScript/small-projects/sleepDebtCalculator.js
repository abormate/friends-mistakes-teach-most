// A simple calculator that will add up each night's sleep debt -- and will tell how many hours you need to sleep for the next night's slumber
// function to returning each given night's hours of sleep

//
const getSleepHours = day => {
  switch (day) {
    case 'monday':
      return 8
      break;
    case 'tuesday':
      return 7
      break;
    case 'wednesday':
      return 8
      break;
    case 'thursday':
      return 5
      break;
    case 'friday':
      return 5
      break;
    case 'saturday':
      return 7
      break;
    case 'sunday':
      return 8
      break;
    default:
    return 'Error!'
  }
};

// get total sleep hours you actually slept
const getActualSleepHours = () => getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday')

// get ideal sleep hours, no parameters
const getIdealSleepHours = () => {
  const idealHours = 7
  return idealHours * 7
};

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
  if (actualSleepHours === idealSleepHours) {
    console.log('You have the right amount of sleep this week.');
  } else if (actualSleepHours > idealSleepHours) {
    console.log('You got ' + (actualSleepHours - idealSleepHours) + ' more hours of sleep than what\`s needed.');
  } else {
    console.log('You have ' + (idealSleepHours - actualSleepHours) + ' hours less than should get more sleep.')
  }
};

calculateSleepDebt();
