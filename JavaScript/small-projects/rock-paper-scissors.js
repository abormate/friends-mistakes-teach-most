// JavaScript simple game around the concept of rock-paper-scissors. Wherein you need to first supply what your pick is. And the computer will evaluate after.

const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
    return userInput;
  } else {
    console.log('Error! Please only enter rock, or paper, or scissors to play.')
  }
};

const getComputerChoice = () => {
  const numRandom = Math.floor(Math.random() * 3)
  if (numRandom === 0) {
    return 'rock';
  } else if (numRandom === 1) {
    return 'scissors';
  } else {
    return 'paper';
  }
};

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return 'It\'s a tie! No winners or losers.'
  }
  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'Computer wins this round!'
    } else {
      return 'Human player wins! congrats!'
    }
  }
  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'Computer wins!'
    } else {
      return 'Human player wins! thanks for playing.'
    }
  }
  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'Computer wins!'
    } else {
      return 'Human player wins!'
    }
  }
}

const playGame = (userChoice = getUserChoice('rock'), computerChoice = getComputerChoice()) => {
  console.log(`human player chooses: ${userChoice} and computer chose: ${computerChoice}`);
  console.log(determineWinner(userChoice,computerChoice));
};

playGame();

// Evaluates randomly generated computer entry with the player's initial entry (whether rock, paper, or scissors) and then says who won a particular match
