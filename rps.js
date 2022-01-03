function computerPlay () {
      const options = [
           "rock",
           "paper",
           "scissors"
      ];
      let computerPlayResult = options[Math.floor(Math.random() * options.length)]; 
      return computerPlayResult; 
 }

let computerSelection = computerPlay();
let playerSelection;

let playerScore = 0;
let computerScore = 0;



 function playRound (playerSelection, computerSelection) {
      //playerSelection = prompt("Rock, paper or scissors?");
      console.log(playerSelection);
      computerSelection = computerPlay();
      console.log(computerSelection);
      let result ;
     switch (true){
         case playerSelection.toLowerCase() == computerSelection:
              result = ("It's a tie!");
              break;
         case playerSelection.toLowerCase() == "rock" && computerSelection == "scissors":
              playerScore ++ 
              result = ("You win! Rock beats Scissors!");
              break;
         case playerSelection.toLowerCase() == "paper" && computerSelection == "rock":
              playerScore ++
              result = ("You win! Paper beats Rock!");
              break;
         case playerSelection.toLowerCase() == "scissors" && computerSelection == "paper":
              playerScore ++
              result = ("You win! Scissors beats Paper!");
              break;
         case playerSelection.toLowerCase() == "rock" && computerSelection == "paper":
              computerScore ++
              result = ("You lose! Paper beats Rock!");
              break;
         case playerSelection.toLowerCase() == "paper" && computerSelection == "scissors":
              computerScore ++
              result = ("You lose! Scissors beats Paper!");
              break;
         case playerSelection.toLowerCase() == "scissors" && computerSelection == "rock":
              computerScore ++
              result = ("You lose! Rock beats Scissors!");
              break;
         default: 
              result = ("Please type either 'rock', 'paper' or 'scissors'");
     }
    return result;
 }

/*function game () {
     console.log(playRound(playerSelection, computerSelection));
     console.log(playRound(playerSelection, computerSelection));
     console.log(playRound(playerSelection, computerSelection));
     console.log(playRound(playerSelection, computerSelection));
     console.log(playRound(playerSelection, computerSelection));
     console.log(playerScore);
     console.log(computerScore);
     if (playerScore > computerScore) {
     console.log("Player wins!");
} else if (computerScore > playerScore) {
     console.log("Computer wins!");
} else if (playerScore == computerScore) {
     console.log("It's a tie!");
}
}

game();*/

const rockBtn = document.querySelector('#rockBtn');
rockBtn.addEventListener('click', () => {
  playRound("rock", computerSelection);
});

const paperBtn = document.querySelector('#paperBtn');
paperBtn.addEventListener('click', () => {
  playRound("paper", computerSelection);
});

const scissorsBtn = document.querySelector('#scissorsBtn');
scissorsBtn.addEventListener('click', () => {
  playRound("scissors", computerSelection);
});