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

    // mengakses div dengan id result untuk menampilkan hasil
    const result = document.getElementById("result");
    // Cek pemenang
    if (humanChoice === computerChoice) {
      result.textContent = "Seri!";
      console.log(`Seri!`);
    } else if ((humanChoice === `rock` && computerChoice === `scissors`) || (humanChoice === `paper` && computerChoice === `rock`) || (humanChoice === `scissors` && computerChoice === `paper`)) {
      result.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
      console.log(`You win! ${humanChoice} beats ${computerChoice}`);
      humanScore++;
    } else {
      result.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
      console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    }
    computerScore++;
  }

  // Mengakses tombol pilihan dan menambahkan event listener
  document.getElementById("rock").addEventListener("click", () => {
    const computerChoice = getComputerChoice();
    playRound("rock", computerChoice);
  });
  document.getElementById("paper").addEventListener("click", () => {
    const computerChoice = getComputerChoice();
    playRound("paper", computerChoice);
  });
  document.getElementById("scissors").addEventListener("click", () => {
    const computerChoice = getComputerChoice();
    playRound("scissors", computerChoice);
  });
}

playGame();
