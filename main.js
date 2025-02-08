function getComputerChoice() {
  const randomNumber = Math.random() * 3;

  if (randomNumber < 1) {
    return `rock`;
  } else if (randomNumber < 2) {
    return `paper`;
  } else {
    return `scissors`;
  }
}

// console.log(getComputerChoice());

function getHumanChoice() {
  const userInput = prompt(`Masukkan pilihan Anda: "rock", "paper", atau "scissors"`);
  return userInput;
}

// console.log(getHumanChoice());

const humanScore = 0;
const computerScore = 0;

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();

  // Cek pemenang
  if (humanChoice === computerChoice) {
    console.log(`Seri!`);
  } else if ((humanChoice === `rock` && computerChoice === `scissors`) || (humanChoice === `paper` && computerChoice === `rock`) || (humanChoice === `scissors` && computerChoice === `paper`)) {
    console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    humanScore++;
  } else {
    console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
  }
  computerScore++;
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
