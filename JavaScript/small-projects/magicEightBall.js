
  
// eightBall program running vanilla JavaScript

// define username
let userName = 'Abraham';

// greet userName
userName ? console.log('Hello, ' + userName + '!') : console.log('Hello!');

// Ask Magic Eight Ball
let userQuestion = 'What do you want to ask from the Magic Eight Ball?';

//print question + username
console.log(userQuestion + ' ' + userName);

// randomizer
let randomNumber = Math.floor(Math.random() * 8);

// eightball
let eightBall = '';

// direction flow

if (randomNumber === 0) {
  eightBall = 'It is certain';
}

else if (randomNumber === 1) {
  eightBall = 'It is decidedly so';
}

else if (randomNumber === 2) {
  eightBall = 'Reply hazy try again';
}

else if (randomNumber === 3) {
  eightBall = 'Cannot predict now';
}

else if (randomNumber === 4) {
  eightBall = 'Do not count on it';
}

else if (randomNumber === 5) {
  eightBall = 'My sources say no';
}

else if (randomNumber === 6) {
  eightBall = 'Outlook not so good';
}

else if (randomNumber === 7) {
  eightBall = 'Signs point to yes';
}

else {
  eightBall = 'Nothing to tell you right now';
}

console.log(eightBall)

// Magic 8th Ball 
