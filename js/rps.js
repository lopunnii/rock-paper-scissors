function computerPlay () {
      const options = [
           "Rock",
           "Paper",
           "Scissors"
      ];
      let computerPlayResult = options[Math.floor(Math.random() * options.length)]; 
      return computerPlayResult; 
 }

let computerSelection = computerPlay();
let playerSelection;

let playerScore = 0;
let computerScore = 0;

 function playRound (playerSelection, computerSelection) {
      computerSelection = computerPlay();
      seeSelections(playerSelection, computerSelection);
      let result;
     switch (true){
         case playerSelection.toLowerCase() == computerSelection.toLowerCase():
              result = ("It's a tie!");
              break;
         case playerSelection.toLowerCase() == "rock" && computerSelection.toLowerCase() == "scissors":
              playerScore ++ 
              result = ("You win! Rock beats Scissors!");
              break;
         case playerSelection.toLowerCase() == "paper" && computerSelection.toLowerCase() == "rock":
              playerScore ++
              result = ("You win! Paper beats Rock!");
              break;
         case playerSelection.toLowerCase() == "scissors" && computerSelection.toLowerCase() == "paper":
              playerScore ++
              result = ("You win! Scissors beats Paper!");
              break;
         case playerSelection.toLowerCase() == "rock" && computerSelection.toLowerCase() == "paper":
              computerScore ++
              result = ("You lose! Paper beats Rock!");
              break;
         case playerSelection.toLowerCase() == "paper" && computerSelection.toLowerCase() == "scissors":
              computerScore ++
              result = ("You lose! Scissors beats Paper!");
              break;
         case playerSelection.toLowerCase() == "scissors" && computerSelection.toLowerCase() == "rock":
              computerScore ++
              result = ("You lose! Rock beats Scissors!");
              break;
         default: 
              result = ("Please select either 'rock', 'paper' or 'scissors'");
     }
    seeResult(result);
    seeScore(playerScore, computerScore);
    if (playerScore == 5 || computerScore == 5){
      resetGame(playerScore, computerScore);
      playerScore = 0;
      computerScore = 0;
    }
    return result;
 }

function resetGame (playerScore, computerScore) {
     const results = document.querySelector('#results');
     const matchEnd = document.createElement('div');
     if (playerScore == 5) {
     matchEnd.textContent = "Player wins the match!";
     matchEnd.style.color = 'green';
     results.appendChild(matchEnd);
} else if (computerScore == 5) {
     matchEnd.textContent = "Computer wins the match!";
     matchEnd.style.color = 'red';
     results.appendChild(matchEnd);
} 
}

//Results
const results = document.querySelector('#results');
const selections = document.createElement('p');
selections.setAttribute('id', 'selections');
results.appendChild(selections);

const roundResult = document.createElement('p');
roundResult.setAttribute('id', 'roundResult');
results.appendChild(roundResult);

const score = document.createElement('p');
score.setAttribute('id', 'score');
results.appendChild(score);

function seeSelections (playerSelection, computerSelection) {
    const selections = document.querySelector('#selections');
    selections.textContent = 'You: ' + playerSelection + ' ' + 'Computer: ' + computerSelection;
}

function seeScore (playerScore, computerScore) {
     const results = document.querySelector('#score');
     score.textContent = playerScore + ' - ' + computerScore;
}

function seeResult (result) {
     const results = document.querySelector('#roundResult');
     results.textContent = result; 
}

//Buttons
const rockBtn = document.querySelector('#rock-btn');
rockBtn.addEventListener('click', () => {
  playRound("Rock", computerSelection);
});

const paperBtn = document.querySelector('#paper-btn');
paperBtn.addEventListener('click', () => {
  playRound("Paper", computerSelection);
});

const scissorsBtn = document.querySelector('#scissors-btn');
scissorsBtn.addEventListener('click', () => {
  playRound("Scissors", computerSelection);
});

