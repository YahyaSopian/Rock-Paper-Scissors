// Fungsi untuk mendapatkan pilihan komputer
const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) {
    return `rock`;
  } else if (randomNumber === 1) {
    return `paper`;
  } else {
    return `scissors`;
  }
};

// Fungsi unutuk memainkan permainan
const playGame = () => {
  // Membuat variabel untuk menyimpan skor
  let humanScore = 0;
  let computerScore = 0;
  // Mengakses elemen div dengan id "results" untuk menampilkan hasil
  const results = document.getElementById("results");

  // Fungsi untuk memainkan permainan satu kali
  const playRound = (humanChoice, computerChoice) => {
    //  Logika untuk menentukan hasil permainan
    if (humanChoice === computerChoice) {
      results.textContent = `It's a tie! Both choose ${humanChoice}`;
    } else if ((humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "paper" && computerChoice === "rock") || (humanChoice === "scissors" && computerChoice === "paper")) {
      humanScore++;
      results.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
    } else {
      computerScore++;
      results.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
    }

    // Menampilkan skor
    results.innerText += `\nScore: ${humanScore} - ${computerScore}`;
    // Logika untuk menampilkan pemenang dan mereset skor setelah skor mencapai 5
    if (humanScore === 5) {
      results.textContent = `You win the game! \nFinal score: ${humanScore} - ${computerScore}`;
      // reset skor
      humanScore = 0;
      computerScore = 0;
    } else if (computerScore === 5) {
      results.innerHTML = `You lose the game!\nFinal score: ${humanScore} - ${computerScore}`;
      // reset skor
      humanScore = 0;
      computerScore = 0;
    }
  };

  // Mengakses elemen button dengan id "rock", "paper", dan "scissors" dan menambahkan event listener
  const rockButton = document.getElementById("rock");
  const paperButton = document.getElementById("paper");
  const scissorsButton = document.getElementById("scissors");

  rockButton.addEventListener(`click`, () => {
    const computerSelection = getComputerChoice();
    playRound("rock", computerSelection);
  });

  paperButton.addEventListener(`click`, () => {
    const computerSelection = getComputerChoice();
    playRound("paper", computerSelection);
  });

  scissorsButton.addEventListener(`click`, () => {
    const computerSelection = getComputerChoice();
    playRound("scissors", computerSelection);
  });
};

// Memanggil fungsi playGame saat halaman dimuat
playGame();
