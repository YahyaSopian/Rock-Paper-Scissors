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

function playGame() {
  let humanScore = 0;
  let computerScore = 0;
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
}

playGame();
