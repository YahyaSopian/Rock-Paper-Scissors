function getComputerChoice() {
  const randomNumber = Math.random() * 3;
  console.log(randomNumber);

  if (randomNumber < 1) {
    return `rock`;
  } else if (randomNumber < 2) {
    return `paper`;
  } else {
    return `scissors`;
  }
}

console.log(getComputerChoice());

function getHumanChoice() {
  const userInput = prompt(`Masukkan pilihan Anda: "rock", "paper", atau "scissors"`);
  return userInput;
}

console.log(getHumanChoice());

const humanScore = 0;
const computerScore = 0;
